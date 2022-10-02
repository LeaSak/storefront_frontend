import { Component, OnInit } from '@angular/core';
import ProductOrder from '../models/ProductOrder';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  item !: ProductOrder;
  items: ProductOrder[] = this.cartService.getCartItems();
  totalOrderAmount: number = this.cartService.calcOrderTotal();

  
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
  }
  
  removeItem(item:ProductOrder): void {
    this.cartService.removeItem(item);
    this.totalOrderAmount = this.cartService.calcOrderTotal();
    alert("Item was removed from cart")
  }

  clearCart(): void {
    this.items = this.cartService.clearCart();
    this.totalOrderAmount = this.cartService.calcOrderTotal();
  }
}
