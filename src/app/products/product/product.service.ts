import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root',

})
export class ProductService {
  public API = 'http://localhost:3000/api';

  constructor(
    private httpClient: HttpClient,
  ){}

  getProducts(userName: string){

    return this.httpClient.get<Product[]>(`${this.API}/user/${userName}/products`)

  }
}
