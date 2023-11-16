import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-perfil-paciente',
  templateUrl: './perfil-paciente.component.html',
  styleUrls: ['./perfil-paciente.component.css']
})
export class PerfilPacienteComponent implements OnInit{

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
