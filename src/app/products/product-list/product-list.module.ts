import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination'

import { ProductListComponent } from './product-list.component';
import { FilterByTitle } from './filter-by-title.pipe';
import { ProductsComponent } from './products/products.component';
import { CommonModule } from '@angular/common';
import { ProductModule } from '../product/product.module';
import { CardModule } from 'src/app/shareds/components/card/card.module';
import { SearchComponent } from './search/search.component';
import { DarkOnHoverModule } from 'src/app/shareds/directives/dark-on-hover/dark-on-hover.module';


@NgModule({
  declarations: [
    ProductListComponent,
    FilterByTitle,
    ProductsComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    ProductModule,
    CardModule,
    DarkOnHoverModule
  ]
})
export class ProductListModule {}
