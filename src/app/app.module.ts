import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { ProductsModule } from './products/products.module';
import { AppRoutingModule } from './app.routing.module';
import { ErrosModule } from './erros/erros.module';
import { HomeModule } from './home/home.module';
import { VmenssageModule } from './shareds/components/vmenssage/vmenssage.module';



@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    ProductsModule,
    AppRoutingModule,
    ErrosModule,
    HomeModule,
    VmenssageModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
