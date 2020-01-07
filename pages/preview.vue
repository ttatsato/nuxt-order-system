<template>
  <div class="preview">
    <h2>注文確認</h2>
    <div class="preview__body">
      <table class="preview-table">
        <thead>
        <tr>
          <th>品名</th>
          <th>数</th>
          <th>金額</th>
          <th>メモ</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>熱々ジューシーハンバーグ</td>
          <td>1</td>
          <td>¥1,980</td>
          <td>
              <textarea
                placeholder="例: ネギ抜きなど"
              ></textarea>
          </td>
        </tr>
        <tr>
          <td>熱々ジューシーハンバーグ</td>
          <td>1</td>
          <td>¥1,980</td>
          <td>
              <textarea
                placeholder="例: ネギ抜きなど"
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
  import OrderRepository from "../api/order";
  import {OrderSet, Product} from "../types";

  @Component({
    components: {
      ProductCard
    }
  })
  export default class Preview extends Vue {

    /**
     * 商品をオーダーする
     */
    makeOrder () {
      const orderRepository = new OrderRepository()
      let orderSet: OrderSet = {
        order: [
          {
            userId: 1,
            shopId: 1,
            product: {
              id: 12,
              name: "ハンバーグ",
              price: 2900
            },
            memo: "これはメモです。",
            status: "注文"
          },
          {
            userId: 1,
            shopId: 1,
            product: {
              id: 12,
              name: "ミニハンバーグ",
              price: 1000
            },
            memo: "ケチャップ抜き",
            status: "注文"
          }
        ]
      }
      orderRepository.make(orderSet)
      //  $router.push('/complete')"
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
