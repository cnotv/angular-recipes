import { Injectable, EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  
  private recipes: Recipe[] = [
    new Recipe(
      'Summer Roll',
      'Healthy food from Asia',
      'https://atmedia.imgix.net/71f67d97b5c7acf9989296ec68ea22a5cc6bb79c?auto=format&q=45&w=1033.0&fit=max&cs=strip',
      [
        new Ingredient('Rice roll', 1),
        new Ingredient('Salad', 1)
      ]
    ),
    new Recipe(
      'Spring Roll',
      'Healthy food from Asia',
      'https://atmedia.imgix.net/71f67d97b5c7acf9989296ec68ea22a5cc6bb79c?auto=format&q=45&w=1033.0&fit=max&cs=strip',
      [
        new Ingredient('Rice roll', 1),
        new Ingredient('Eggs', 1)
      ]
  )
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  };
}
