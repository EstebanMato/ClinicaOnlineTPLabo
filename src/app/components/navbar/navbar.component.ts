import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  public usuarioLogueado: any ={}
  public uid: string = "";
  constructor(private authservice: AuthService, private router: Router){}

  ngOnInit(): void {
    this.authservice.getLoggedUser().subscribe((user)=>{
      if(user == null){
        return
      }
      this.usuarioLogueado= user;
      this.authservice.getUsuarioPorUid(this.usuarioLogueado.uid).subscribe((res)=>{
        if(res.length >0){
          this.usuarioLogueado.nombre = res[0]['nombre']
        }
        });

    })
  }
  logOut(){
    this.usuarioLogueado = {};
    this.authservice.logOut();
    this.router.navigate(['login']);
  }
}
