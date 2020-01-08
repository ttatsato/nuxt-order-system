import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Search from '../store/search'
import OrderStore from "~/store/order";
import ShopStore from "~/store/shop";

let searchStore: Search
let orderStore: OrderStore
let shopStore: ShopStore

function initialiseStores(store: Store<any>): void {
  searchStore = getModule(Search, store)
  orderStore = getModule(OrderStore, store)
  shopStore = getModule(ShopStore, store)
}

export { initialiseStores, searchStore, orderStore, shopStore}
