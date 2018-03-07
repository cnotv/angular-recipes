import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';

import { shoppingListReducer } from './shopping-list/store/shopping-list.reducers'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, // includes CommonModule and application initialization
    HttpModule,
    CoreModule,
    StoreModule.forRoot({ shoppingList: shoppingListReducer }),
    AuthModule,
    ShoppingListModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
