import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product} from '../models/Product';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product!: Product
  @Output() cartUpdate = new EventEmitter();


  constructor(private cartService: CartService) {}

  ngOnInit(): void {
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    
    window.alert('Your product has been added to the cart!');
  }
}
