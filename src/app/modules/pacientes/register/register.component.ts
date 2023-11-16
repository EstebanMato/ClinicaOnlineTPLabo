import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DataqueryService } from 'src/app/services/dataquery.service';
import { StorageService } from 'src/app/services/storage.service';
import { fechaNacimientoValidator } from 'src/app/validators/fechaNacimiento.validators';
import { RecaptchaService } from 'src/app/services/recaptcha.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //reCAPTCHA
  protected aFormGroup!: FormGroup;
  siteKey!: string;
  captchaResolved: boolean = false;

  form!: FormGroup;
  obraSociales: any[] = [];
  imagen: any[] = [];
  archivo: any;
  isLoading = false;

  constructor(private authService: AuthService, private router: Router, private dataqueryService: DataqueryService, 
              private storageService: StorageService, private formBuilder: FormBuilder, private recaptchaService: RecaptchaService) { }


  ngOnInit(): void {
    this.siteKey = this.recaptchaService.getSiteKey();
    //reCAPTCHA
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });

    this.form = new FormGroup({
      nombre: new FormControl("", [Validators.pattern('^[a-zA-Z]+$'), Validators.required],),
      apellido: new FormControl("", [Validators.pattern('^[a-zA-Z]+$'), Validators.required],),
      dni: new FormControl("", [Validators.pattern('^[0-9]+$'), Validators.required]),
      mail: new FormControl("", [Validators.email, Validators.required]),
      password: new FormControl("", [Validators.minLength(6), Validators.required]),
      fechaNacimiento: new FormControl("", [Validators.required, fechaNacimientoValidator]),
      obraSocial: new FormControl(""),
      img: new FormControl(null, [Validators.required]),
    })

    this.dataqueryService.getObraSociales().subscribe((res) => { this.obraSociales = res; })
  }

  get nombre() {
    return this.form.get('nombre');
  }
  get apellido() {
    return this.form.get('apellido');
  }
  get dni() {
    return this.form.get('dni');
  }
  get mail() {
    return this.form.get('mail');
  }
  get password() {
    return this.form.get('password');
  }
  get obraSocial() {
    return this.form.get('obraSocial');
  }
  get fechaNacimiento() {
    return this.form.get('fechaNacimiento');
  }
  get img() {
    return this.form.get('img');
  }

  handleSuccess(response: any): void {
    // Manejar la lógica cuando el reCAPTCHA se resuelve correctamente
    console.log('reCAPTCHA resuelto:', response);
    this.captchaResolved = true;
  }

  async registrarse() {
    try {
      this.isLoading = true;
      await this.authService.registrarUsuario(this.mail?.value, this.password?.value).then((userCredential) => {
        this.cargarImagen(this.archivo).then(() => {
          this.authService.altaPaciente(this.nombre?.value, this.apellido?.value, this.dni?.value, this.fechaNacimiento?.value,
            this.mail?.value, this.password?.value, userCredential.user?.uid,
            this.obraSocial?.value, this.imagen)
        }).then(() => {
          Swal.fire({
            icon: 'success',
            title: 'Usuario registrado',
            text: 'Por favor verifica tu correo para validar el acceso',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
          this.router.navigate(['login']);
          this.isLoading = false;
        })
      })
    } catch (error: any) {
      this.isLoading = false;
      switch (error.code) {

        case 'auth/email-already-in-use':
          Swal.fire({
            icon: 'error',
            title: 'Error en el usuario',
            text: 'El correo ya se encuentra registrado',
          })
          break;
        case 'auth/invalid-email':
          Swal.fire({
            icon: 'error',
            title: 'Error en el formato del correo',
            text: 'El correo debe ser valido por ejemplo "nombre@correo.com"',
          })
          break;
        case 'auth/weak-password':
          Swal.fire({
            icon: 'error',
            title: 'Error en el password',
            text: 'El password debe contener al menos 6 carácteres',
          })
          break;
        default:
          console.error('Error durante la autenticación:', error);
          break;
      }
    }
  }

  cargarArchivo(event: any) {
    let file = event.target.files;
    this.archivo = file;
  }

  async cargarImagen(archivo: any[]) {
    return new Promise(async (resolve, reject) => {
      const totalImages = archivo.length;
      let imagesLoaded = 0;

      for (let i = 0; i < archivo.length; i++) {
        const reader = new FileReader();

        reader.onloadend = () => {
          this.storageService
            .subirImagen(this.dni?.value + "_" + Date.now(), reader.result, "paciente")
            .then((res) => {
              this.imagen.push(res);
              imagesLoaded++;
              if (imagesLoaded === totalImages) {
                // Si todas las imágenes se han cargado, resuelve la promesa
                resolve(this.imagen);
              }
            })
            .catch((error) => {
              reject(error);
            });
        };

        reader.readAsDataURL(archivo[i]);
      }
    });
  }


}
