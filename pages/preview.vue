<template>
  <div class="preview">
    <h2>注文確認</h2>
    <div class="preview__body">
      <p>合計品数... {{orders.length}}</p>
      <table class="preview-table">
        <thead>
        <tr>
          <th>No.</th>
          <th>品名</th>
          <th>金額</th>
          <th>メモ</th>
        </tr>
        </thead>
        <tbody>
        <tr
          v-for="(order, index) in orders"
          :key="index"
        >
          <td>{{index}}</td>
          <td>{{order.product.name}}</td>
          <td>{{order.product.price}}</td>
          <td>
              <textarea
                placeholder="例: ネギ抜きなど"
                v-model="memo[index]"
              ></textarea>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="preview__footer">
      <div class="footer-btn-container">
        <b-button
          rounded
          @click="$router.push('/')"
        >戻る</b-button>
        <b-button
          rounded
          @click="makeOrder()"
        >注文確定</b-button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import {Component, Vue} from 'nuxt-property-decorator'
  import {searchStore} from '~/store'
  import ProductCard from '../components/organisms/ProductCard.vue'
  import {Order, OrderSet} from "../types/order";
  import {orderStore} from "../utils/store-accessor";

  @Component({
    components: {
      ProductCard
    }
  })
  export default class Preview extends Vue {

    memo: Array<string> = []

    get orders(): Array<Order> {
      const orderSet = orderStore.getOrderSet
      return orderSet.order
    }

    /**
     * 商品をオーダーする
     */
    async makeOrder () {
      const res = await orderStore.decideOrder(this.memo)
      if(res) {
        alert("注文が完了しました")
        this.$router.push('/complete')
      } else {
        alert("注文に失敗しました")
      }
    }
  }
</script>
<style lang="sass" scoped>
.preview
  padding: 0.5rem
.preview__body
  padding: 0.5rem
.preview-table
  width: 100%
  & td
    height: 4rem

.footer-btn-container
  position: absolute
  width: fit-content
  left: 50%
  transform: translateX(-50%)
</style>
