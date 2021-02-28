import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { exhaustMap, map, take, tap } from 'rxjs/operators';
import { AuthSerivce } from '../auth/auth.service';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  private baseUrl: string;
  constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthSerivce) {
    // this.baseUrl = 'https://ng-course-recipe-book-65f10.firebaseio.com/';
    this.baseUrl = 'https://shopapp-9bded-default-rtdb.firebaseio.com/';
  }

  storeRecipes() {
    const recipe = this.recipeService.getRecipes();
    this.http
      .put(
        this.baseUrl + 'rceipes.json',
        recipe
      )
      .subscribe(response => {
        console.log(response);
      });
  }

  fetchRecipes() {
    // return this.authService.user.pipe(
    //   take(1),
    //   exhaustMap(user => {
    return this.http.
      get<Recipe[]>(
        this.baseUrl + 'rceipes.json',
        // {
        //   params: new HttpParams().set('auth', user._token)
        // }
      ).pipe(
        map(recipes => {
          return recipes.map(recipe => {
            return { ...recipe, Ingredients: recipe.ingredients ? recipe.ingredients : [] };
          });
        }),
        tap(recipes => {
          this.recipeService.setRecipes(recipes);
        })
      );
    // );
    //   }),
    //   map(recipes => {
    //     return recipes.map(recipe => {
    //       return { ...recipe, Ingredients: recipe.ingredients ? recipe.ingredients : [] };
    //     });
    //   }),
    //   tap(recipes => {
    //     this.recipeService.setRecipes(recipes);
    //   })
    // );
    // return this.http.
    //   get<Recipe[]>(
    //     this.baseUrl + 'rceipes.json'
    //   )
    //   .pipe(
    //     map(recipes => {
    //       return recipes.map(recipe => {
    //         return { ...recipe, Ingredients: recipe.ingredients ? recipe.ingredients : [] };
    //       });
    //     }),
    //     tap(recipes => {
    //       this.recipeService.setRecipes(recipes);
    //     })
    //   );

    // .subscribe(recipes => {
    //   console.log(recipes);
    //   this.recipeService.setRecipes(recipes);
    // });
  }
}
