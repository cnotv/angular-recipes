import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router, PreloadAllModules } from '@angular/router';
// import { CommonModule } from '@angular/common';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HomeComponent } from './core/home/home/home.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'}, // lazy loaded
  {path: 'shopping-list', component: ShoppingListComponent },
]

@NgModule({
  imports: [
    // CommonModule,
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
