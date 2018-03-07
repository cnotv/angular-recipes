import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  
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
      'https://www.recipetineats.com/wp-content/uploads/2017/09/Spring-Rolls-6-680x1018.jpg',
      [
        new Ingredient('Rice roll', 1),
        new Ingredient('Eggs', 1)
      ]
    ),
    new Recipe(
      'Green Curry',
      'Very spicy thai curry rice',
      'https://hot-thai-kitchen.com/wp-content/uploads/2014/09/Green-curry-FR.jpg',
      [
        new Ingredient('Rice roll', 1),
        new Ingredient('Eggs', 1)
      ]
    )
  ];

  constructor(
  ) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
