import { Component, OnInit } from '@angular/core';
import { ProductService } from '../core/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  products: any;
  constructor(private product: ProductService) {}
  ngOnInit(): void {
    this.product.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        console.log(this.products);
      },
    });
  }
}
