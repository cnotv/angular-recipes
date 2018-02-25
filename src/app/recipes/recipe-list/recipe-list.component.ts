import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Summer Roll', 'Healthy food from Asia', 'https://atmedia.imgix.net/71f67d97b5c7acf9989296ec68ea22a5cc6bb79c?auto=format&q=45&w=1033.0&fit=max&cs=strip')
    new Recipe('Spring Roll', 'Healthy food from Asia', 'https://atmedia.imgix.net/71f67d97b5c7acf9989296ec68ea22a5cc6bb79c?auto=format&q=45&w=1033.0&fit=max&cs=strip')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
