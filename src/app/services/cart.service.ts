import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import ProductOrder from '../models/ProductOrder';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: ProductOrder[] = [];
  cartLength = this.calcCartLength();

  constructor() {}

  updateItemInItems(item: ProductOrder):void {
    const orderItem = this.checkItem(item);
    if (orderItem){
      orderItem.quantity = item.quantity;
      this.setTotalPrice(orderItem);
    }
  }

  addToCart(product: Product): void {
    const item = this.checkItem(product);
    if (item) {
      this.setOrderQuantity(item);
      this.setTotalPrice(item);
    } else {
      this.cart.push({ ...product, quantity: 1, totalPrice: product.price });
    }
    this.cartLength = this.calcCartLength();
  }

  removeItem(product: ProductOrder): void {
    const item = this.checkItem(product);
    if (item) {
      if (item.quantity > 1) {
        item.quantity -= 1;
        this.setTotalPrice(product);
      } else {
        const itemIndex = this.cart.findIndex((object) => {
          return object.id == product.id;
        });
        this.cart.splice(itemIndex, 1);
      }
    }
    this.cartLength = this.calcCartLength();
  }

  getCartItems(): ProductOrder[] {
    return this.cart;
  }

  calcCartLength(): number {
    const quantity = this.cart.reduce(function (
      currentValue,
      item: ProductOrder
    ) {
      return currentValue + item.quantity;
    },
    0);
    return quantity;
  }

  clearCart(): ProductOrder[] {
    this.cart = [];
    return this.cart;
  }

  checkItem(product: Product): ProductOrder | undefined {
    const item = this.cart.find(
      (cartItem: Product) => cartItem.id === product.id
    );
    return item;
  }

  setOrderQuantity(item: ProductOrder): number {
    return (item.quantity += 1);
  }

  calcTotalPrice(item: ProductOrder): number {
    return item.quantity * item.price;
  }

  setTotalPrice(item: ProductOrder): void {
    item.totalPrice = this.calcTotalPrice(item);
  }

  getTotalPrice(item: ProductOrder): number {
    return item.totalPrice;
  }

  calcOrderTotal(): number {
    const summary = this.cart.reduce(function (
      currentValue,
      item: ProductOrder
    ) {
      return currentValue + item.totalPrice;
    },
    0);
    return summary;
  }
}
