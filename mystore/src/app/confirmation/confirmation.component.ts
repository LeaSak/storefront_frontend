import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import Order from '../models/Order';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  order: Order = this.orderService.getOrder();
  
  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
  }

}
