import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

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
          console.log(user)
          switch (user[0]['perfil']) {
            case 'doctor':
              this.router.navigate(['home/especialista']);
              break;
          
            case 'paciente':
              this.router.navigate(['home/paciente']);
              break;
          
            case 'administrador':
              this.router.navigate(['home/admin']);
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
      this.router.navigate([ruta]);
      this.isLoading = false;
  }

}
