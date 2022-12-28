import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss'],
})
export class DetailProductComponent implements OnInit {
  constructor(private router: ActivatedRoute) {}
  ngOnInit(): void {
    this.router.params.subscribe({
      next: (params: Params) => {
        const productId: string = params['productId'];
        console.log(productId);
      },
    });
  }
}
