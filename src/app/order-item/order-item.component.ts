import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import ProductOrder from '../models/ProductOrder';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css'],
})
export class OrderItemComponent implements OnInit {
  @Input() item!: ProductOrder;
  @Output() quantityEmitter = new EventEmitter();
  @Output() removed = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  updateQuantity(quantity: number): void {
    this.quantityEmitter.emit(this.item);
  }
  
}
