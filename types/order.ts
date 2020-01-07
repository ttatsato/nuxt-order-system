import {Product} from "~/types/index";

export interface OrderSet {
  order: Array<Order>
}
export interface Order {
  userId: number
  shopId: number
  product: Product
  memo: string
  status: string
}
