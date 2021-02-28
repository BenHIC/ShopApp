import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  // recipeSelected = new EventEmitter<Recipe>();
  // recipeSelected = new Subject<Recipe>();

  recipeChanged = new Subject<Recipe[]>();

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Fisrt Recipe',
  //     'This is a Beef Wellington.',
  //     `https://www.simplyrecipes.com/wp-content/uploads/2009/06/beef-wellington-horiz-a2-1800.jpg`,
  //     [
  //       new Ingredient('Beff', '10'),
  //       new Ingredient('French Fries', '20')
  //     ]),
  //   new Recipe(
  //     'Second Recipe', 'This is a simple test.',
  //     `https://www.simplyrecipes.com/wp-content/uploads/2009/06/beef-wellington-horiz-a2-1800.jpg`,
  //     [
  //       new Ingredient('Bread', '10'),
  //       new Ingredient('French Fries', '20')
  //     ]),
  //   new Recipe(
  //     'Third Recipe', 'This is a thrid test.',
  //     `https://www.simplyrecipes.com/wp-content/uploads/2009/06/beef-wellington-horiz-a2-1800.jpg`,
  //     [
  //       new Ingredient('Egg', '10'),
  //       new Ingredient('French Fries', '20')
  //     ])
  // ];

  private recipes: Recipe[];

  constructor(private slService: ShoppingListService) { }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipeChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes; // .slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }
}
