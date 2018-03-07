import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, // includes CommonModule and application initialization
    HttpModule,
    CoreModule,
    AuthModule,
    ShoppingListModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
