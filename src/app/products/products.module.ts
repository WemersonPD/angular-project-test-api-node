import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFormComponent } from './product-form/product-form.component';

@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductFormComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule
  ],
  exports: [ProductListComponent]
})
export class ProductsModule {

}
