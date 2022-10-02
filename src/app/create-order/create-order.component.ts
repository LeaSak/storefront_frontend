import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipient } from '../models/Recipient';
import ProductOrder from '../models/ProductOrder';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css'],
})
export class CreateOrderComponent implements OnInit {
  customer: Recipient = {
    fullname: '',
    address: '',
    city: '',
    creditCard: '',
  };

  @Input() totalOrderAmount: number = 0;
  @Input() items: ProductOrder[] = [];
  @Output() clearCart = new EventEmitter();

  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.orderService.createOrder(
      this.customer,
      this.items,
      this.totalOrderAmount
    );
    this.clearCart.emit();
    this.router.navigate(['/confirmation']);
  }
}
