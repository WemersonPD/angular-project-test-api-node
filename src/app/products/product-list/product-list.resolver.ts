import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Product } from '../product/product';
import { ProductService } from '../product/product.service';

// Para utilizar o resolve como um injetor de dependencias
@Injectable({
  providedIn: "root"
})
// Aqui no Resolve, temos que informar o tipo de arquivo que será resolvido.
export class ResolverListProduct implements Resolve<Observable<Product[]>> {
  constructor(private productService: ProductService){}


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product[]> | Observable<Observable<Product[]>> | Promise<Observable<Product[]>> {
    // const userName = route.params.userName  //Caso fosse usar o user name.
    return this.productService.getProducts()

  }



}
