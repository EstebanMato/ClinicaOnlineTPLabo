"use strict";(self.webpackChunkclinica_online=self.webpackChunkclinica_online||[]).push([[89],{3089:(q,v,a)=>{a.r(v),a.d(v,{HomeModule:()=>G});var p=a(6814),h=a(9517),C=a(9846),E=a(2572),H=a(7398),y=a(1387),A=a(8304),t=a(5879),P=a(588),M=a(9113);let F=(()=>{class e{constructor(n,o){this.el=n,this.renderer=o}onMouseEnter(){this.applyEffect("#000","#fff","scale(1.1)")}onMouseLeave(){this.applyEffect("","","")}applyEffect(n,o,i){this.renderer.setStyle(this.el.nativeElement,"background-color",n),this.renderer.setStyle(this.el.nativeElement,"color",o),this.renderer.setStyle(this.el.nativeElement,"transform",i),this.renderer.setStyle(this.el.nativeElement,"transition","all 0.3s ease-in-out")}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(t.SBq),t.Y36(t.Qsj))};static#n=this.\u0275dir=t.lG2({type:e,selectors:[["","appHoverEffectblack",""]],hostBindings:function(o,i){1&o&&t.NdJ("mouseenter",function(){return i.onMouseEnter()})("mouseleave",function(){return i.onMouseLeave()})}})}return e})();var U=a(5161);function D(e,l){1&e&&(t.TgZ(0,"div",8),t._UZ(1,"div",9),t.qZA())}function O(e,l){if(1&e&&(t.ynx(0),t.TgZ(1,"p",18)(2,"span",19),t._uU(3,"Especialidad:"),t.qZA(),t._uU(4),t.qZA(),t.BQk()),2&e){const n=t.oxw().$implicit;t.xp6(4),t.hij(" ",n.especialidad,"")}}function S(e,l){if(1&e&&(t.ynx(0),t.TgZ(1,"p",18)(2,"span",19),t._uU(3,"Obra Social:"),t.qZA(),t._uU(4),t.qZA(),t.BQk()),2&e){const n=t.oxw().$implicit;t.xp6(4),t.hij(" ",n.obraSocial,"")}}function I(e,l){if(1&e){const n=t.EpF();t.TgZ(0,"button",24),t.NdJ("click",function(){t.CHM(n);const i=t.oxw().$implicit,s=t.oxw();return t.KtG(s.cambiarEstado(i.uid,!0))}),t._uU(1,"Habilitar"),t.qZA()}}function L(e,l){if(1&e){const n=t.EpF();t.TgZ(0,"button",25),t.NdJ("click",function(){t.CHM(n);const i=t.oxw().$implicit,s=t.oxw();return t.KtG(s.cambiarEstado(i.uid,!1))}),t._uU(1,"Deshabilitar"),t.qZA()}}function J(e,l){if(1&e){const n=t.EpF();t.TgZ(0,"button",26),t.NdJ("click",function(){t.CHM(n);const i=t.oxw().$implicit,s=t.oxw();return t.KtG(s.descargarPdf(i))}),t._uU(1,"Turnos"),t.qZA()}}const k=function(e,l){return{"badge rounded-pill":!0,"text-bg-success":e,"text-bg-danger":l}};function B(e,l){if(1&e&&(t.TgZ(0,"div",10)(1,"div",11),t._UZ(2,"img",12),t.TgZ(3,"p",13),t._uU(4),t.ALo(5,"primeraMayuscula"),t.qZA(),t.TgZ(6,"div",14)(7,"h5",15),t._uU(8),t.qZA(),t.TgZ(9,"p",16),t._uU(10),t.qZA(),t.TgZ(11,"p",16),t._uU(12),t.qZA(),t.YNc(13,O,5,1,"ng-container",17),t.YNc(14,S,5,1,"ng-container",17),t.TgZ(15,"p",18)(16,"span",19),t._uU(17,"Estado:"),t.qZA(),t.TgZ(18,"span",20),t._uU(19),t.qZA()(),t.YNc(20,I,2,0,"button",21),t.YNc(21,L,2,0,"button",22),t.YNc(22,J,2,0,"button",23),t.qZA()()()),2&e){const n=l.$implicit;t.xp6(2),t.Q6J("src",n.imagen,t.LSH),t.xp6(2),t.Oqu(t.lcZ(5,13,n.perfil)),t.xp6(4),t.AsE("",n.apellido,", ",n.nombre,""),t.xp6(2),t.Oqu(n.dni),t.xp6(2),t.Oqu(n.mail),t.xp6(1),t.Q6J("ngIf",n.especialidad),t.xp6(1),t.Q6J("ngIf",n.obraSocial),t.xp6(4),t.Q6J("ngClass",t.WLB(15,k,n.estado,!n.estado)),t.xp6(1),t.hij(" ",n.estado?"Activo":"No Activo"," "),t.xp6(1),t.Q6J("ngIf",!n.estado),t.xp6(1),t.Q6J("ngIf",n.estado),t.xp6(1),t.Q6J("ngIf","paciente"==n.perfil)}}let j=(()=>{class e{constructor(n,o,i){this.dataq=n,this.turnoService=o,this.excelService=i,this.usuarios=[],this.isLoading=!1}ngOnInit(){this.isLoading=!0,this.dataq.traerUsuarios().subscribe(n=>{this.usuarios=n,this.ordenarUsuariosPorPerfil(),this.cargarTurnos(),this.isLoading=!1})}cargarTurnos(){this.isLoading=!0;const n=this.turnoService.getTurnos(),o=this.turnoService.getEspecialistas();(0,E.a)([n,o]).pipe((0,H.U)(([i,s])=>i.filter(c=>"finalizado"===c.estado).map(c=>{const u=s.find(f=>f.uid===c.uidEspecialista);return{...c,nombreEspecialista:u?`${u.apellido}, ${u.nombre}`:"Especialista no encontrado"}}))).subscribe(i=>{this.turnosDetallado=this.ordenarPorFecha(i),this.isLoading=!1})}cambiarEstado(n,o){this.isLoading=!0,this.dataq.cambiarEstadoUsuario(n,o).then(i=>{this.isLoading=!1})}ordenarUsuariosPorPerfil(){const n={paciente:1,especialista:2,admin:3};this.usuarios.sort((o,i)=>n[o.perfil]-n[i.perfil])}descargarPdf(n){const o=new C.ZP,i=10;let s=i;const c=o.internal.pageSize.getHeight();o.addImage("assets/img/logo.png","PNG",o.internal.pageSize.getWidth()-50-10,10,50,50),o.text(n.nombre+", "+n.apellido+".",i,s);const b=new Date,K=b.getDate().toString().padStart(2,"0"),R=(b.getMonth()+1).toString().padStart(2,"0"),X=b.getFullYear();s+=10,o.text(`Fecha de emisi\xf3n: ${K}/${R}/${X}`,i,s);let x=!0;this.turnosDetallado.forEach((r,_)=>{if(r.uidPaciente==n.uid){const m=["-Fecha: "+r.fecha,"-Especialista: "+r.nombreEspecialista,"-Especialidad: "+r.especialidad.nombre,"-Comentarios: "+r.comentarios,"-Datos: ","  -Altura: "+r.datosFijos.altura,"  -Peso: "+r.datosFijos.peso,"  -Presion: "+r.datosFijos.presion,"  -Temperatura: "+r.datosFijos.temperatura,"  -Diagnostico: "+r.datosFijos.diagnostico];""!==r.datosDinamicos.dato1.nombre.trim()&&m.push("-"+r.datosDinamicos.dato1.nombre+": "+r.datosDinamicos.dato1.valor),""!==r.datosDinamicos.dato2.nombre.trim()&&m.push("-"+r.datosDinamicos.dato2.nombre+": "+r.datosDinamicos.dato2.valor),""!==r.datosDinamicos.dato3.nombre.trim()&&m.push("-"+r.datosDinamicos.dato3.nombre+": "+r.datosDinamicos.dato3.valor);const g=10;!x&&s+g*m.length>c-i&&(o.addPage(),s=i),x&&(s+=2*g,x=!1),m.forEach(d=>{o.text(d,i,s),s+=g});const w=190,T=s+2;o.setLineWidth(.3),o.line(i,T,i+w,T),s+=g}}),o.save(n.nombre+"_"+n.apellido+"_HistoriaClinica.pdf")}descargarExcel(){this.excelService.exportarExcel(this.usuarios,"usuarios")}convertirAFecha(n){const o=n.split("/");return new Date(parseInt(o[2]),parseInt(o[1])-1,parseInt(o[0]))}ordenarPorFecha(n){return n.sort((o,i)=>{const s=this.convertirAFecha(o.fecha),c=this.convertirAFecha(i.fecha);return s.getTime()-c.getTime()}),n}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(P.e),t.Y36(M.D),t.Y36(y.x))};static#n=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-home"]],features:[t._Bn([y.x])],decls:14,vars:3,consts:[[1,"container",2,"margin-top","10px"],["class","overlay",4,"ngIf"],[1,"usuarios-container"],[1,"row"],["class","col-md-3 mb-4",4,"ngFor","ngForOf"],["type","button","routerLink","/home/admin/turnos",1,"btn","btn-outline-dark","btn-agendar"],["type","button",1,"btn","btn-outline-success","btn-excel",3,"click"],["type","button","routerLink","register",1,"btn","btn-outline-dark","btn-agregar"],[1,"overlay"],[1,"spinner"],[1,"col-md-3","mb-4"],[1,"card"],["alt","",1,"card-img-top","rounded-circle",2,"width","100px","height","100px","margin","10px",3,"src"],[1,"text-muted","mb-0",2,"margin-left","16px","font-size","14px"],[1,"card-body"],[1,"card-title"],[1,"text-muted","mb-0",2,"font-size","12px"],[4,"ngIf"],[1,"card-text",2,"font-size","12px"],[1,"fw-bold"],[3,"ngClass"],["type","button","class","btn btn-outline-dark btn-sm",3,"click",4,"ngIf"],["type","button","class","btn btn-outline-dark btn-sm","appHoverEffectblack","",3,"click",4,"ngIf"],["type","button","style","margin-left: 20px;","class","btn btn-success btn-sm",3,"click",4,"ngIf"],["type","button",1,"btn","btn-outline-dark","btn-sm",3,"click"],["type","button","appHoverEffectblack","",1,"btn","btn-outline-dark","btn-sm",3,"click"],["type","button",1,"btn","btn-success","btn-sm",2,"margin-left","20px",3,"click"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0),t.YNc(1,D,2,0,"div",1),t.TgZ(2,"div",2)(3,"div",3),t.YNc(4,B,23,18,"div",4),t.qZA()(),t.TgZ(5,"div")(6,"button",5),t._uU(7,"Agendar Turno"),t.qZA()(),t.TgZ(8,"div")(9,"button",6),t.NdJ("click",function(){return i.descargarExcel()}),t._uU(10,"Descargar Excel"),t.qZA()(),t.TgZ(11,"div")(12,"button",7),t._uU(13,"Alta Admin"),t.qZA()()()),2&o&&(t.xp6(1),t.Q6J("ngIf",i.isLoading),t.xp6(1),t.Q6J("@fadeInUp",void 0),t.xp6(2),t.Q6J("ngForOf",i.usuarios))},dependencies:[p.mk,p.sg,p.O5,h.rH,F,U.n],styles:[".overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;background-color:#fffc;display:flex;align-items:center;justify-content:center;z-index:9999}.spinner[_ngcontent-%COMP%]{border:4px solid rgba(255,255,255,.3);border-top:4px solid #e64141;border-radius:50%;width:50px;height:50px;animation:_ngcontent-%COMP%_spin 2s linear infinite}@keyframes _ngcontent-%COMP%_spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.usuarios-container[_ngcontent-%COMP%]{max-height:calc(100vh - 150px);overflow-y:auto}.btn-agregar[_ngcontent-%COMP%]{position:fixed;bottom:10px;right:10px}.btn-excel[_ngcontent-%COMP%]{position:fixed;bottom:10px;right:120px}.btn-agendar[_ngcontent-%COMP%]{position:fixed;bottom:10px;left:250px}.square-image[_ngcontent-%COMP%]{aspect-ratio:1/1;object-fit:cover}.usuarios-container[_ngcontent-%COMP%]{overflow-x:hidden;overflow-y:auto}.usuarios-container[_ngcontent-%COMP%]::-webkit-scrollbar{width:5px}.usuarios-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#888}.usuarios-container[_ngcontent-%COMP%]::-webkit-scrollbar-track-x{display:none}"],data:{animation:[A.X]}})}return e})();const Q=[{path:"",canActivate:[a(9035)._],children:[{path:"",component:j},{path:"register",loadChildren:()=>Promise.all([a.e(519),a.e(928),a.e(921)]).then(a.bind(a,9921)).then(e=>e.RegisterAdminModule)},{path:"turnos",loadChildren:()=>Promise.all([a.e(519),a.e(592),a.e(74)]).then(a.bind(a,74)).then(e=>e.TurnoAdminModule)},{path:"turnos-mostrar",loadChildren:()=>Promise.all([a.e(519),a.e(592),a.e(838)]).then(a.bind(a,6838)).then(e=>e.TurnoMostrarModule)}]}];let Y=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#n=this.\u0275mod=t.oAB({type:e});static#e=this.\u0275inj=t.cJS({imports:[h.Bz.forChild(Q),h.Bz]})}return e})();var $=a(6223),z=a(2514);let G=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#n=this.\u0275mod=t.oAB({type:e});static#e=this.\u0275inj=t.cJS({imports:[p.ez,Y,$.u5,z.I]})}return e})()}}]);