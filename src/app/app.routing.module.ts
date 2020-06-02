import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { ProductFormComponent } from './products/product-form/product-form.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { NotfoundComponent } from './erros/notfound/notfound.component';
import { ResolverListProduct } from './products/product-list/product-list.resolver';

const routes: Routes = [
  {
    path: 'products',
    component: ProductListComponent,
    resolve: {
      products: ResolverListProduct,
    },
  },
  { path: 'products/form', component: ProductFormComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
