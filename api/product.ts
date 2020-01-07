import {SearchResult} from "~/types";
import RequestService from '~/utils/request'
export default class ProductRepository {
  // @ts-ignore
  create (product): Promise<any> {
    // https://us-central1-smartwaiter-263011.cloudfunctions.net/makeOrder
    return RequestService.post<any>('http://localhost:1323/product/new', product)
    // return RequestService.post<SearchResult>('https://us-central1-smartwaiter-263011.cloudfunctions.net/makeOrder', data)
      .then(res => {
        return res
      })
  }
  fetch (shopId: number): Promise<any> {
    // https://us-central1-smartwaiter-263011.cloudfunctions.net/makeOrder
    return RequestService.get<any>('http://localhost:1323/product/'+shopId)
    // return RequestService.post<SearchResult>('https://us-central1-smartwaiter-263011.cloudfunctions.net/makeOrder', data)
      .then(res => {
        console.log(res)
        return res;
      })
  }
}
