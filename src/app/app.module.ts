import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { ProductsModule } from './products/products.module';
import { AppRoutingModule } from './app.routing.module';
import { ErrosModule } from './erros/erros.module';



@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    ProductsModule,
    AppRoutingModule,
    ErrosModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
