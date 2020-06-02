import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../product/product';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public products: Product[] = [];
  public filter: string = '';

  public hasMore: boolean = false;
  public currentPage: number = 1;


  constructor(
    private activateRoute: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    // Estamos pegando a lista de produtos somente depois que o resolve terminar.
    this.products = this.activateRoute.snapshot.data.products;



  }
}
