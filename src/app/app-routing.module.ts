import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
// import { CommonModule } from '@angular/common';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {path: 'shopping-list', component: ShoppingListComponent },
]

@NgModule({
  imports: [
    // CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
