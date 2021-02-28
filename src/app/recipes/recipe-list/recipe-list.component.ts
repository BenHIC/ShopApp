import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  // @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[];
  subscription: Subscription;
  // recipes: Recipe[] = [
  //   new Recipe('Fisrt Recipe', 'This is a Beef Wellington.',
  //     `https://www.simplyrecipes.com/wp-content/uploads/2009/06/beef-wellington-horiz-a2-1800.jpg`),
  //   new Recipe('Second Recipe', 'This is a simple test.',
  //     `https://www.simplyrecipes.com/wp-content/uploads/2009/06/beef-wellington-horiz-a2-1800.jpg`),
  //   new Recipe('Third Recipe', 'This is a simple test.',
  //     `https://www.simplyrecipes.com/wp-content/uploads/2009/06/beef-wellington-horiz-a2-1800.jpg`)
  // ];

  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.recipeService.recipeChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    );
    this.recipes = this.recipeService.getRecipes();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  // onRecipeSelected(recipe: Recipe) {
  //   this.recipeWasSelected.emit(recipe);
  // }

  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
