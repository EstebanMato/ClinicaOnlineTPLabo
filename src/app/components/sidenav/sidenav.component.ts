import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit{

  usuarioLogueado : any;

  constructor(private authService: AuthService){}

  ngOnInit(): void {
    this.authService.getLoggedUser().subscribe((user)=>{
      if(!user){
        return;
      }
      this.authService.getUsuarioPorUid(user.uid).subscribe((usuario)=>{
        this.usuarioLogueado = usuario;
      })
    })
  }
}
