import {SearchResult} from "~/types";
import RequestService from '~/utils/request'
export default class OrderRepository {
  // @ts-ignore
  make (orderSet): Promise<any> {
    // https://us-central1-smartwaiter-263011.cloudfunctions.net/makeOrder
    return RequestService.post<any>('http://localhost:1323/order', orderSet)
    // return RequestService.post<SearchResult>('https://us-central1-smartwaiter-263011.cloudfunctions.net/makeOrder', data)
      .then(res => {
        return res
      })
  }
  fetch (): Promise<SearchResult> {
    // https://us-central1-smartwaiter-263011.cloudfunctions.net/makeOrder
    return RequestService.get<SearchResult>('http://localhost:1323/order')
    // return RequestService.post<SearchResult>('https://us-central1-smartwaiter-263011.cloudfunctions.net/makeOrder', data)
      .then(res => {
        console.log(res)
        return <SearchResult>res.data;
      })
  }
}
