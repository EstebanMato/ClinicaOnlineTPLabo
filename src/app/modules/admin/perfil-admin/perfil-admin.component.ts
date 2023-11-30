import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-perfil-admin',
  templateUrl: './perfil-admin.component.html',
  styleUrls: ['./perfil-admin.component.css']
})
export class PerfilAdminComponent implements OnInit{
  isLoading = false;
  usuario: any;
  constructor(private authService: AuthService){}

  ngOnInit(): void {
    this.isLoading = true;
    this.authService.getLoggedUser().subscribe((user)=>{
      if(!user)
      return
      this.authService.getUsuarioPorUid(user.uid).subscribe((user)=>{this.usuario=user[0]; this.isLoading=false;})
    })
  }
}
