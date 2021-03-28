import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingListComponent } from './shopping-list.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      // { path: 'shopping-list', component: ShoppingListComponent } // For lazyloading
      { path: '', component: ShoppingListComponent }
    ]),
  ],
  exports: [
    RouterModule
  ]
})
export class ShoppingListRoutingModule {

}
