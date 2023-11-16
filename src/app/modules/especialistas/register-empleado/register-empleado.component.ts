import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DataqueryService } from 'src/app/services/dataquery.service';
import { RecaptchaService } from 'src/app/services/recaptcha.service';
import { StorageService } from 'src/app/services/storage.service';
import { fechaNacimientoValidator } from 'src/app/validators/fechaNacimiento.validators';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-empleado',
  templateUrl: './register-empleado.component.html',
  styleUrls: ['./register-empleado.component.css']
})
export class RegisterEmpleadoComponent implements OnInit {

  //reCAPTCHA
  protected aFormGroup!: FormGroup;
  siteKey!: string;
  captchaResolved: boolean = false;

  form!: FormGroup;
  especialidades: any[] = [];
  imagen: any;
  archivo: File | null = null;
  isLoading = false;
  especialidadUsuario: any[] = [];

  constructor(private dataqueryService: DataqueryService, private storageService: StorageService, private authService: AuthService, 
            private router: Router, private formBuilder: FormBuilder, private recaptchaService: RecaptchaService) { }

  ngOnInit(): void {

    this.siteKey = this.recaptchaService.getSiteKey();
    //reCAPTCHA
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });

    this.form = new FormGroup({
      nombre: new FormControl("", [Validators.pattern('^[a-zA-Z ]+$'), Validators.required],),
      apellido: new FormControl("", [Validators.pattern('^[a-zA-Z ]+$'), Validators.required],),
      dni: new FormControl("", [Validators.pattern('^[0-9]+$'), Validators.required],),
      mail: new FormControl("", [Validators.email, Validators.required]),
      password: new FormControl("", [Validators.minLength(6), Validators.required]),
      fechaNacimiento: new FormControl("", [Validators.required, fechaNacimientoValidator]),
      especialidad: new FormControl(""),
      img: new FormControl("", [Validators.required]),
      nuevaEspecialidad: new FormControl("", [Validators.pattern('^[a-z ]+$')])
    })

    this.dataqueryService.getEspecialidades().subscribe((res) => { this.especialidades = res; });
  }

  handleSuccess(response: any): void {
    // Manejar la lógica cuando el reCAPTCHA se resuelve correctamente
    console.log('reCAPTCHA resuelto:', response);
    this.captchaResolved = true;
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
  get especialidad() {
    return this.form.get('especialidad');
  }
  get fechaNacimiento() {
    return this.form.get('fechaNacimiento');
  }
  get img() {
    return this.form.get('img');
  }
  get nuevaEspecialidad() {
    return this.form.get('nuevaEspecialidad');
  }

  async registrarse() {
    try {
      this.isLoading = true;
      this.especialidadUsuario = [];
      await this.authService.registrarUsuario(this.mail?.value, this.password?.value).then((userCredential) => {

        if (this.especialidad?.value && this.especialidad?.value != "") {
          for (const especialidadSeleccionada of this.especialidad.value) {
            console.log(especialidadSeleccionada);
            const especialidadAux = especialidadSeleccionada.toLowerCase();
            this.especialidadUsuario.push(especialidadAux);
          }
        }

        if (!this.nuevaEspecialidad?.pristine) {
          this.especialidadUsuario.push(this.nuevaEspecialidad?.value)
        }

        this.cargarImagen(this.archivo).then(() => {
          this.authService.altaEspecialista(this.nombre?.value, this.apellido?.value, this.dni?.value, this.fechaNacimiento?.value,
            this.mail?.value, this.password?.value, userCredential.user?.uid, this.especialidadUsuario, this.imagen)

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
          if (!this.nuevaEspecialidad?.pristine) {
            this.dataqueryService.altaEspecialidad(this.nuevaEspecialidad?.value)
          }
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
    let file = event.target.files[0];
    this.archivo = file;
  }

  async cargarImagen(archivo: any) {
    return new Promise(async (resolve, reject) => {
      let reader = new FileReader();

      reader.onloadend = () => {
        this.storageService.subirImagen(this.dni?.value + "_" + Date.now(), reader.result, "empleado")
          .then((res) => {
            this.imagen = res;
            resolve(true);
          })
          .catch((error) => {
            reject(error);
          });
      };

      reader.readAsDataURL(archivo);
    });
  }
}
