import ProductOrder from "./ProductOrder";
import { Recipient } from "./Recipient";

export default interface Order {
  id?: number;
  customer: Recipient
  products: ProductOrder[];
  totalOrderAmount: number
}