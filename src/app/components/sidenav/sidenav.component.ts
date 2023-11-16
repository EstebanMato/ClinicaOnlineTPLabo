import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnDestroy, OnInit {

  sesionIniciada = false;
  usuarioLogueado: any;
  private authSubscription!: Subscription;



  constructor(private authService: AuthService) {

  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

  ngOnInit(): void {

    this.authSubscription = this.authService.getLoggedUser().subscribe((user: any) => {
      this.sesionIniciada = !!user;
      if (user) {
        this.authService.getUsuarioPorUid(user.uid).subscribe((usuario) => {
          this.usuarioLogueado = usuario;
        })
      }

    })
  }
}
