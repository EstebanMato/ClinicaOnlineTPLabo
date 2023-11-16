import { Component, OnInit } from '@angular/core';
import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-perfil-especialista',
  templateUrl: './perfil-especialista.component.html',
  styleUrls: ['./perfil-especialista.component.css']
})
export class PerfilEspecialistaComponent implements OnInit{
  isLoading = false;
  usuario: any;
  constructor(private authService: AuthService){}

  ngOnInit(): void {
    this.isLoading = true;
    this.authService.getLoggedUser().subscribe((user)=>{
      if(!user)
      return
      this.authService.getUsuarioPorUid(user.uid).subscribe((user)=>{this.usuario=user[0]; this.isLoading=false; console.log(this.usuario)})
    })
  }
}
