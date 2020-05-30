import { Component, OnInit, Input } from '@angular/core';

import { ProductService } from './product.service';
import { Product } from './product';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() nameProduct = '';
  @Input() descriptionProduct = '';

  constructor(){}
  ngOnInit(){}
}


