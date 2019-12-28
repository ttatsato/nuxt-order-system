import {SearchResult} from "~/types";
import RequestService from '~/utils/request'
export default class OrderRepository {
  // @ts-ignore
  make (): Promise<SearchResult> {
    const data = {
      products: [
        {
          name: 'this',
          price: 1900
        }
      ]
    }
    // https://us-central1-smartwaiter-263011.cloudfunctions.net/makeOrder
    // return RequestService.post<SearchResult>('http://localhost:1323/order', data)
    return RequestService.post<SearchResult>('https://us-central1-smartwaiter-263011.cloudfunctions.net/makeOrder', data)
      .then(res => {
        console.log(res)
        return <SearchResult>res.data;
      })
  }
}
