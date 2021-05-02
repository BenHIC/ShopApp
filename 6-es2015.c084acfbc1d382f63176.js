(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"7Lvj":function(e,t,i){"use strict";i.r(t),i.d(t,"RecipesModule",function(){return O});var r=i("tyNb"),n=i("3Pt+"),c=i("fXoL"),o=i("ceC1"),s=i("ofXK");const b=function(e){return[e]};let p=(()=>{class e{ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Db({type:e,selectors:[["app-recipe-item"]],inputs:{recipe:"recipe",index:"index"},decls:8,vars:8,consts:[["routerLinkActive","active",1,"list-group-item","clearfix",2,"cursor","pointer",3,"routerLink"],[1,"pull-left"],[1,"list-group-item-heading"],[1,"list-group-item-text"],[1,"pull-right"],[1,"img-responsive",2,"max-height","50px",3,"src","alt"]],template:function(e,t){1&e&&(c.Mb(0,"a",0),c.Mb(1,"div",1),c.Mb(2,"h4",2),c.kc(3),c.Lb(),c.Mb(4,"p",3),c.kc(5),c.Lb(),c.Lb(),c.Mb(6,"span",4),c.Kb(7,"img",5),c.Lb(),c.Lb()),2&e&&(c.Yb("routerLink",c.bc(6,b,t.index)),c.zb(3),c.lc(t.recipe.name),c.zb(2),c.lc(t.recipe.description),c.zb(2),c.Zb("src",t.recipe.imagePath,c.hc),c.Zb("alt",t.recipe.name),c.Yb("src",t.recipe.imagePath,c.hc))},directives:[r.e,r.d],styles:[""]}),e})();function a(e,t){if(1&e&&c.Kb(0,"app-recipe-item",4),2&e){const e=t.index;c.Yb("recipe",t.$implicit)("index",e)}}let d=(()=>{class e{constructor(e,t,i){this.recipeService=e,this.router=t,this.route=i}ngOnInit(){this.subscription=this.recipeService.recipeChanged.subscribe(e=>{this.recipes=e}),this.recipes=this.recipeService.getRecipes()}ngOnDestroy(){this.subscription.unsubscribe()}onNewRecipe(){this.router.navigate(["new"],{relativeTo:this.route})}}return e.\u0275fac=function(t){return new(t||e)(c.Jb(o.a),c.Jb(r.c),c.Jb(r.a))},e.\u0275cmp=c.Db({type:e,selectors:[["app-recipe-list"]],decls:8,vars:1,consts:[[1,"row"],[1,"col-xs-12"],[1,"btn","btn-success",3,"click"],[3,"recipe","index",4,"ngFor","ngForOf"],[3,"recipe","index"]],template:function(e,t){1&e&&(c.Mb(0,"div",0),c.Mb(1,"div",1),c.Mb(2,"button",2),c.Tb("click",function(){return t.onNewRecipe()}),c.kc(3,"New Recipe"),c.Lb(),c.Lb(),c.Lb(),c.Kb(4,"hr"),c.Mb(5,"div",0),c.Mb(6,"div",1),c.jc(7,a,1,2,"app-recipe-item",3),c.Lb(),c.Lb()),2&e&&(c.zb(7),c.Yb("ngForOf",t.recipes))},directives:[s.i,p],styles:[""]}),e})(),u=(()=>{class e{constructor(){}ngOnInit(){}ngOnDestroy(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Db({type:e,selectors:[["app-recipes"]],decls:5,vars:0,consts:[[1,"container"],[1,"col-md-5"],[1,"col-md-7"]],template:function(e,t){1&e&&(c.Mb(0,"div",0),c.Mb(1,"div",1),c.Kb(2,"app-recipe-list"),c.Lb(),c.Mb(3,"div",2),c.Kb(4,"router-outlet"),c.Lb(),c.Lb())},directives:[d,r.g],styles:[""]}),e})(),l=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Db({type:e,selectors:[["app-recipe-start"]],decls:2,vars:0,template:function(e,t){1&e&&(c.Mb(0,"h3"),c.kc(1,"Please select a Recipe!"),c.Lb())},styles:[""]}),e})();var m=i("3V6w");function h(e,t){if(1&e&&(c.Mb(0,"li",10),c.kc(1),c.Lb()),2&e){const e=t.$implicit;c.zb(1),c.nc(" ",e.name," - ",e.amount," ")}}let v=(()=>{class e{constructor(e,t,i){this.recipeService=e,this.route=t,this.router=i}ngOnInit(){this.route.params.subscribe(e=>{this.id=+e.id,this.recipe=this.recipeService.getRecipe(this.id)})}onAddToShoppingList(){this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients)}onEditRecipe(){this.router.navigate(["edit"],{relativeTo:this.route})}onDeleteRecipe(){this.recipeService.deleteRecipe(this.id),this.router.navigate(["/recipes"])}}return e.\u0275fac=function(t){return new(t||e)(c.Jb(o.a),c.Jb(r.a),c.Jb(r.c))},e.\u0275cmp=c.Db({type:e,selectors:[["app-recipe-detail"]],decls:30,vars:5,consts:[[1,"row"],[1,"col-xs-12"],[1,"img-responsive",2,"max-height","300px",3,"src","alt"],["appDropdown","",1,"btn-group"],["type","button",1,"btn","btn-primary","dropdown-toggle"],[1,"caret"],[1,"dropdown-menu"],[2,"cursor","pointer",3,"click"],[1,"list-group"],["class","list-group-item",4,"ngFor","ngForOf"],[1,"list-group-item"]],template:function(e,t){1&e&&(c.Mb(0,"div",0),c.Mb(1,"div",1),c.Kb(2,"img",2),c.Lb(),c.Lb(),c.Mb(3,"div",0),c.Mb(4,"div",1),c.Mb(5,"h1"),c.kc(6),c.Lb(),c.Lb(),c.Lb(),c.Mb(7,"div",0),c.Mb(8,"div",1),c.Mb(9,"div",3),c.Mb(10,"button",4),c.kc(11," Manage Recipe "),c.Kb(12,"span",5),c.Lb(),c.Mb(13,"ul",6),c.Mb(14,"li"),c.Mb(15,"a",7),c.Tb("click",function(){return t.onAddToShoppingList()}),c.kc(16,"Add ingredients to Shopping List"),c.Lb(),c.Lb(),c.Mb(17,"li"),c.Mb(18,"a",7),c.Tb("click",function(){return t.onEditRecipe()}),c.kc(19,"Edit Recipe"),c.Lb(),c.Lb(),c.Mb(20,"li"),c.Mb(21,"a",7),c.Tb("click",function(){return t.onDeleteRecipe()}),c.kc(22,"Delete Recipe"),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Mb(23,"div",0),c.Mb(24,"div",1),c.kc(25),c.Lb(),c.Lb(),c.Mb(26,"div",0),c.Mb(27,"div",1),c.Mb(28,"ul",8),c.jc(29,h,2,2,"li",9),c.Lb(),c.Lb(),c.Lb()),2&e&&(c.zb(2),c.Zb("alt",t.recipe.name),c.Yb("src",t.recipe.imagePath,c.hc),c.zb(4),c.lc(t.recipe.name),c.zb(19),c.mc(" ",t.recipe.description," "),c.zb(4),c.Yb("ngForOf",t.recipe.ingredients))},directives:[m.a,s.i],styles:[""]}),e})();class g{constructor(e,t,i,r){this.name=e,this.description=t,this.imagePath=i,this.ingredients=r}}function f(e,t){if(1&e){const e=c.Nb();c.Mb(0,"div",18),c.Mb(1,"div",19),c.Kb(2,"input",20),c.Lb(),c.Mb(3,"div",21),c.Kb(4,"input",22),c.Lb(),c.Mb(5,"div",21),c.Mb(6,"button",4),c.Tb("click",function(){c.gc(e);const i=t.index;return c.Vb().onDeleteIngredient(i)}),c.kc(7,"X"),c.Lb(),c.Lb(),c.Lb()}2&e&&c.Yb("formGroupName",t.index)}let L=(()=>{class e{constructor(e,t,i){this.route=e,this.recipeService=t,this.router=i,this.editMode=!1}ngOnInit(){this.route.params.subscribe(e=>{this.id=+e.id,this.editMode=null!=e.id,this.initForm()})}onSubmit(){console.log(this.recipeForm);const e=new g(this.recipeForm.value.name,this.recipeForm.value.description,this.recipeForm.value.imagePath,this.recipeForm.value.ingredients);this.editMode?this.recipeService.updateRecipe(this.id,e):this.recipeService.addRecipe(e),this.onCancel()}onAddIngredient(){this.recipeForm.get("ingredients").push(new n.g({name:new n.e(null,n.t.required),amount:new n.e(null,[n.t.required,n.t.pattern(/^[1-9]+[0-9]*$/)])}))}onCancel(){this.router.navigate(["../"],{relativeTo:this.route})}onDeleteIngredient(e){this.recipeForm.get("ingredients").removeAt(e)}initForm(){let e="",t="",i="";const r=new n.c([]);if(this.editMode){const c=this.recipeService.getRecipe(this.id);if(e=c.name,t=c.imagePath,i=c.description,c.ingredients)for(const e of c.ingredients)r.push(new n.g({name:new n.e(e.name,n.t.required),amount:new n.e(e.amount,[n.t.required,n.t.pattern(/^[1-9]+[0-9]*$/)])}))}this.recipeForm=new n.g({name:new n.e(e,n.t.required),imagePath:new n.e(t,n.t.required),description:new n.e(i,n.t.required),ingredients:r})}get controls(){return this.recipeForm.get("ingredients").controls}}return e.\u0275fac=function(t){return new(t||e)(c.Jb(r.a),c.Jb(o.a),c.Jb(r.c))},e.\u0275cmp=c.Db({type:e,selectors:[["app-recipe-edit"]],decls:39,vars:4,consts:[[1,"row"],[1,"col-xs-12"],[3,"formGroup","ngSubmit"],["type","submit",1,"btn","btn-primary",3,"disabled"],["type","button",1,"btn","btn-danger",3,"click"],[1,"form-group"],["for","name"],["id","name","type","text","formControlName","name",1,"form-control"],["for","imagePath"],["id","imagePath","type","text","formControlName","imagePath",1,"form-control"],["imagePath",""],[1,"imd-responsive",3,"src"],["for","description"],["id","description","type","text","rows","6","formControlName","description",1,"form-control"],["formArrayName","ingredients",1,"col-xs-12"],["class","row","style","margin-top: 10px;",3,"formGroupName",4,"ngFor","ngForOf"],[1,"row",2,"margin-top","10px"],["type","button",1,"btn","btn-primary",3,"click"],[1,"row",2,"margin-top","10px",3,"formGroupName"],[1,"col-xs-8"],["type","text","formControlName","name",1,"form-control"],[1,"col-xs-2"],["type","number","formControlName","amount",1,"form-control"]],template:function(e,t){if(1&e&&(c.Mb(0,"div",0),c.Mb(1,"div",1),c.Mb(2,"form",2),c.Tb("ngSubmit",function(){return t.onSubmit()}),c.Mb(3,"div",0),c.Mb(4,"div",1),c.Mb(5,"button",3),c.kc(6,"Save"),c.Lb(),c.Mb(7,"button",4),c.Tb("click",function(){return t.onCancel()}),c.kc(8,"Cancel"),c.Lb(),c.Lb(),c.Lb(),c.Mb(9,"div",0),c.Mb(10,"div",1),c.Mb(11,"div",5),c.Mb(12,"label",6),c.kc(13,"Name"),c.Lb(),c.Kb(14,"input",7),c.Lb(),c.Lb(),c.Lb(),c.Mb(15,"div",0),c.Mb(16,"div",1),c.Mb(17,"div",5),c.Mb(18,"label",8),c.kc(19,"Img URL"),c.Lb(),c.Kb(20,"input",9,10),c.Lb(),c.Lb(),c.Lb(),c.Mb(22,"div",0),c.Mb(23,"div",1),c.Kb(24,"img",11),c.Lb(),c.Lb(),c.Mb(25,"div",0),c.Mb(26,"div",1),c.Mb(27,"div",5),c.Mb(28,"label",12),c.kc(29,"Description"),c.Lb(),c.Kb(30,"textarea",13),c.Lb(),c.Lb(),c.Lb(),c.Mb(31,"div",0),c.Mb(32,"div",14),c.jc(33,f,8,1,"div",15),c.Kb(34,"hr"),c.Mb(35,"div",16),c.Mb(36,"div",1),c.Mb(37,"button",17),c.Tb("click",function(){return t.onAddIngredient()}),c.kc(38,"Add Ingredient"),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb()),2&e){const e=c.dc(21);c.zb(2),c.Yb("formGroup",t.recipeForm),c.zb(3),c.Yb("disabled",t.recipeForm.invalid),c.zb(19),c.Yb("src",e.value,c.hc),c.zb(9),c.Yb("ngForOf",t.controls)}},directives:[n.u,n.m,n.h,n.a,n.l,n.f,n.d,s.i,n.i,n.p],styles:["button[_ngcontent-%COMP%]{margin-right:10px}input.ng-invalid.ng-touched[_ngcontent-%COMP%], textarea.ng-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}"]}),e})();var M=i("GXvH");let w=(()=>{class e{constructor(e,t){this.dataStorageService=e,this.recipesService=t}resolve(e,t){const i=this.recipesService.getRecipes();return void 0===i||0===i.length?this.dataStorageService.fetchRecipes():i}}return e.\u0275fac=function(t){return new(t||e)(c.Qb(M.a),c.Qb(o.a))},e.\u0275prov=c.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var k=i("IzEk"),x=i("lJxs"),y=i("qXBG");const S=[{path:"",component:u,canActivate:[(()=>{class e{constructor(e,t){this.authService=e,this.router=t}canActivate(e,t){return this.authService.user.pipe(Object(k.a)(1),Object(x.a)(e=>!!e||this.router.createUrlTree(["/auth"])))}}return e.\u0275fac=function(t){return new(t||e)(c.Qb(y.a),c.Qb(r.c))},e.\u0275prov=c.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()],children:[{path:"",component:l},{path:"new",component:L},{path:":id",component:v,resolve:[w]},{path:":id/edit",component:L,resolve:[w]}]}];let F=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.Hb({type:e}),e.\u0275inj=c.Gb({imports:[[r.f.forChild(S)],r.f]}),e})();var R=i("PCNd");let O=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.Hb({type:e}),e.\u0275inj=c.Gb({providers:[],imports:[[r.f,n.r,F,R.a]]}),e})()}}]);