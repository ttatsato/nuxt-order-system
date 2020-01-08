import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import {OrderSet, Order} from '~/types/order'
import {Product} from "~/types";
import OrderRepository from "~/api/order";
export interface OrderState {
  orderSet: OrderSet
}

@Module({ stateFactory: true, namespaced: true, name: 'order' })
export default class OrderStore extends VuexModule implements OrderState {
  orderSet: OrderSet = {
    order: []
  };

  get getOrderSet () {
    return this.orderSet
  }

  @Mutation
  setOrderSet(order: Order) {
    this.orderSet.order.push(order)
  }

  @Mutation
  resetOrderSet() {
    this.orderSet = {
      order: []
    }
  }


  @Mutation
  updateOrderMemo({index, memo}: {index: number, memo: string}) {
    this.orderSet.order[index]["memo"] = memo
  }

  @Action({ rawError: true })
  async appendOrder(product: Product) {
    let order: Order = {
      userId: 1,
      shopId: 1,
      code: "6A",
      product: product,
      memo: "",
      status: "",
    }
    this.setOrderSet(order)
  }

  /**
   * 注文を決定し送信
   */
  @Action({ rawError: true })
  async decideOrder (memos: Array<string>): Promise<boolean> {
    for (let i = 0; i < this.orderSet.order.length; i++) {
      if (memos[i]) {
        this.updateOrderMemo({index:i, memo:memos[i]})
      }
    }
    const orderRepository = new OrderRepository()
    return orderRepository.make(this.orderSet).then(res => {
      if (res.status === 201) {
        this.resetOrderSet()
        return true
      } else {
        return false
      }
    })
  }
}

