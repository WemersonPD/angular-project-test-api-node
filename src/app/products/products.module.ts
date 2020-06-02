import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination'

import { ProductListComponent } from './product-list/product-list.component';

import { ProductModule } from './product/product.module';
import { ProductFormModule } from './product-form/product-form.module';
import { ProductListModule } from './product-list/product-list.module';
@NgModule({
  imports: [
    ProductModule,
    ProductFormModule,
    ProductListModule

  ],
})
export class ProductsModule {

}
