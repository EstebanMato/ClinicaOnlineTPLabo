"use strict";(self.webpackChunkclinica_online=self.webpackChunkclinica_online||[]).push([[340],{9340:(S,h,o)=>{o.r(h),o.d(h,{RegisterEmpleadoModule:()=>R});var d=o(6814),p=o(969),u=o(5861),a=o(95),v=o(1614),Z=o(3519),c=o.n(Z),e=o(5879),_=o(588),b=o(130),E=o(154);function A(n,l){1&n&&(e.TgZ(0,"div",31),e._UZ(1,"div",32),e.qZA())}function I(n,l){1&n&&(e.ynx(0),e.TgZ(1,"small",33),e._uU(2,"S\xf3lo debe contener letras"),e.qZA(),e.BQk())}function y(n,l){1&n&&(e.ynx(0),e.TgZ(1,"small",33),e._uU(2,"S\xf3lo debe contener letras"),e.qZA(),e.BQk())}function C(n,l){1&n&&(e.ynx(0),e.TgZ(1,"small",33),e._uU(2,"S\xf3lo debe contener n\xfameros"),e.qZA(),e.BQk())}function N(n,l){1&n&&(e.ynx(0),e.TgZ(1,"small",33),e._uU(2,"Formato inv\xe1lido"),e.qZA(),e.BQk())}function T(n,l){1&n&&(e.ynx(0),e.TgZ(1,"small",33),e._uU(2,"La contrase\xf1a debe tener al menos 6 caracteres"),e.qZA(),e.BQk())}function U(n,l){if(1&n&&(e.TgZ(0,"option"),e._uU(1),e.ALo(2,"titlecase"),e.qZA()),2&n){const t=l.$implicit;e.xp6(1),e.Oqu(e.lcZ(2,1,t.nombre))}}function w(n,l){1&n&&(e.ynx(0),e.TgZ(1,"small",33),e._uU(2,"S\xf3lo debe contener letras en min\xfasculas"),e.qZA(),e.BQk())}function x(n,l){1&n&&(e.TgZ(0,"div")(1,"div",33),e._uU(2,"La fecha debe ser entre el 01/01/1900 y la fecha actual."),e.qZA()())}function q(n,l){if(1&n&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Oqu(t.archivo.name)}}const F=[{path:"",component:(()=>{class n{constructor(t,r,i,s){this.dataqueryService=t,this.storageService=r,this.authService=i,this.router=s,this.especialidades=[],this.archivo=null,this.isLoading=!1,this.especialidadUsuario=[]}ngOnInit(){this.form=new a.cw({nombre:new a.NI("",[a.kI.pattern("^[a-zA-Z ]+$"),a.kI.required]),apellido:new a.NI("",[a.kI.pattern("^[a-zA-Z ]+$"),a.kI.required]),dni:new a.NI("",[a.kI.pattern("^[0-9]+$"),a.kI.required]),mail:new a.NI("",[a.kI.email,a.kI.required]),password:new a.NI("",[a.kI.minLength(6),a.kI.required]),fechaNacimiento:new a.NI("",[a.kI.required,v.j]),especialidad:new a.NI(""),img:new a.NI("",[a.kI.required]),nuevaEspecialidad:new a.NI("",[a.kI.pattern("^[a-zA-Z ]+$")])}),this.dataqueryService.getEspecialidades().subscribe(t=>{this.especialidades=t})}get nombre(){return this.form.get("nombre")}get apellido(){return this.form.get("apellido")}get dni(){return this.form.get("dni")}get mail(){return this.form.get("mail")}get password(){return this.form.get("password")}get especialidad(){return this.form.get("especialidad")}get fechaNacimiento(){return this.form.get("fechaNacimiento")}get img(){return this.form.get("img")}get nuevaEspecialidad(){return this.form.get("nuevaEspecialidad")}registrarse(){var t=this;return(0,u.Z)(function*(){try{t.isLoading=!0,yield t.authService.registrarUsuario(t.mail?.value,t.password?.value).then(r=>{t.especialidadUsuario=t.especialidad?.value.toLowerCase(),t.nuevaEspecialidad?.pristine||t.especialidadUsuario.push(t.nuevaEspecialidad?.value.toLowerCase()),t.cargarImagen(t.archivo).then(()=>{t.authService.altaEspecialista(t.nombre?.value,t.apellido?.value,t.dni?.value,t.fechaNacimiento?.value,t.mail?.value,t.password?.value,r.user?.uid,t.especialidadUsuario,t.imagen)}).then(()=>{c().fire({icon:"success",title:"Usuario registrado",text:"Por favor verifica tu correo para validar el acceso",showClass:{popup:"animate__animated animate__fadeInDown"},hideClass:{popup:"animate__animated animate__fadeOutUp"}}),t.router.navigate(["login"]),t.isLoading=!1,t.nuevaEspecialidad?.pristine||t.dataqueryService.altaEspecialidad(t.nuevaEspecialidad?.value)})})}catch(r){switch(t.isLoading=!1,r.code){case"auth/email-already-in-use":c().fire({icon:"error",title:"Error en el usuario",text:"El correo ya se encuentra registrado"});break;case"auth/invalid-email":c().fire({icon:"error",title:"Error en el formato del correo",text:'El correo debe ser valido por ejemplo "nombre@correo.com"'});break;case"auth/weak-password":c().fire({icon:"error",title:"Error en el password",text:"El password debe contener al menos 6 car\xe1cteres"});break;default:console.error("Error durante la autenticaci\xf3n:",r)}}})()}cargarArchivo(t){this.archivo=t.target.files[0]}cargarImagen(t){var r=this;return(0,u.Z)(function*(){return new Promise(function(){var i=(0,u.Z)(function*(s,m){let g=new FileReader;g.onloadend=()=>{r.storageService.subirImagen(r.dni?.value+"_"+Date.now(),g.result,"empleado").then(f=>{r.imagen=f,s(!0)}).catch(f=>{m(f)})},g.readAsDataURL(t)});return function(s,m){return i.apply(this,arguments)}}())})()}static#e=this.\u0275fac=function(r){return new(r||n)(e.Y36(_.e),e.Y36(b.V),e.Y36(E.e),e.Y36(p.F0))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-register-empleado"]],decls:66,vars:12,consts:[[1,"form-principal"],[1,"px-4","py-5","px-md-5","text-center","text-lg-start"],[1,"container"],["class","overlay",4,"ngIf"],[1,"row","gx-lg-5","align-items-center"],[1,"col-lg-8","mb-5","mb-lg-0"],[1,"card"],[1,"card-body",2,"width","100%"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-md-6","mb-3"],["for","nombre"],["type","text","id","nombre","formControlName","nombre",1,"form-control"],[4,"ngIf"],["for","apellido"],["type","text","id","apellido","formControlName","apellido",1,"form-control"],[1,"mb-3"],[1,"text-muted"],["type","text","id","dni","formControlName","dni",1,"form-control"],["type","text","id","mail","formControlName","mail",1,"form-control"],["type","password","id","password","formControlName","password",1,"form-control"],[1,"col-md-5","mb-3"],["formControlName","especialidad","multiple","",1,"custom-select","d-block","w-100"],[4,"ngFor","ngForOf"],["type","text","formControlName","nuevaEspecialidad",1,"form-control"],["type","date","id","fechaNacimiento","formControlName","fechaNacimiento",1,"form-control"],[1,"col-md-3","mb-3"],["type","file","accept",".png, .jpg, .jpeg","formControlName","img","id","inputFile",3,"change"],["for","inputFile",1,"labelInputFile"],["src","https://cdn-icons-png.flaticon.com/512/20/20829.png","alt","cargar imagen"],["type","submit",1,"btn","btn-danger","btn-block","mb-4",3,"disabled"],[1,"overlay"],[1,"spinner"],[1,"text-danger"]],template:function(r,i){1&r&&(e.TgZ(0,"section",0)(1,"div",1)(2,"div",2),e.YNc(3,A,2,0,"div",3),e.TgZ(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"form",8),e.NdJ("ngSubmit",function(){return i.registrarse()}),e.TgZ(9,"div",9)(10,"div")(11,"h2"),e._uU(12,"ESPECIALISTA"),e.qZA()(),e.TgZ(13,"div",10)(14,"label",11),e._uU(15,"Nombre"),e.qZA(),e._UZ(16,"input",12),e.YNc(17,I,3,0,"ng-container",13),e.qZA(),e.TgZ(18,"div",10)(19,"label",14),e._uU(20,"Apellido"),e.qZA(),e._UZ(21,"input",15),e.YNc(22,y,3,0,"ng-container",13),e.qZA()(),e.TgZ(23,"div",16)(24,"label"),e._uU(25,"DNI "),e._UZ(26,"span",17),e.qZA(),e._UZ(27,"input",18),e.YNc(28,C,3,0,"ng-container",13),e.qZA(),e.TgZ(29,"div",16)(30,"label"),e._uU(31,"Correo"),e._UZ(32,"span",17),e.qZA(),e._UZ(33,"input",19),e.YNc(34,N,3,0,"ng-container",13),e.qZA(),e.TgZ(35,"div",16)(36,"label"),e._uU(37,"Contrase\xf1a "),e._UZ(38,"span",17),e.qZA(),e._UZ(39,"input",20),e.YNc(40,T,3,0,"ng-container",13),e.qZA(),e.TgZ(41,"div",9)(42,"div",21)(43,"label"),e._uU(44,"Especialidad"),e.qZA(),e.TgZ(45,"select",22),e.YNc(46,U,3,3,"option",23),e.qZA()(),e.TgZ(47,"div",21)(48,"label"),e._uU(49,"Agregar Especialidad Personalizada"),e.qZA(),e._UZ(50,"input",24),e.YNc(51,w,3,0,"ng-container",13),e.qZA(),e.TgZ(52,"div",10)(53,"label"),e._uU(54,"Fecha de nacimiento"),e.qZA(),e._UZ(55,"input",25),e.YNc(56,x,3,0,"div",13),e.qZA()(),e.TgZ(57,"div",26)(58,"label"),e._uU(59,"Subir foto de perfil"),e.qZA(),e.TgZ(60,"input",27),e.NdJ("change",function(m){return i.cargarArchivo(m)}),e.qZA(),e.TgZ(61,"label",28),e._UZ(62,"img",29),e.qZA(),e.YNc(63,q,2,1,"span",13),e.qZA(),e.TgZ(64,"button",30),e._uU(65," Registrarse "),e.qZA()()()()()()()()()),2&r&&(e.xp6(3),e.Q6J("ngIf",i.isLoading),e.xp6(5),e.Q6J("formGroup",i.form),e.xp6(9),e.Q6J("ngIf",null==i.nombre?null:i.nombre.hasError("pattern")),e.xp6(5),e.Q6J("ngIf",null==i.apellido?null:i.apellido.hasError("pattern")),e.xp6(6),e.Q6J("ngIf",null==i.dni?null:i.dni.hasError("pattern")),e.xp6(6),e.Q6J("ngIf",null==i.mail?null:i.mail.hasError("email")),e.xp6(6),e.Q6J("ngIf",null==i.password?null:i.password.hasError("minlength")),e.xp6(6),e.Q6J("ngForOf",i.especialidades),e.xp6(5),e.Q6J("ngIf",null==i.nuevaEspecialidad?null:i.nuevaEspecialidad.hasError("pattern")),e.xp6(5),e.Q6J("ngIf",null==i.fechaNacimiento?null:i.fechaNacimiento.hasError("fechaNacimientoInvalida")),e.xp6(7),e.Q6J("ngIf",null!=i.archivo),e.xp6(1),e.Q6J("disabled",i.form.invalid||i.isLoading))},dependencies:[d.sg,d.O5,a._Y,a.YN,a.Kr,a.Fj,a.K7,a.JJ,a.JL,a.sg,a.u,d.rS],styles:[".form-principal[_ngcontent-%COMP%]{margin-left:3.5rem}#inputFile[_ngcontent-%COMP%]{display:none}.labelInputFile[_ngcontent-%COMP%]{width:3rem;height:3rem;background-color:#d83051;border-radius:100%;padding:1rem;box-shadow:0 0 10px -1px #494949;display:flex;justify-content:center;align-items:center;cursor:pointer;-webkit-user-select:none;user-select:none}.labelInputFile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:2rem;height:2rem}.labelInputFile[_ngcontent-%COMP%]:active{transform:scale(.9)}.overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;background-color:#fffc;display:flex;align-items:center;justify-content:center;z-index:9999}.spinner[_ngcontent-%COMP%]{border:4px solid rgba(255,255,255,.3);border-top:4px solid #e64141;border-radius:50%;width:50px;height:50px;animation:_ngcontent-%COMP%_spin 2s linear infinite}@keyframes _ngcontent-%COMP%_spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}"]})}return n})(),children:[]}];let k=(()=>{class n{static#e=this.\u0275fac=function(r){return new(r||n)};static#t=this.\u0275mod=e.oAB({type:n});static#n=this.\u0275inj=e.cJS({imports:[p.Bz.forChild(F),p.Bz]})}return n})(),R=(()=>{class n{static#e=this.\u0275fac=function(r){return new(r||n)};static#t=this.\u0275mod=e.oAB({type:n});static#n=this.\u0275inj=e.cJS({imports:[d.ez,k,a.UX]})}return n})()}}]);