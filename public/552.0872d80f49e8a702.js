"use strict";(self.webpackChunkclinica_online=self.webpackChunkclinica_online||[]).push([[552],{8552:(F,T,d)=>{d.r(T),d.d(T,{HomeEspecialistasModule:()=>q});var p=d(6814),o=d(9517),C=d(5861),y=d(2572),_=d(7398),A=d(3519),n=d.n(A),i=d(8304),e=d(5879),u=d(9113),m=d(588),c=d(6223),f=d(154),g=d(5161),h=d(5258);function b(l,Z){1&l&&(e.TgZ(0,"div",22),e._UZ(1,"div",23),e.qZA())}function x(l,Z){if(1&l){const t=e.EpF();e.TgZ(0,"button",29),e.NdJ("click",function(){e.CHM(t);const a=e.oxw().$implicit,s=e.oxw();return e.KtG(s.confirmarTurno(a))}),e._UZ(1,"i",30),e.qZA()}}function P(l,Z){if(1&l){const t=e.EpF();e.TgZ(0,"button",29),e.NdJ("click",function(){e.CHM(t);const a=e.oxw().$implicit,s=e.oxw();return e.KtG(s.cancelarTurno(a))}),e._UZ(1,"i",31),e.qZA()}}function D(l,Z){if(1&l){const t=e.EpF();e.TgZ(0,"button",32),e.NdJ("click",function(){e.CHM(t);const a=e.oxw().$implicit,s=e.oxw();return e.KtG(s.abrirFinalizarTurnoModal(a))}),e._uU(1,"Finalizar "),e.qZA()}}function L(l,Z){if(1&l){const t=e.EpF();e.TgZ(0,"span")(1,"i",33),e.NdJ("click",function(){e.CHM(t);const a=e.oxw().$implicit,s=e.oxw();return e.KtG(s.verComentariosTurno(a))}),e.qZA()()}}function I(l,Z){if(1&l&&(e.TgZ(0,"tr")(1,"td")(2,"p",24),e._uU(3),e.qZA()(),e.TgZ(4,"td"),e._uU(5),e.qZA(),e.TgZ(6,"td"),e._uU(7),e.qZA(),e.TgZ(8,"td"),e._uU(9),e.ALo(10,"primeraMayuscula"),e.qZA(),e.TgZ(11,"td")(12,"span",25),e.ALo(13,"colorPorEstado"),e._uU(14),e.ALo(15,"primeraMayuscula"),e.qZA()(),e.TgZ(16,"td"),e.YNc(17,x,2,0,"button",26),e.YNc(18,P,2,0,"button",26),e.YNc(19,D,2,0,"button",27),e.qZA(),e.TgZ(20,"td"),e.YNc(21,L,2,0,"span",28),e.qZA()()),2&l){const t=Z.$implicit;e.xp6(3),e.Oqu(t.nombrePaciente),e.xp6(2),e.hij(" ",t.fecha," "),e.xp6(2),e.hij(" ",t.horaInicio," "),e.xp6(2),e.hij(" ",e.lcZ(10,10,t.especialidad.nombre)," "),e.xp6(3),e.Q6J("ngClass",e.lcZ(13,12,t.estado)),e.xp6(2),e.hij(" ",e.lcZ(15,14,t.estado)," "),e.xp6(3),e.Q6J("ngIf","pendiente"===t.estado),e.xp6(1),e.Q6J("ngIf","pendiente"===t.estado),e.xp6(1),e.Q6J("ngIf","confirmado"===t.estado),e.xp6(2),e.Q6J("ngIf",""!==t.comentarios&&void 0!==t.comentarios||""!==t.resenia&&void 0!==t.resenia)}}function J(l,Z){if(1&l){const t=e.EpF();e.TgZ(0,"div",34)(1,"strong"),e._uU(2,"Paciente: "),e.qZA(),e._uU(3),e._UZ(4,"br"),e.TgZ(5,"strong"),e._uU(6,"Fecha: "),e.qZA(),e._uU(7),e._UZ(8,"br")(9,"br"),e.TgZ(10,"strong"),e._uU(11,"Datos Fijos"),e.qZA(),e.TgZ(12,"div")(13,"div",35)(14,"div",36)(15,"label",37),e._uU(16,"Altura"),e.qZA(),e.TgZ(17,"input",38),e.NdJ("ngModelChange",function(a){e.CHM(t);const s=e.oxw();return e.KtG(s.datosFijos.altura=a)}),e.qZA()(),e.TgZ(18,"div",36)(19,"label",39),e._uU(20,"Peso"),e.qZA(),e.TgZ(21,"input",40),e.NdJ("ngModelChange",function(a){e.CHM(t);const s=e.oxw();return e.KtG(s.datosFijos.peso=a)}),e.qZA()()(),e.TgZ(22,"div",35)(23,"div",36)(24,"label",41),e._uU(25,"Temperatura"),e.qZA(),e.TgZ(26,"input",42),e.NdJ("ngModelChange",function(a){e.CHM(t);const s=e.oxw();return e.KtG(s.datosFijos.temperatura=a)}),e.qZA()(),e.TgZ(27,"div",36)(28,"label",43),e._uU(29,"Presi\xf3n"),e.qZA(),e.TgZ(30,"input",44),e.NdJ("ngModelChange",function(a){e.CHM(t);const s=e.oxw();return e.KtG(s.datosFijos.presion=a)}),e.qZA()()(),e.TgZ(31,"div",45)(32,"label",43),e._uU(33,"Diagnostico"),e.qZA(),e.TgZ(34,"input",46),e.NdJ("ngModelChange",function(a){e.CHM(t);const s=e.oxw();return e.KtG(s.datosFijos.diagnostico=a)}),e.qZA()(),e.TgZ(35,"div",45)(36,"label",43),e._uU(37,"Comentarios"),e.qZA(),e.TgZ(38,"input",46),e.NdJ("ngModelChange",function(a){e.CHM(t);const s=e.oxw();return e.KtG(s.comentarios=a)}),e.qZA()()(),e._UZ(39,"br"),e.TgZ(40,"strong"),e._uU(41,"Datos Extras"),e.qZA(),e._UZ(42,"br"),e.TgZ(43,"div")(44,"div",35)(45,"div",36)(46,"input",47),e.NdJ("ngModelChange",function(a){e.CHM(t);const s=e.oxw();return e.KtG(s.datosDinamicos.dato1.nombre=a)}),e.qZA()(),e.TgZ(47,"div",36)(48,"input",48),e.NdJ("ngModelChange",function(a){e.CHM(t);const s=e.oxw();return e.KtG(s.datosDinamicos.dato1.valor=a)}),e.qZA()()(),e._UZ(49,"br"),e.TgZ(50,"div",35)(51,"div",36)(52,"input",49),e.NdJ("ngModelChange",function(a){e.CHM(t);const s=e.oxw();return e.KtG(s.datosDinamicos.dato2.nombre=a)}),e.qZA()(),e.TgZ(53,"div",36)(54,"input",50),e.NdJ("ngModelChange",function(a){e.CHM(t);const s=e.oxw();return e.KtG(s.datosDinamicos.dato2.valor=a)}),e.qZA()()(),e._UZ(55,"br"),e.TgZ(56,"div",35)(57,"div",36)(58,"input",51),e.NdJ("ngModelChange",function(a){e.CHM(t);const s=e.oxw();return e.KtG(s.datosDinamicos.dato3.nombre=a)}),e.qZA()(),e.TgZ(59,"div",36)(60,"input",52),e.NdJ("ngModelChange",function(a){e.CHM(t);const s=e.oxw();return e.KtG(s.datosDinamicos.dato3.valor=a)}),e.qZA()()()()()}if(2&l){const t=e.oxw();e.xp6(3),e.hij(" ",t.turnoSeleccionado.nombrePaciente,""),e.xp6(4),e.hij(" ",t.turnoSeleccionado.fecha,""),e.xp6(10),e.Q6J("ngModel",t.datosFijos.altura),e.xp6(4),e.Q6J("ngModel",t.datosFijos.peso),e.xp6(5),e.Q6J("ngModel",t.datosFijos.temperatura),e.xp6(4),e.Q6J("ngModel",t.datosFijos.presion),e.xp6(4),e.Q6J("ngModel",t.datosFijos.diagnostico),e.xp6(4),e.Q6J("ngModel",t.comentarios),e.xp6(8),e.Q6J("ngModel",t.datosDinamicos.dato1.nombre),e.xp6(2),e.Q6J("ngModel",t.datosDinamicos.dato1.valor),e.xp6(4),e.Q6J("ngModel",t.datosDinamicos.dato2.nombre),e.xp6(2),e.Q6J("ngModel",t.datosDinamicos.dato2.valor),e.xp6(4),e.Q6J("ngModel",t.datosDinamicos.dato3.nombre),e.xp6(2),e.Q6J("ngModel",t.datosDinamicos.dato3.valor)}}const w=[{path:"",component:(()=>{class l{constructor(t,r,a,s){this.turnoService=t,this.dataquery=r,this.formBuilder=a,this.authService=s,this.isLoading=!1,this.datosFijos={altura:"",peso:"",temperatura:"",presion:"",diagnostico:""},this.datosDinamicos={dato1:{nombre:"",valor:""},dato2:{nombre:"",valor:""},dato3:{nombre:"",valor:""}}}ngOnInit(){this.filtroForm=this.formBuilder.group({filtrar:[""]}),this.isLoading=!0;const t=this.turnoService.getTurnos(),r=this.turnoService.getPacientes();this.authService.getLoggedUser().subscribe(a=>{this.usuarioLogueado=a}),(0,y.a)([t,r,this.authService.getLoggedUser()]).pipe((0,_.U)(([a,s,v])=>a.filter(M=>M.uidEspecialista===v?.uid).map(M=>{const E=s.find(j=>j.uid===M.uidPaciente);return{...M,nombrePaciente:E?`${E.apellido}, ${E.nombre}`:"Paciente no encontrado"}}))).subscribe(a=>{this.turnosDetallado=this.ordenarPorFecha(a),this.turnosFiltrado=this.turnosDetallado,this.isLoading=!1}),this.formSubscription=this.filtroForm.valueChanges.subscribe(a=>{this.turnosFiltrado=this.filtrarTurnos(this.turnosDetallado,a)})}ordenarPorFecha(t){return t.sort((r,a)=>{const s=this.convertirAFecha(r.fecha),v=this.convertirAFecha(a.fecha);return s.getTime()-v.getTime()}),t}convertirAFecha(t){const r=t.split("/");return new Date(parseInt(r[2]),parseInt(r[1])-1,parseInt(r[0]))}filtrarTurnos(t,r){return this.turnoService.filtrarTurnos(t,r)}getColorPorEstado(t){switch(t){case"confirmado":return"badge rounded-pill text-bg-success";case"finalizado":return"badge rounded-pill text-bg-warning";case"cancelado":case"rechazado":return"badge rounded-pill text-bg-danger";case"pendiente":return"badge rounded-pill text-bg-secondary";default:return"badge rounded-pill text-bg-muted"}}cancelarTurno(t){var a,r=this;n().fire({title:"\xbfDesea cancelar?",html:`\n      Detalles del turno\n      <p>Paciente: ${t.nombrePaciente}</p>\n      <p>Especialidad: ${t.especialidad.nombre}</p>\n      <p>Fecha: ${t.fecha}</p>\n      <p>Hora de Inicio: ${t.horaInicio}</p>\n    `,input:"text",inputPlaceholder:"Ingrese el motivo de la cancelaci\xf3n",showCancelButton:!0,cancelButtonText:"No",confirmButtonText:"S\xed, cancelar",showLoaderOnConfirm:!0,preConfirm:(a=(0,C.Z)(function*(s){console.log(t.id,s),r.turnoService.cancelarTurno(t.id,s)}),function(v){return a.apply(this,arguments)}),allowOutsideClick:()=>!n().isLoading()}).then(a=>{a.isConfirmed&&n().fire("Cancelado","La acci\xf3n fue cancelada.","success")})}confirmarTurno(t){var a,r=this;n().fire({title:"\xbfConfirmar?",html:`\n        Detalles del turno\n        <p>Paciente: ${t.nombrePaciente}</p>\n        <p>Especialidad: ${t.especialidad.nombre}</p>\n        <p>Fecha: ${t.fecha}</p>\n        <p>Hora de Inicio: ${t.horaInicio}</p>\n      `,showCancelButton:!0,cancelButtonText:"No",confirmButtonText:"S\xed, confirmar",showLoaderOnConfirm:!0,preConfirm:(a=(0,C.Z)(function*(){r.turnoService.confirmarTurno(t.id)}),function(){return a.apply(this,arguments)}),allowOutsideClick:()=>!n().isLoading()}).then(a=>{a.isConfirmed&&n().fire("Confirmado","El turno fue confirmado.","success")})}calificarTurno(t){var a,r=this;n().fire({title:"Calificar atenci\xf3n",input:"text",html:'<input type="range" id="calificacion" name="calificacion" min="1" max="5">',inputPlaceholder:"\xbfComo estuvo la atenci\xf3n?",showCancelButton:!0,cancelButtonText:"Cancelar",confirmButtonText:"Aceptar",showLoaderOnConfirm:!0,preConfirm:(a=(0,C.Z)(function*(s){const v=document.getElementById("calificacion").value;console.log(t.id,s,v),r.turnoService.calificarTurno(t.id,s,v)}),function(v){return a.apply(this,arguments)}),allowOutsideClick:()=>!n().isLoading()}).then(a=>{a.isConfirmed&&n().fire("Gracias","Se envio la calificaci\xf3n","success")})}abrirFinalizarTurnoModal(t){this.turnoSeleccionado=t,console.log(this.turnoSeleccionado)}finalizarTurno(t){this.turnoService.finalizarTurno(t.id,this.datosFijos,this.datosDinamicos,this.comentarios),console.log(this.turnoSeleccionado),console.log(this.datosDinamicos),console.log(this.datosFijos),n().fire("Finalizado","El turno fue finalizado.","success")}verComentariosTurno(t){let r=`\n      <p><strong>Comentarios:</strong> ${t.comentarios}</p>\n\n    `;t.datosFijos&&(""!==t.datosFijos.altura&&(r+=`\n          <p><strong>Altura:</strong> ${t.datosFijos.altura}</p>\n          `),""!==t.datosFijos.peso&&(r+=`\n          <p><strong>Peso:</strong> ${t.datosFijos.peso}</p>\n          `),""!==t.datosFijos.presion&&(r+=`\n          <p><strong>Presion:</strong> ${t.datosFijos.presion}</p>\n          `),""!==t.datosFijos.temperatura&&(r+=`\n          <p><strong>Temperatura:</strong> ${t.datosFijos.temperatura}</p>\n          `),""!==t.datosFijos.diagnostico&&(r+=`\n          <p><strong>Diagnostico:</strong> ${t.datosFijos.diagnostico}</p>\n          `)),t.datosDinamicos&&(""!==t.datosDinamicos.dato1.nombre&&(r+=`\n          <p><strong>${t.datosDinamicos.dato1.nombre}:</strong> ${t.datosDinamicos.dato1.valor}</p>\n          `),""!==t.datosDinamicos.dato2.nombre&&(r+=`\n          <p><strong>${t.datosDinamicos.dato2.nombre}:</strong> ${t.datosDinamicos.dato2.valor}</p>\n          `),""!==t.datosDinamicos.dato3.nombre&&(r+=`\n          <p><strong>${t.datosDinamicos.dato3.nombre}:</strong> ${t.datosDinamicos.dato3.valor}</p>\n          `)),""!==t.resenia&&(r+=`\n      <p><strong>Rese\xf1a:</strong> ${t.resenia}</p>\n      `),""!==t.calificacion&&(r+=`\n        <label for="calificacion">Calificaci\xf3n:</label>\n        <input type="range" id="calificacion" name="calificacion" min="1" max="5" value="${t.calificacion}" disabled>\n      `),n().fire({title:"Comentarios",html:r,confirmButtonText:"Cerrar",allowOutsideClick:()=>!n().isLoading()})}static#e=this.\u0275fac=function(r){return new(r||l)(e.Y36(u.D),e.Y36(m.e),e.Y36(c.qu),e.Y36(f.e))};static#t=this.\u0275cmp=e.Xpm({type:l,selectors:[["app-home-especialistas"]],decls:43,vars:5,consts:[["class","overlay",4,"ngIf"],[1,"turnos-container"],[3,"formGroup"],[1,"filtro-container"],[1,"buscar-container"],["for","filtrar",1,"buscar-label"],[1,"input-container"],["type","text","id","filtrar","formControlName","filtrar"],[1,"fa","fa-search"],[1,"table","table-striped","align-middle","mb-0","bg-white"],[1,"bg-light"],[4,"ngFor","ngForOf"],["id","finalizarModal","tabindex","-1","aria-labelledby","finalizarModalLabel","aria-hidden","true",1,"modal","fade"],[1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],["id","exampleModalLabel",1,"modal-title","fs-5"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close"],["class","modal-body",4,"ngIf"],[1,"modal-footer"],["type","button","data-bs-dismiss","modal",1,"btn","btn-secondary"],["type","button","data-bs-dismiss","modal",1,"btn","btn-primary",3,"click"],[1,"overlay"],[1,"spinner"],[1,"fw-normal","mb-1"],[3,"ngClass"],["type","button","class","btn btn-outline-primary btn-sm",3,"click",4,"ngIf"],["type","button","class","btn btn-outline-warning btn-sm","data-bs-toggle","modal","data-bs-target","#finalizarModal",3,"click",4,"ngIf"],[4,"ngIf"],["type","button",1,"btn","btn-outline-primary","btn-sm",3,"click"],[1,"fa-solid","fa-check"],[1,"fa-solid","fa-xmark"],["type","button","data-bs-toggle","modal","data-bs-target","#finalizarModal",1,"btn","btn-outline-warning","btn-sm",3,"click"],[1,"fas","fa-eye","text-muted",3,"click"],[1,"modal-body"],[1,"row"],[1,"col-md-6"],["for","altura"],["type","number","placeholder","Ingrese altura en cm.",1,"form-control","ng-untouched","ng-pristine","ng-valid",3,"ngModel","ngModelChange"],["for","peso"],["type","number","placeholder","Ingrese peso en kg.",1,"form-control","ng-untouched","ng-pristine","ng-valid",3,"ngModel","ngModelChange"],["for","temperatura"],["type","number","placeholder","Ingrese temperatura",1,"form-control","ng-untouched","ng-pristine","ng-valid",3,"ngModel","ngModelChange"],["for","presion"],["type","number","placeholder","Ingrese presi\xf3n",1,"form-control","ng-untouched","ng-pristine","ng-valid",3,"ngModel","ngModelChange"],[1,"col-md-12"],["type","text","placeholder","",1,"form-control","ng-untouched","ng-pristine","ng-valid",3,"ngModel","ngModelChange"],["type","text","placeholder","nombre dato1",1,"form-control","ng-untouched","ng-pristine","ng-valid",3,"ngModel","ngModelChange"],["type","text","placeholder","valor dato1",1,"form-control","ng-untouched","ng-pristine","ng-valid",3,"ngModel","ngModelChange"],["type","text","placeholder","nombre dato2",1,"form-control","ng-untouched","ng-pristine","ng-valid",3,"ngModel","ngModelChange"],["type","text","placeholder","valor dato2",1,"form-control","ng-untouched","ng-pristine","ng-valid",3,"ngModel","ngModelChange"],["type","text","placeholder","nombre dato3",1,"form-control","ng-untouched","ng-pristine","ng-valid",3,"ngModel","ngModelChange"],["type","text","placeholder","valor dato3",1,"form-control","ng-untouched","ng-pristine","ng-valid",3,"ngModel","ngModelChange"]],template:function(r,a){1&r&&(e.YNc(0,b,2,0,"div",0),e.TgZ(1,"div",1)(2,"form",2)(3,"div",3)(4,"div",4)(5,"label",5),e._uU(6,"Buscar:"),e.qZA(),e.TgZ(7,"div",6),e._UZ(8,"input",7)(9,"i",8),e.qZA()()(),e.TgZ(10,"table",9)(11,"thead",10)(12,"tr")(13,"th"),e._uU(14,"Paciente"),e.qZA(),e.TgZ(15,"th"),e._uU(16,"Fecha"),e.qZA(),e.TgZ(17,"th"),e._uU(18,"Hora"),e.qZA(),e.TgZ(19,"th"),e._uU(20,"Especialidad"),e.qZA(),e.TgZ(21,"th"),e._uU(22,"Estado"),e.qZA(),e.TgZ(23,"th"),e._uU(24,"Accion"),e.qZA(),e.TgZ(25,"th"),e._uU(26,"Comentarios"),e.qZA()()(),e.TgZ(27,"tbody"),e.YNc(28,I,22,16,"tr",11),e._UZ(29,"tr"),e.qZA()()()(),e.TgZ(30,"div",12)(31,"div",13)(32,"div",14)(33,"div",15)(34,"h1",16),e._uU(35,"Finalizar turno"),e.qZA(),e._UZ(36,"button",17),e.qZA(),e.YNc(37,J,61,14,"div",18),e.TgZ(38,"div",19)(39,"button",20),e._uU(40,"Cancelar"),e.qZA(),e.TgZ(41,"button",21),e.NdJ("click",function(){return a.finalizarTurno(a.turnoSeleccionado)}),e._uU(42,"Confirmar"),e.qZA()()()()()),2&r&&(e.Q6J("ngIf",a.isLoading),e.xp6(1),e.Q6J("@fadeInRight",void 0),e.xp6(1),e.Q6J("formGroup",a.filtroForm),e.xp6(26),e.Q6J("ngForOf",a.turnosFiltrado),e.xp6(9),e.Q6J("ngIf",a.turnoSeleccionado))},dependencies:[p.mk,p.sg,p.O5,c._Y,c.Fj,c.wV,c.JJ,c.JL,c.On,c.sg,c.u,g.n,h.k],styles:[".overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;background-color:#fffc;display:flex;align-items:center;justify-content:center;z-index:9999}.spinner[_ngcontent-%COMP%]{border:4px solid rgba(255,255,255,.3);border-top:4px solid #e64141;border-radius:50%;width:50px;height:50px;animation:_ngcontent-%COMP%_spin 2s linear infinite}@keyframes _ngcontent-%COMP%_spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.filtro-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin:10px}.btn-nuevo-turno[_ngcontent-%COMP%]{position:absolute;right:0;margin-right:60px;margin-top:5px}.historia-clinica[_ngcontent-%COMP%]{width:200px;height:200px;background-color:#f0f0f0;border:1px solid #000}.turnos-container[_ngcontent-%COMP%]{margin:40px;padding:15px;border:2px solid transparent;border-radius:10px;box-shadow:0 0 10px 5px #0000004d}.buscar-container[_ngcontent-%COMP%]{display:flex;align-items:center;margin-bottom:20px}.input-container[_ngcontent-%COMP%]{position:relative}input[type=text][_ngcontent-%COMP%]{padding:8px 30px 8px 10px;border-radius:20px;box-shadow:2px 2px 4px #0003;border:none;outline:none;width:200px}.fa-search[_ngcontent-%COMP%]{position:absolute;right:10px;top:50%;transform:translateY(-50%);color:#888;font-size:16px}.buscar-label[_ngcontent-%COMP%]{font-size:18px;margin-right:10px;font-weight:700}"],data:{animation:[i.X,i.M]}})}return l})(),children:[]}];let O=(()=>{class l{static#e=this.\u0275fac=function(r){return new(r||l)};static#t=this.\u0275mod=e.oAB({type:l});static#o=this.\u0275inj=e.cJS({imports:[p.ez,o.Bz.forChild(w),o.Bz]})}return l})();var U=d(2514);let q=(()=>{class l{static#e=this.\u0275fac=function(r){return new(r||l)};static#t=this.\u0275mod=e.oAB({type:l});static#o=this.\u0275inj=e.cJS({imports:[p.ez,O,c.u5,c.UX,U.I]})}return l})()},588:(F,T,d)=>{d.d(T,{e:()=>y});var p=d(5861),o=d(5349),C=d(5879);let y=(()=>{class _{constructor(n){this.firestore=n}getObraSociales(){const n=(0,o.hJ)(this.firestore,"obrasSociales");return(0,o.BS)(n)}getEspecialidades(){const n=(0,o.hJ)(this.firestore,"especialidades");return(0,o.BS)(n)}getProxIdEspecialidades(){var n=this;return(0,p.Z)(function*(){const i=(0,o.hJ)(n.firestore,"especialidades"),e=(0,o.IO)(i,(0,o.Xo)("id","desc")),u=yield(0,o.PL)(e);return u.empty?1:u.docs[0].get("id")+1})()}altaEspecialidad(n){var i=this;return(0,p.Z)(function*(){const e=yield i.getProxIdEspecialidades(),u=(0,o.hJ)(i.firestore,"especialidades");(0,o.ET)(u,{id:e,nombre:n.toLowerCase()})})()}traerUsuarios(){const n=(0,o.hJ)(this.firestore,"usuarios");return(0,o.BS)(n)}getPacientes(){var n=this;return(0,p.Z)(function*(){const i=(0,o.hJ)(n.firestore,"usuarios"),e=(0,o.IO)(i,(0,o.ar)("perfil","==","paciente")),u=yield(0,o.PL)(e),m=[];return u.forEach(c=>{m.push(c.data())}),m})()}cambiarEstadoUsuario(n,i){var e=this;return(0,p.Z)(function*(){const u=(0,o.hJ)(e.firestore,"usuarios"),m=(0,o.IO)(u,(0,o.ar)("uid","==",n)),c=yield(0,o.PL)(m);return 0!==c.size&&(c.forEach(function(){var f=(0,p.Z)(function*(g){const h=g.ref;yield(0,o.pl)(h,{estado:i},{merge:!0})});return function(g){return f.apply(this,arguments)}}()),!0)})()}setHorarios(n,i,e,u){var m=this;return(0,p.Z)(function*(){const c=(0,o.hJ)(m.firestore,"usuarios"),f=(0,o.IO)(c,(0,o.ar)("uid","==",n.uid)),g=yield(0,o.PL)(f);return 0!==g.size&&(g.forEach(function(){var h=(0,p.Z)(function*(b){const x=b.ref;yield(0,o.pl)(x,{diasAtencion:i,horaInicio:e,horaFin:u},{merge:!0})});return function(b){return h.apply(this,arguments)}}()),!0)})()}static#e=this.\u0275fac=function(i){return new(i||_)(C.LFG(o.gg))};static#t=this.\u0275prov=C.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"})}return _})()},9113:(F,T,d)=>{d.d(T,{D:()=>y});var p=d(5861),o=d(5349),C=d(5879);let y=(()=>{class _{constructor(n){this.firestore=n}getEspecialidades(){const n=(0,o.hJ)(this.firestore,"especialidades");return(0,o.BS)(n)}getEspecialistas(){const n=(0,o.hJ)(this.firestore,"usuarios"),i=(0,o.IO)(n,(0,o.ar)("perfil","==","especialista"),(0,o.ar)("estado","==",!0));return(0,o.BS)(i)}getPacientes(){const n=(0,o.hJ)(this.firestore,"usuarios"),i=(0,o.IO)(n,(0,o.ar)("perfil","==","paciente"),(0,o.ar)("estado","==",!0));return(0,o.BS)(i)}getTurnos(){const n=(0,o.hJ)(this.firestore,"turnos");return(0,o.BS)(n)}getTurnosPendientes(){const n=(0,o.hJ)(this.firestore,"turnos"),i=(0,o.IO)(n,(0,o.ar)("estado","==","pendiente"));return(0,o.BS)(i)}getTurnosFinalizados(){const n=(0,o.hJ)(this.firestore,"turnos"),i=(0,o.IO)(n,(0,o.ar)("estado","==","finalizado"));return(0,o.BS)(i)}getTurnosActivos(){const n=(0,o.hJ)(this.firestore,"turnos"),i=(0,o.IO)(n,(0,o.ar)("estado","!=","cancelado"));return(0,o.BS)(i)}crearTurno(n){var i=this;return(0,p.Z)(function*(){const e=yield i.getProxIdTurno(),u=(0,o.hJ)(i.firestore,"turnos");(0,o.ET)(u,{id:e,uidPaciente:n.uidPaciente,uidEspecialista:n.uidEspecialista,estado:n.estado,fecha:n.fecha,horaFin:n.horaFin,horaInicio:n.horaInicio,comentarios:n.comentarios,calificacion:n.calificacion,especialidad:n.especialidad,resenia:""})})()}getProxIdTurno(){var n=this;return(0,p.Z)(function*(){const i=(0,o.hJ)(n.firestore,"turnos"),e=(0,o.IO)(i,(0,o.Xo)("id","desc")),u=yield(0,o.PL)(e);return u.empty?1:u.docs[0].get("id")+1})()}cancelarTurno(n,i){var e=this;return(0,p.Z)(function*(){const u=(0,o.hJ)(e.firestore,"turnos"),m=(0,o.IO)(u,(0,o.ar)("id","==",n)),c=yield(0,o.PL)(m);return 0!==c.size&&(c.forEach(function(){var f=(0,p.Z)(function*(g){const h=g.ref;yield(0,o.pl)(h,{estado:"cancelado",comentarios:i},{merge:!0})});return function(g){return f.apply(this,arguments)}}()),!0)})()}finalizarTurno(n,i,e,u){var m=this;return(0,p.Z)(function*(){const c=(0,o.hJ)(m.firestore,"turnos"),f=(0,o.IO)(c,(0,o.ar)("id","==",n)),g=yield(0,o.PL)(f);return 0!==g.size&&(g.forEach(function(){var h=(0,p.Z)(function*(b){const x=b.ref;yield(0,o.pl)(x,{estado:"finalizado",comentarios:u,datosFijos:i,datosDinamicos:e},{merge:!0})});return function(b){return h.apply(this,arguments)}}()),!0)})()}confirmarTurno(n){var i=this;return(0,p.Z)(function*(){const e=(0,o.hJ)(i.firestore,"turnos"),u=(0,o.IO)(e,(0,o.ar)("id","==",n)),m=yield(0,o.PL)(u);return 0!==m.size&&(m.forEach(function(){var c=(0,p.Z)(function*(f){const g=f.ref;yield(0,o.pl)(g,{estado:"confirmado"},{merge:!0})});return function(f){return c.apply(this,arguments)}}()),!0)})()}calificarTurno(n,i,e){var u=this;return(0,p.Z)(function*(){const m=(0,o.hJ)(u.firestore,"turnos"),c=(0,o.IO)(m,(0,o.ar)("id","==",n)),f=yield(0,o.PL)(c);return 0!==f.size&&(f.forEach(function(){var g=(0,p.Z)(function*(h){const b=h.ref;yield(0,o.pl)(b,{resenia:i,calificacion:e},{merge:!0})});return function(h){return g.apply(this,arguments)}}()),!0)})()}filtrarTurnos(n,i){return n&&"string"==typeof i.filtrar?n.filter(e=>{const u="string"==typeof e.especialidad.nombre&&e.especialidad.nombre.toLowerCase().includes(i.filtrar?.toLowerCase()),m=e.nombreEspecialista&&"string"==typeof e.nombreEspecialista&&e.nombreEspecialista.toLowerCase().includes(i.filtrar?.toLowerCase()),c=e.nombrePaciente&&"string"==typeof e.nombrePaciente&&e.nombrePaciente.toLowerCase().includes(i.filtrar?.toLowerCase()),f="string"==typeof e.fecha&&e.fecha.toLowerCase().includes(i.filtrar?.toLowerCase()),g="string"==typeof e.horaInicio&&e.horaInicio.toLowerCase().includes(i.filtrar?.toLowerCase()),h="string"==typeof e.estado&&e.estado.toLowerCase().includes(i.filtrar?.toLowerCase()),b=e.datosDinamicos&&("string"==typeof e.datosDinamicos.dato1?.nombre&&e.datosDinamicos.dato1.nombre.toLowerCase().includes(i.filtrar?.toLowerCase())||"string"==typeof e.datosDinamicos.dato2?.nombre&&e.datosDinamicos.dato2.nombre.toLowerCase().includes(i.filtrar?.toLowerCase())||"string"==typeof e.datosDinamicos.dato3?.nombre&&e.datosDinamicos.dato3.nombre.toLowerCase().includes(i.filtrar?.toLowerCase())||"string"==typeof e.datosDinamicos.dato1?.valor&&e.datosDinamicos.dato1.valor.toLowerCase().includes(i.filtrar?.toLowerCase())||"string"==typeof e.datosDinamicos.dato2?.valor&&e.datosDinamicos.dato2.valor.toLowerCase().includes(i.filtrar?.toLowerCase())||"string"==typeof e.datosDinamicos.dato3?.valor&&e.datosDinamicos.dato3.valor.toLowerCase().includes(i.filtrar?.toLowerCase())),x=e.datosFijos&&("number"==typeof e.datosFijos.altura&&e.datosFijos.altura.toString().includes(i.filtrar)||"string"==typeof e.datosFijos.diagnostico&&e.datosFijos.diagnostico.toLowerCase().includes(i.filtrar?.toLowerCase())||"number"==typeof e.datosFijos.peso&&e.datosFijos.peso.toString().includes(i.filtrar)||"number"==typeof e.datosFijos.presion&&e.datosFijos.presion.toString().includes(i.filtrar)||"number"==typeof e.datosFijos.temperatura&&e.datosFijos.temperatura.toString().includes(i.filtrar));return u||c||m||f||g||h||b||x}):[]}static#e=this.\u0275fac=function(i){return new(i||_)(C.LFG(o.gg))};static#t=this.\u0275prov=C.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"})}return _})()}}]);