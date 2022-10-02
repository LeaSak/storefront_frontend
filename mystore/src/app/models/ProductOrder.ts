import { Product } from "./Product";

export default interface ProductOrder extends Product {
    quantity: number,
    totalPrice:number
}