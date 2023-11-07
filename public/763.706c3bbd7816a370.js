"use strict";(self.webpackChunkclinica_online=self.webpackChunkclinica_online||[]).push([[763],{8763:(b,u,n)=>{n.r(u),n.d(u,{LoginModule:()=>C});var g=n(6814),l=n(969),m=n(5861),p=n(8180),f=n(3519),d=n.n(f),e=n(5879),h=n(154),c=n(95);function v(o,L){1&o&&(e.TgZ(0,"div",20),e._UZ(1,"div",21),e.qZA())}const Z=[{path:"",component:(()=>{class o{constructor(t,i){this.authService=t,this.router=i,this.usuario={email:"",password:""},this.isLoading=!1}ingresar(){var t=this;return(0,m.Z)(function*(){try{t.isLoading=!0;const{email:i,password:r}=t.usuario,a=yield t.authService.ingresar(i,r);if(t.uid=a.user?.uid,t.uid){const s=yield t.authService.getUsuarioPorUid(t.uid).pipe((0,p.q)(1)).toPromise();if(!s)return;if(t.estado=s[0].estado,a.user?.emailVerified&&t.estado)switch(console.log(s),s[0].perfil){case"doctor":t.router.navigate(["home/especialista"]);break;case"paciente":t.router.navigate(["home/paciente"]);break;case"administrador":t.router.navigate(["home/admin"]);break;default:t.router.navigate(["**"])}else t.authService.logOut(),d().fire({icon:"error",title:"Usuario no validado",text:"El usuario no se encuentra verificado, favor de revisar el correo"})}t.isLoading=!1}catch(i){switch(i.code){case"auth/invalid-login-credentials":d().fire({icon:"error",title:"Error en las credenciales",text:"Correo o contrase\xf1a incorrecta"});break;case"auth/invalid-email":d().fire({icon:"error",title:"Error en el formato del correo",text:'El correo debe ser valido por ejemplo "nombre@correo.com"'});break;default:console.error("Error durante la autenticaci\xf3n:",i)}t.isLoading=!1}})()}accesoRapido(t,i,r){var a=this;return(0,m.Z)(function*(){a.isLoading=!0,yield a.authService.ingresar(t,i),a.router.navigate([r]),a.isLoading=!1})()}static#e=this.\u0275fac=function(i){return new(i||o)(e.Y36(h.e),e.Y36(l.F0))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-login"]],decls:38,vars:3,consts:[[1,"form-principal"],[1,"px-4","py-5","px-md-5","text-center","text-lg-start"],[1,"container"],["class","overlay",4,"ngIf"],[1,"row","gx-lg-5","align-items-center"],[1,"col-lg-6","mb-5","mb-lg-0"],[1,"my-5","display-3","fw-bold","ls-tight"],[1,"text-danger"],[2,"color","hsl(217, 10%, 50.8%)"],[1,"card"],[1,"card-body","py-5","px-md-5"],[1,"form-outline","mb-4"],["type","email",1,"form-control",3,"ngModel","ngModelChange"],[1,"form-label"],["type","password",1,"form-control",3,"ngModel","ngModelChange"],[1,"d-flex","justify-content-center"],["type","submit",1,"btn","btn-danger","btn-block","mb-4",2,"width","80%",3,"click"],[1,"text-center"],["routerLink","pacientes/register",1,"btn","btn-secondary"],[1,"btn","btn-secondary",3,"click"],[1,"overlay"],[1,"spinner"]],template:function(i,r){1&i&&(e.TgZ(0,"section",0)(1,"div",1)(2,"div",2),e.YNc(3,v,2,0,"div",3),e.TgZ(4,"div",4)(5,"div",5)(6,"h1",6),e._uU(7," Cl\xednica Salud "),e._UZ(8,"br"),e.TgZ(9,"span",7),e._uU(10,"Medicina privada"),e.qZA()(),e.TgZ(11,"p",8),e._uU(12," Administr\xe1 tu informaci\xf3n: cobertura, tr\xe1mites y gestiones m\xe9dicas. Todo en un mismo lugar, mucho m\xe1s f\xe1cil. "),e.qZA()(),e.TgZ(13,"div",5)(14,"div",9)(15,"div",10)(16,"div",11)(17,"input",12),e.NdJ("ngModelChange",function(s){return r.usuario.email=s}),e.qZA(),e.TgZ(18,"label",13),e._uU(19,"Correo"),e.qZA()(),e.TgZ(20,"div",11)(21,"input",14),e.NdJ("ngModelChange",function(s){return r.usuario.password=s}),e.qZA(),e.TgZ(22,"label",13),e._uU(23,"Contrase\xf1a"),e.qZA()(),e.TgZ(24,"div",15)(25,"button",16),e.NdJ("click",function(){return r.ingresar()}),e._uU(26," Ingresar "),e.qZA()(),e.TgZ(27,"div",17)(28,"p"),e._uU(29,"No tenes usuario?"),e.qZA(),e.TgZ(30,"button",18),e._uU(31,"Registrarse"),e.qZA()()()()()()()()(),e.TgZ(32,"button",19),e.NdJ("click",function(){return r.accesoRapido("admin@gmail.com","123456","/home/admin")}),e._uU(33,"Acceso admin"),e.qZA(),e.TgZ(34,"button",19),e.NdJ("click",function(){return r.accesoRapido("estebanemato@gmail.com","123456","/home/especialistas")}),e._uU(35,"Acceso especialista"),e.qZA(),e.TgZ(36,"button",19),e.NdJ("click",function(){return r.accesoRapido("estebanemato@icloud.com","123456","/home/pacientes")}),e._uU(37,"Acceso paciente"),e.qZA()),2&i&&(e.xp6(3),e.Q6J("ngIf",r.isLoading),e.xp6(14),e.Q6J("ngModel",r.usuario.email),e.xp6(4),e.Q6J("ngModel",r.usuario.password))},dependencies:[g.O5,l.rH,c.Fj,c.JJ,c.On],styles:[".form-principal[_ngcontent-%COMP%]{margin-top:3.5rem;margin-left:3.5rem}.overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;background-color:#fffc;display:flex;align-items:center;justify-content:center;z-index:9999}.spinner[_ngcontent-%COMP%]{border:4px solid rgba(255,255,255,.3);border-top:4px solid #e64141;border-radius:50%;width:50px;height:50px;animation:_ngcontent-%COMP%_spin 2s linear infinite}@keyframes _ngcontent-%COMP%_spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}"]})}return o})()},{path:"pacientes/register",loadChildren:()=>Promise.all([n.e(928),n.e(592),n.e(626)]).then(n.bind(n,7626)).then(o=>o.RegisterModule)},{path:"especialistas/register-empleado",loadChildren:()=>Promise.all([n.e(928),n.e(592),n.e(340)]).then(n.bind(n,9340)).then(o=>o.RegisterEmpleadoModule)}];let y=(()=>{class o{static#e=this.\u0275fac=function(i){return new(i||o)};static#t=this.\u0275mod=e.oAB({type:o});static#n=this.\u0275inj=e.cJS({imports:[l.Bz.forChild(Z),l.Bz]})}return o})(),C=(()=>{class o{static#e=this.\u0275fac=function(i){return new(i||o)};static#t=this.\u0275mod=e.oAB({type:o});static#n=this.\u0275inj=e.cJS({imports:[g.ez,y,c.u5]})}return o})()}}]);