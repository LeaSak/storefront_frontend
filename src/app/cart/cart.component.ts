import { Component, OnInit } from '@angular/core';
import ProductOrder from '../models/ProductOrder';
import { CartService } from '../services/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  item!: ProductOrder;
  items: ProductOrder[] = this.cartService.getCartItems();
  totalOrderAmount: number = this.cartService.calcOrderTotal();

  constructor(
    private cartService: CartService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  updateQuantity(item: ProductOrder): void {
    this.cartService.updateItemInItems(item);
    this.totalOrderAmount = this.cartService.calcOrderTotal();
  }

  removeItem(item: ProductOrder): void {
    this.cartService.removeItem(item);
    this.totalOrderAmount = this.cartService.calcOrderTotal();
    this.snackBar.open('Item was removed from cart', 'OK');
  }

  clearCart(): void {
    this.items = this.cartService.clearCart();
    this.totalOrderAmount = this.cartService.calcOrderTotal();
  }
}
