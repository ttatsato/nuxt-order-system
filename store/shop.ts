import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import {Shop} from '~/types/Shop'
import ShopRepository from "~/api/Shop";
export interface ShopState {
  shop: Shop
}

@Module({ stateFactory: true, namespaced: true, name: 'shop' })
export default class ShopStore extends VuexModule implements ShopState {
  shop: Shop = {
    id: NaN,
    name: '',
    domain: ''
  }

  get getShop () {
    return this.shop
  }

  @Mutation
  setShop(shop: Shop) {
    this.shop = shop
  }

  /**
   * 注文を決定し送信
   */
  @Action({ rawError: true })
  async fetchShopInfo (shopId: number): Promise<boolean> {
    const shopRepository = new ShopRepository()
    return shopRepository.fetch(shopId).then(res => {
      if (res.status === 200) {
        this.setShop(res.data)
        return true
      } else {
        return false
      }
    })
  }
}

