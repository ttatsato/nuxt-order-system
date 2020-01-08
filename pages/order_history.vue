<template>
  <div class="preview">
    <h2>注文履歴</h2>
    <div class="preview__body">
      <table class="preview-table">
        <thead>
        <tr>
          <th>品名</th>
          <th>金額</th>
          <th>メモ</th>
          <th>注文時間</th>
        </tr>
        </thead>
        <tbody>
        <tr
          v-for="order in orderHistory"
          :key="order.id"
        >
          <td>{{order.product.name}}</td>
          <td>{{order.product.price}}</td>
          <td>{{order.memo}}</td>
          <td>{{order.createdAt}}</td>
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
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import {Component, Vue} from 'nuxt-property-decorator'
  import {searchStore} from '~/store'
  import ProductCard from '../components/organisms/ProductCard.vue'
  import OrderRepository from "../api/order";
  import {Order} from "../types/order";

  @Component({
    components: {
      ProductCard
    }
  })
  export default class OrderHistory extends Vue {
    orderHistory: Array<Order> = []
    async created () {
      const orderRepository = new OrderRepository()
      orderRepository.fetchHistory(1).then(res => {
        if (res.status === 200) {
          this.orderHistory = <Array<Order>>res.data
        } else {
          this.orderHistory = []
        }
      })
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
