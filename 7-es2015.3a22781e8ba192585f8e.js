(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{CXQP:function(t,e,n){"use strict";n.r(e),n.d(e,"ShoppingListModule",function(){return M});var i=n("3Pt+"),s=n("PCNd"),o=n("tyNb"),r=n("fXoL"),c=n("ozzT"),b=n("l7P3"),d=n("9rNa"),u=n("sPvp"),l=n("ofXK");const a=["form"];function p(t,e){if(1&t){const t=r.Nb();r.Mb(0,"button",13),r.Tb("click",function(){return r.gc(t),r.Vb().onDelete()}),r.kc(1,"Delete"),r.Lb()}}let m=(()=>{class t{constructor(t,e){this.slService=t,this.store=e,this.editMode=!1}ngOnInit(){this.subscription=this.slService.startedEditing.subscribe(t=>{this.editedItemIndex=t,this.editMode=!0,this.editedItem=this.slService.getIngrdient(t),this.slForm.setValue({name:this.editedItem.name,amount:this.editedItem.amount})})}onSubmit(t){const e=new d.a(t.value.name,t.value.amount);this.editMode?this.slService.updateIngredients(this.editedItemIndex,e):this.store.dispatch(new u.c(e)),this.editMode=!1,t.reset()}onClear(){this.slForm.reset(),this.editMode=!1}onDelete(){this.slService.deleteIngredients(this.editedItemIndex),this.onClear()}ngOnDestroy(){this.subscription.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(r.Jb(c.a),r.Jb(b.a))},t.\u0275cmp=r.Db({type:t,selectors:[["app-shopping-edit"]],viewQuery:function(t,e){if(1&t&&r.oc(a,1),2&t){let t;r.cc(t=r.Ub())&&(e.slForm=t.first)}},decls:20,vars:3,consts:[[1,"row"],[1,"col-xs-12"],[3,"ngSubmit"],["form","ngForm"],[1,"col-sm-5","form-group"],["for","name"],["type","text","id","name","name","name","ngModel","","required","",1,"form-control"],[1,"col-sm-2","form-group"],["for","amount"],["type","number","id","amount","name","amount","ngModel","","required","","pattern","^[1-9]+[0-9]*$",1,"form-control"],["type","submit",1,"btn","btn-primary",3,"disabled"],["class","btn btn-danger","type","button",3,"click",4,"ngIf"],["type","button",1,"btn","btn-info",3,"click"],["type","button",1,"btn","btn-danger",3,"click"]],template:function(t,e){if(1&t){const t=r.Nb();r.Mb(0,"div",0),r.Mb(1,"div",1),r.Mb(2,"form",2,3),r.Tb("ngSubmit",function(){r.gc(t);const n=r.dc(3);return e.onSubmit(n)}),r.Mb(4,"div",0),r.Mb(5,"div",4),r.Mb(6,"label",5),r.kc(7,"Name"),r.Lb(),r.Kb(8,"input",6),r.Lb(),r.Mb(9,"div",7),r.Mb(10,"label",8),r.kc(11,"Amount"),r.Lb(),r.Kb(12,"input",9),r.Lb(),r.Lb(),r.Mb(13,"div",0),r.Mb(14,"div",1),r.Mb(15,"button",10),r.kc(16),r.Lb(),r.jc(17,p,2,0,"button",11),r.Mb(18,"button",12),r.Tb("click",function(){return e.onClear()}),r.kc(19,"Clear"),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb()}if(2&t){const t=r.dc(3);r.zb(15),r.Yb("disabled",t.invalid),r.zb(1),r.lc(e.editMode?"Update":"Add"),r.zb(1),r.Yb("ngIf",e.editMode)}},directives:[i.u,i.m,i.n,i.a,i.l,i.o,i.s,i.p,i.q,l.j],styles:["button[_ngcontent-%COMP%]{margin-right:10px}"]}),t})();function f(t,e){if(1&t){const t=r.Nb();r.Mb(0,"a",4),r.Tb("click",function(){r.gc(t);const n=e.index;return r.Vb().onEditItem(n)}),r.kc(1),r.Lb()}if(2&t){const t=e.$implicit;r.zb(1),r.nc(" ",t.name," ",t.amount," ")}}let g=(()=>{class t{constructor(t,e){this.slService=t,this.store=e}ngOnInit(){this.ingredients=this.store.select("shoppingList")}ngOnDestroy(){}onEditItem(t){this.slService.startedEditing.next(t)}}return t.\u0275fac=function(e){return new(e||t)(r.Jb(c.a),r.Jb(b.a))},t.\u0275cmp=r.Db({type:t,selectors:[["app-shopping-list"]],decls:7,vars:3,consts:[[1,"container"],[1,"col-xs-10"],[1,"list-group"],["class","list-group-item","style","cursor: pointer",3,"click",4,"ngFor","ngForOf"],[1,"list-group-item",2,"cursor","pointer",3,"click"]],template:function(t,e){1&t&&(r.Mb(0,"div",0),r.Mb(1,"div",1),r.Kb(2,"app-shopping-edit"),r.Kb(3,"hr"),r.Mb(4,"ul",2),r.jc(5,f,2,2,"a",3),r.Wb(6,"async"),r.Lb(),r.Lb(),r.Lb()),2&t&&(r.zb(5),r.Yb("ngForOf",r.Xb(6,1,e.ingredients).ingredients))},directives:[m,l.i],pipes:[l.b],styles:[""]}),t})(),h=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.Hb({type:t}),t.\u0275inj=r.Gb({imports:[[o.f.forChild([{path:"",component:g}])],o.f]}),t})(),M=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.Hb({type:t}),t.\u0275inj=r.Gb({providers:[],imports:[[i.j,h,s.a]]}),t})()}}]);