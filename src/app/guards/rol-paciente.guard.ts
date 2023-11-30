import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable, of, switchMap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class rolPacienteGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.authService.getLoggedUser().pipe(
      switchMap((user: any) => {
        if (user && user['uid']) {
          return this.authService.getUsuarioPorUid(user['uid']).pipe(
            switchMap((usuarios: any[]) => {
              const usuario = usuarios[0];
              if (usuario && usuario.perfil === 'paciente') {
                return of(true);
              } else {
                this.router.navigate(['/login']);
                return of(false);
              }
            })
          );
        } else {
          this.router.navigate(['/login']);
          return of(false);
        }
      })
    );
  }
  
}

