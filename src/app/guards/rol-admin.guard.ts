import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.authService.getLoggedUser().pipe(
      switchMap((user: any) => {
        return this.authService.getUsuarioPorUid(user['uid']).pipe(
          switchMap((usuarios: any[]) => {
            const usuario = usuarios[0];
            if (usuario && usuario.perfil === 'admin') {
              console.log("Usuario autenticado y es administrador");
              return of(true);
            } else {
              console.log("Usuario no autenticado o no es administrador");
              this.router.navigate(['/login']);
              return of(false); 
            }
          })
        );
      })
    );
  }
    }