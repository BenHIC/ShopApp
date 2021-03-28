import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule' }, // Lazy loading solution 1
  // {
  //   path: 'recipes', // Lazy loading solution 2
  //   loadChildren: () => import('./recipes/recipes.module').then(m => m.RecipesModule)
  // },
  { path: 'shopping-list', loadChildren: './shopping-list/shopping-list.module#ShoppingListModule' }, // Lazy loading
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule' }, // Lazy loading
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes,
      {
        preloadingStrategy: PreloadAllModules
      })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
