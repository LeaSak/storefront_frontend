import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import ProductOrder from '../models/ProductOrder';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
 
 items: ProductOrder[] = this.cartService.getCartItems(); 
 cartLength: number = this.cartService.calcCartLength();
  
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  
  }



}
