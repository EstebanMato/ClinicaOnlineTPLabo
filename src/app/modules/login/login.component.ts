import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin, take } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  paciente1: any;
  paciente2: any;
  paciente3: any;
  especialista1: any;
  especialista2: any;
  admin: any;

  usuario = {
    email: '',
    password: ''
  }

  uid: string | undefined;
  estado: any | undefined;

  isLoading = false;

  constructor(private authService: AuthService, private router: Router) { }

  async ingresar() {
    try {
      this.isLoading = true;
      const { email, password } = this.usuario;
      const res = await this.authService.ingresar(email, password);
      this.uid = res.user?.uid;

      if (this.uid) {
        const user = await this.authService.getUsuarioPorUid(this.uid).pipe(take(1)).toPromise();
        if (!user) {
          return
        }
        this.estado = user[0]['estado'];
        if (!res.user?.emailVerified || !this.estado) {
          this.authService.logOut();
          Swal.fire({
            icon: 'error',
            title: 'Usuario no validado',
            text: 'El usuario no se encuentra verificado, favor de revisar el correo',
          });
        } else {
          switch (user[0]['perfil']) {
            case 'especialista':
              this.router.navigate(['/home/especialista']);
              break;

            case 'paciente':
              this.router.navigate(['/home/paciente']);

              break;

            case 'admin':
              this.router.navigate(['/home/admin']);

              break;

            default:
              this.router.navigate(['**']);

              break;
          }
        }
      }
      this.isLoading = false;

    } catch (error: any) {
      switch (error.code) {
        case 'auth/invalid-login-credentials':
          Swal.fire({
            icon: 'error',
            title: 'Error en las credenciales',
            text: 'Correo o contraseña incorrecta',
          })
          break;
        case 'auth/invalid-email':
          Swal.fire({
            icon: 'error',
            title: 'Error en el formato del correo',
            text: 'El correo debe ser valido por ejemplo "nombre@correo.com"',
          })
          break;
        default:
          console.error('Error durante la autenticación:', error);
          break;
      }
      this.isLoading = false;
    }
  }

  async accesoRapido(email: string, password: string, ruta: string) {
    this.isLoading = true;
    await this.authService.ingresar(email, password);
    await this.router.navigate([ruta]).then(() => this.isLoading = false)
  }

  ngOnInit(): void {
    this.isLoading = true;

    const paciente1$ = this.authService.getUsuarioPorUid("Ag8N0qxVuTQKun7Vy0C1iTG8Zoh2");
    const paciente2$ = this.authService.getUsuarioPorUid("O38GcAa7K3QGsXIwbgVlFb9yz6Z2");
    const paciente3$ = this.authService.getUsuarioPorUid("Me0MLYFx4qhEUUeP8zqEbGuu2Lx1");
    const especialista1$ = this.authService.getUsuarioPorUid("dCIDlnZ9L9QYL395R3C7JDSG37l1");
    const especialista2$ = this.authService.getUsuarioPorUid("Jhdiy07QZQhqogrRlGZd1nDSGA43");
    const admin$ = this.authService.getUsuarioPorUid("INyXUWk5pvh9EoAQzJATDr9Vzlh1");

    forkJoin([
      paciente1$, paciente2$, paciente3$,
      especialista1$, especialista2$, admin$
    ]).subscribe(
      ([paciente1, paciente2, paciente3, especialista1, especialista2, admin]) => {
        this.paciente1 = paciente1;
        this.paciente2 = paciente2;
        this.paciente3 = paciente3;
        this.especialista1 = especialista1;
        this.especialista2 = especialista2;
        this.admin = admin;
        this.isLoading = false;
      },
      error => {
        console.error('Error al cargar usuarios:', error);
        this.isLoading = false;
      }
    );
  }
}
