import {Product} from "~/types/index";

export interface OrderSet {
  order: Array<Order>
}
export interface Order {
  userId: number
  shopId: number
  code: string
  product: Product
  memo: string
  status: string
}

export interface ApiResult {
  data: object
  status: number
}
