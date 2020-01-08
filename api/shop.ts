import RequestService from '~/utils/request'
import {Shop} from "~/types/shop";
export default class ShopRepository {
  fetch (shopId: number): Promise<{
    status: number
    data: Shop
  }> {
    // https://us-central1-smartwaiter-263011.cloudfunctions.net/makeOrder
    return RequestService.get<any>('http://localhost:1323/shop/'+shopId)
    // return RequestService.post<SearchResult>('https://us-central1-smartwaiter-263011.cloudfunctions.net/makeOrder', data)
      .then(res => {
        return {
          status: res.status,
          data: <Shop>res.data
        };
      })
  }
}
