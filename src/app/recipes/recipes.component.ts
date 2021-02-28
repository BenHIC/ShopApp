import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  // providers: [RecipeService]
})
export class RecipesComponent implements OnInit, OnDestroy {
  // selectedRecipe: Recipe;
  // private recipeSub: Subscription;
  // constructor(private recipeService: RecipeService) { }
  constructor() { }

  ngOnInit() {
    //   this.recipeSub = this.recipeService.recipeSelected.subscribe(
    //     (recipe: Recipe) => { this.selectedRecipe = recipe; }
    //   );
  }

  ngOnDestroy() {
    //   this.recipeSub.unsubscribe();
  }
}
