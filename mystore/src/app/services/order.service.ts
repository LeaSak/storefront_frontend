import { Injectable } from '@angular/core';
import Order from '../models/Order';
import ProductOrder from '../models/ProductOrder';
import { Recipient } from '../models/Recipient';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  order !: Order
  constructor() { }

  createOrder(recipient: Recipient, products: ProductOrder[], totalOrderAmount: number): void {
    const order: Order = {
      customer: {
        fullname: recipient.fullname,
        address: recipient.address,
        city: recipient.city,
        creditCard: recipient.creditCard,
      },
      products: products,
      totalOrderAmount: totalOrderAmount
    }

    this.order = order;
  }

  getOrder(): Order {
    return this.order;
  }
}
