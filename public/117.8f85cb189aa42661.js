"use strict";(self.webpackChunkclinica_online=self.webpackChunkclinica_online||[]).push([[117],{2117:(A,c,o)=>{o.r(c),o.d(c,{HomeModule:()=>Z});var s=o(6814),l=o(969),t=o(5879),d=o(588);function u(n,a){1&n&&(t.TgZ(0,"div",6),t._UZ(1,"div",7),t.qZA())}function g(n,a){if(1&n){const i=t.EpF();t.TgZ(0,"button",16),t.NdJ("click",function(){t.CHM(i);const r=t.oxw().$implicit,x=t.oxw();return t.KtG(x.habilitarUsuario(r.uid))}),t._uU(1,"Habilitar "),t.qZA()}}const m=function(n,a){return{"badge rounded-pill":!0,"text-bg-success":n,"text-bg-danger":a}};function p(n,a){if(1&n&&(t.TgZ(0,"tr")(1,"td")(2,"div",8),t._UZ(3,"img",9),t.TgZ(4,"div",10)(5,"p",11),t._uU(6),t.qZA(),t.TgZ(7,"p",12),t._uU(8),t.qZA()()()(),t.TgZ(9,"td")(10,"p",13),t._uU(11),t.qZA(),t.TgZ(12,"p",12),t._uU(13),t.qZA(),t.TgZ(14,"p",12),t._uU(15),t.qZA()(),t.TgZ(16,"td"),t._uU(17),t.qZA(),t.TgZ(18,"td")(19,"span",14),t._uU(20),t.qZA()(),t.TgZ(21,"td"),t.YNc(22,g,2,0,"button",15),t.qZA()()),2&n){const i=a.$implicit;t.xp6(3),t.Q6J("src",i.imagen,t.LSH),t.xp6(3),t.AsE("",i.apellido,", ",i.nombre,""),t.xp6(2),t.Oqu(i.mail),t.xp6(3),t.Oqu(i.perfil),t.xp6(2),t.Oqu(i.especialidad),t.xp6(2),t.Oqu(i.obraSocial),t.xp6(2),t.Oqu(i.dni),t.xp6(2),t.Q6J("ngClass",t.WLB(11,m,i.estado,!i.estado)),t.xp6(1),t.hij(" ",i.estado?"Activo":"No Activo"," "),t.xp6(2),t.Q6J("ngIf",!i.estado)}}const h=[{path:"",component:(()=>{class n{constructor(i){this.dataq=i,this.usuarios=[],this.isLoading=!1}ngOnInit(){this.isLoading=!0,this.dataq.traerUsuarios().subscribe(i=>{this.usuarios=i,this.isLoading=!1})}habilitarUsuario(i){this.isLoading=!0,this.dataq.habilitarUsuario(i).then(e=>{this.isLoading=!1})}static#t=this.\u0275fac=function(e){return new(e||n)(t.Y36(d.e))};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-home"]],decls:20,vars:2,consts:[["class","overlay",4,"ngIf"],[1,"table","align-middle","mb-0","bg-white"],[1,"bg-light"],[4,"ngFor","ngForOf"],[2,"position","relative"],["type","button","routerLink","register",1,"btn","btn-outline-dark","btn-agregar"],[1,"overlay"],[1,"spinner"],[1,"d-flex","align-items-center"],["alt","",1,"rounded-circle",2,"width","45px","height","45px",3,"src"],[1,"ms-3"],[1,"fw-bold","mb-1"],[1,"text-muted","mb-0"],[1,"fw-normal","mb-1"],[3,"ngClass"],["type","button","class","btn btn-outline-dark btn-sm",3,"click",4,"ngIf"],["type","button",1,"btn","btn-outline-dark","btn-sm",3,"click"]],template:function(e,r){1&e&&(t.YNc(0,u,2,0,"div",0),t.TgZ(1,"table",1)(2,"thead",2)(3,"tr")(4,"th"),t._uU(5,"Nombre"),t.qZA(),t.TgZ(6,"th"),t._uU(7,"Tipo"),t.qZA(),t.TgZ(8,"th"),t._uU(9,"DNI"),t.qZA(),t.TgZ(10,"th"),t._uU(11,"Estado"),t.qZA(),t.TgZ(12,"th"),t._uU(13,"Habilitar"),t.qZA()()(),t.TgZ(14,"tbody"),t.YNc(15,p,23,14,"tr",3),t._UZ(16,"tr"),t.qZA()(),t.TgZ(17,"div",4)(18,"button",5),t._uU(19,"Alta Admin"),t.qZA()()),2&e&&(t.Q6J("ngIf",r.isLoading),t.xp6(15),t.Q6J("ngForOf",r.usuarios))},dependencies:[s.mk,s.sg,s.O5,l.rH],styles:[".overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;background-color:#fffc;display:flex;align-items:center;justify-content:center;z-index:9999}.spinner[_ngcontent-%COMP%]{border:4px solid rgba(255,255,255,.3);border-top:4px solid #e64141;border-radius:50%;width:50px;height:50px;animation:_ngcontent-%COMP%_spin 2s linear infinite}@keyframes _ngcontent-%COMP%_spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.btn-agregar[_ngcontent-%COMP%]{position:fixed;bottom:10px;right:10px}"]})}return n})(),children:[]},{path:"register",loadChildren:()=>Promise.all([o.e(928),o.e(519),o.e(921)]).then(o.bind(o,9921)).then(n=>n.RegisterAdminModule)}];let f=(()=>{class n{static#t=this.\u0275fac=function(e){return new(e||n)};static#n=this.\u0275mod=t.oAB({type:n});static#i=this.\u0275inj=t.cJS({imports:[s.ez,l.Bz.forChild(h),l.Bz]})}return n})();var b=o(95);let Z=(()=>{class n{static#t=this.\u0275fac=function(e){return new(e||n)};static#n=this.\u0275mod=t.oAB({type:n});static#i=this.\u0275inj=t.cJS({imports:[s.ez,f,b.u5]})}return n})()}}]);