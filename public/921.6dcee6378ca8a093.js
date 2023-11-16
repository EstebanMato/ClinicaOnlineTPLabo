"use strict";(self.webpackChunkclinica_online=self.webpackChunkclinica_online||[]).push([[921],{9921:(k,f,o)=>{o.r(f),o.d(f,{RegisterAdminModule:()=>F});var h=o(6814),m=o(9517),u=o(5861),r=o(6223),v=o(1614),Z=o(3519),c=o.n(Z),e=o(5879),b=o(588),A=o(130),_=o(154);function I(n,l){1&n&&(e.TgZ(0,"div",27),e._UZ(1,"div",28),e.qZA())}function y(n,l){1&n&&(e.ynx(0),e.TgZ(1,"small",29),e._uU(2,"S\xf3lo debe contener letras"),e.qZA(),e.BQk())}function C(n,l){1&n&&(e.ynx(0),e.TgZ(1,"small",29),e._uU(2,"S\xf3lo debe contener letras"),e.qZA(),e.BQk())}function N(n,l){1&n&&(e.ynx(0),e.TgZ(1,"small",29),e._uU(2,"S\xf3lo debe contener n\xfameros"),e.qZA(),e.BQk())}function x(n,l){1&n&&(e.ynx(0),e.TgZ(1,"small",29),e._uU(2,"Formato inv\xe1lido"),e.qZA(),e.BQk())}function w(n,l){1&n&&(e.ynx(0),e.TgZ(1,"small",29),e._uU(2,"La contrase\xf1a debe tener al menos 6 caracteres"),e.qZA(),e.BQk())}function T(n,l){1&n&&(e.TgZ(0,"div")(1,"div",29),e._uU(2,"La fecha debe ser entre el 01/01/1900 y la fecha actual."),e.qZA()())}function U(n,l){if(1&n&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Oqu(t.archivo.name)}}const q=[{path:"",component:(()=>{class n{constructor(t,a,i,s){this.dataqueryService=t,this.storageService=a,this.authService=i,this.router=s,this.especialidades=[],this.archivo=null,this.isLoading=!1,this.especialidadUsuario=[]}ngOnInit(){this.form=new r.cw({nombre:new r.NI("",[r.kI.pattern("^[a-zA-Z ]+$"),r.kI.required]),apellido:new r.NI("",[r.kI.pattern("^[a-zA-Z ]+$"),r.kI.required]),dni:new r.NI("",[r.kI.pattern("^[0-9]+$"),r.kI.required]),mail:new r.NI("",[r.kI.email,r.kI.required]),password:new r.NI("",[r.kI.minLength(6),r.kI.required]),fechaNacimiento:new r.NI("",[r.kI.required,v.j]),img:new r.NI("",[r.kI.required])}),this.dataqueryService.getEspecialidades().subscribe(t=>{this.especialidades=t})}get nombre(){return this.form.get("nombre")}get apellido(){return this.form.get("apellido")}get dni(){return this.form.get("dni")}get mail(){return this.form.get("mail")}get password(){return this.form.get("password")}get fechaNacimiento(){return this.form.get("fechaNacimiento")}get img(){return this.form.get("img")}registrarse(){var t=this;return(0,u.Z)(function*(){try{t.isLoading=!0,yield t.authService.registrarUsuario(t.mail?.value,t.password?.value).then(a=>{t.cargarImagen(t.archivo).then(()=>{t.authService.altaAdmin(t.nombre?.value,t.apellido?.value,t.dni?.value,t.fechaNacimiento?.value,t.mail?.value,t.password?.value,a.user?.uid,t.imagen)}).then(()=>{c().fire({icon:"success",title:"Usuario registrado",text:"Por favor verifica tu correo para validar el acceso",showClass:{popup:"animate__animated animate__fadeInDown"},hideClass:{popup:"animate__animated animate__fadeOutUp"}}),t.router.navigate(["login"]),t.isLoading=!1})})}catch(a){switch(t.isLoading=!1,a.code){case"auth/email-already-in-use":c().fire({icon:"error",title:"Error en el usuario",text:"El correo ya se encuentra registrado"});break;case"auth/invalid-email":c().fire({icon:"error",title:"Error en el formato del correo",text:'El correo debe ser valido por ejemplo "nombre@correo.com"'});break;case"auth/weak-password":c().fire({icon:"error",title:"Error en el password",text:"El password debe contener al menos 6 car\xe1cteres"});break;default:console.error("Error durante la autenticaci\xf3n:",a)}}})()}cargarArchivo(t){this.archivo=t.target.files[0]}cargarImagen(t){var a=this;return(0,u.Z)(function*(){return new Promise(function(){var i=(0,u.Z)(function*(s,d){let g=new FileReader;g.onloadend=()=>{a.storageService.subirImagen(a.dni?.value+"_"+Date.now(),g.result,"empleado").then(p=>{a.imagen=p,s(!0)}).catch(p=>{d(p)})},g.readAsDataURL(t)});return function(s,d){return i.apply(this,arguments)}}())})()}static#e=this.\u0275fac=function(a){return new(a||n)(e.Y36(b.e),e.Y36(A.V),e.Y36(_.e),e.Y36(m.F0))};static#n=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-register-admin"]],decls:56,vars:10,consts:[[1,"form-principal"],[1,"px-4","py-5","px-md-5","text-center","text-lg-start"],[1,"container"],["class","overlay",4,"ngIf"],[1,"row","gx-lg-5","align-items-center"],[1,"col-lg-8","mb-5","mb-lg-0"],[1,"card"],[1,"card-body",2,"width","100%"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-md-6","mb-3"],["for","nombre"],["type","text","id","nombre","formControlName","nombre",1,"form-control"],[4,"ngIf"],["for","apellido"],["type","text","id","apellido","formControlName","apellido",1,"form-control"],[1,"mb-3"],[1,"text-muted"],["type","text","id","dni","formControlName","dni",1,"form-control"],["type","text","id","mail","formControlName","mail",1,"form-control"],["type","password","id","password","formControlName","password",1,"form-control"],["type","date","id","fechaNacimiento","formControlName","fechaNacimiento",1,"form-control"],[1,"col-md-3","mb-3"],["type","file","accept",".png, .jpg, .jpeg","formControlName","img","id","inputFile",3,"change"],["for","inputFile",1,"labelInputFile"],["src","https://cdn-icons-png.flaticon.com/512/20/20829.png","alt","cargar imagen"],["type","submit",1,"btn","btn-danger","btn-block","mb-4",3,"disabled"],[1,"overlay"],[1,"spinner"],[1,"text-danger"]],template:function(a,i){1&a&&(e.TgZ(0,"section",0)(1,"div",1)(2,"div",2),e.YNc(3,I,2,0,"div",3),e.TgZ(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"form",8),e.NdJ("ngSubmit",function(){return i.registrarse()}),e.TgZ(9,"div",9)(10,"div")(11,"h2"),e._uU(12,"ADMINISTRADOR"),e.qZA()(),e.TgZ(13,"div",10)(14,"label",11),e._uU(15,"Nombre"),e.qZA(),e._UZ(16,"input",12),e.YNc(17,y,3,0,"ng-container",13),e.qZA(),e.TgZ(18,"div",10)(19,"label",14),e._uU(20,"Apellido"),e.qZA(),e._UZ(21,"input",15),e.YNc(22,C,3,0,"ng-container",13),e.qZA()(),e.TgZ(23,"div",16)(24,"label"),e._uU(25,"DNI "),e._UZ(26,"span",17),e.qZA(),e._UZ(27,"input",18),e.YNc(28,N,3,0,"ng-container",13),e.qZA(),e.TgZ(29,"div",16)(30,"label"),e._uU(31,"Correo"),e._UZ(32,"span",17),e.qZA(),e._UZ(33,"input",19),e.YNc(34,x,3,0,"ng-container",13),e.qZA(),e.TgZ(35,"div",16)(36,"label"),e._uU(37,"Contrase\xf1a "),e._UZ(38,"span",17),e.qZA(),e._UZ(39,"input",20),e.YNc(40,w,3,0,"ng-container",13),e.qZA(),e.TgZ(41,"div",9)(42,"div",10)(43,"label"),e._uU(44,"Fecha de nacimiento"),e.qZA(),e._UZ(45,"input",21),e.YNc(46,T,3,0,"div",13),e.qZA()(),e.TgZ(47,"div",22)(48,"label"),e._uU(49,"Subir foto de perfil"),e.qZA(),e.TgZ(50,"input",23),e.NdJ("change",function(d){return i.cargarArchivo(d)}),e.qZA(),e.TgZ(51,"label",24),e._UZ(52,"img",25),e.qZA(),e.YNc(53,U,2,1,"span",13),e.qZA(),e.TgZ(54,"button",26),e._uU(55," Registrarse "),e.qZA()()()()()()()()()),2&a&&(e.xp6(3),e.Q6J("ngIf",i.isLoading),e.xp6(5),e.Q6J("formGroup",i.form),e.xp6(9),e.Q6J("ngIf",null==i.nombre?null:i.nombre.hasError("pattern")),e.xp6(5),e.Q6J("ngIf",null==i.apellido?null:i.apellido.hasError("pattern")),e.xp6(6),e.Q6J("ngIf",null==i.dni?null:i.dni.hasError("pattern")),e.xp6(6),e.Q6J("ngIf",null==i.mail?null:i.mail.hasError("email")),e.xp6(6),e.Q6J("ngIf",null==i.password?null:i.password.hasError("minlength")),e.xp6(6),e.Q6J("ngIf",null==i.fechaNacimiento?null:i.fechaNacimiento.hasError("fechaNacimientoInvalida")),e.xp6(7),e.Q6J("ngIf",null!=i.archivo),e.xp6(1),e.Q6J("disabled",i.form.invalid||i.isLoading))},dependencies:[h.O5,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u],styles:[".form-principal[_ngcontent-%COMP%]{margin-left:3.5rem}#inputFile[_ngcontent-%COMP%]{display:none}.labelInputFile[_ngcontent-%COMP%]{width:3rem;height:3rem;background-color:#d83051;border-radius:100%;padding:1rem;box-shadow:0 0 10px -1px #494949;display:flex;justify-content:center;align-items:center;cursor:pointer;-webkit-user-select:none;user-select:none}.labelInputFile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:2rem;height:2rem}.labelInputFile[_ngcontent-%COMP%]:active{transform:scale(.9)}.overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;background-color:#fffc;display:flex;align-items:center;justify-content:center;z-index:9999}.spinner[_ngcontent-%COMP%]{border:4px solid rgba(255,255,255,.3);border-top:4px solid #e64141;border-radius:50%;width:50px;height:50px;animation:_ngcontent-%COMP%_spin 2s linear infinite}@keyframes _ngcontent-%COMP%_spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}"]})}return n})(),children:[]}];let R=(()=>{class n{static#e=this.\u0275fac=function(a){return new(a||n)};static#n=this.\u0275mod=e.oAB({type:n});static#t=this.\u0275inj=e.cJS({imports:[m.Bz.forChild(q),m.Bz]})}return n})(),F=(()=>{class n{static#e=this.\u0275fac=function(a){return new(a||n)};static#n=this.\u0275mod=e.oAB({type:n});static#t=this.\u0275inj=e.cJS({imports:[h.ez,R,r.UX]})}return n})()}}]);