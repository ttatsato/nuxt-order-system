import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Search from '../store/search'
import OrderStore from "~/store/order";

let searchStore: Search
let orderStore: OrderStore

function initialiseStores(store: Store<any>): void {
  searchStore = getModule(Search, store)
  orderStore = getModule(OrderStore, store)
}

export { initialiseStores, searchStore, orderStore}
