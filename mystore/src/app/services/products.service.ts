import { Injectable } from '@angular/core';
import { Product} from '../models/Product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products !: Product[];
  key: string = "products"

  constructor(private http: HttpClient) { }
  
  requestProducts(): Observable<Product[]>{
    return this.http.get<[Product]>("assets/data.json");
  }

  getProductById(id: number, products: Product[]): Product{
    return products.filter((item: Product) => item.id === id)[0];
  }

}
