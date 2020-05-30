import { NgModule } from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router'
import { ProductComponent } from './products/product/product.component';
import { ProductFormComponent } from './products/product-form/product-form.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { NotfoundComponent } from './erros/notfound/notfound.component';


const routes:Routes = [
  {path: 'products', component: ProductListComponent},
  {path: 'products/form', component: ProductFormComponent},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule {

}
