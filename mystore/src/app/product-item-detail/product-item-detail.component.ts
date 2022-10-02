import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/Product';
import { ProductsService } from '../services/products.service';
import { CartService } from '../services/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent implements OnInit {
  product!: Product;

  constructor(
    private selectedRoute: ActivatedRoute,
    private productsService: ProductsService,
    private cartService: CartService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    const routeParams = this.selectedRoute.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    this.getProductById(productIdFromRoute);
  }

  getProductById(id: number): void {
    this.productsService.requestProducts().subscribe((data: Product[]) => {
      this.product = this.productsService.getProductById(id, data);
    });
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    this.snackBar.open('Your product has been added to the cart!', 'OK');
  }
}
