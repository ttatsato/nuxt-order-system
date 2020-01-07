<template>
  <div class="order-list">
    <navigation-bar></navigation-bar>
    <div class="order-list__body">
      <div
        class="columns product-card__row">
        <ProductCard
          v-for="product in products"
          class="column is-5"
          :product="product"
        />
      </div>
    </div>
    <footer
      class="order-list__footer"
    >
      <div class="order-list__footer-content">
        <p>熱々ジュージューハンバーグ</p>
        <p>... 他９品</p>
      </div>
      <div class="order-list__footer-content--right">
        <b-button
          class="order-list__submit-btn"
          rounded
          @click="$router.push('/preview')"
        >注文する</b-button>
      </div>
    </footer>
  </div>
</template>
<script lang="ts">
  import {Component, Vue} from 'nuxt-property-decorator'
  import {searchStore} from '~/store'
  import ProductCard from '../components/organisms/ProductCard.vue'
  import ProductRepository from "../api/product";
  import {Product} from "../types";

  @Component({
    components: {
      ProductCard
    }
  })
  export default class Index extends Vue {
    products: Array<Product> = []
    async created () {
      // TODO ショップIDを入店時に取得できるように。
      const shopId = 1
      const productRepository = new ProductRepository()
      const result = await productRepository.fetch(shopId)
      this.products = result.data
      console.log(this.products)
    }
  }
</script>
<style lang="sass" scoped>
  .order-list__body
    margin-right: 4px
    margin-left: 4px
    padding-bottom: 5rem
  .product-card__row
    display: grid
    grid-template-columns: 1fr 1fr
    margin: auto
    padding: 0.25rem
    /*display: flex*/
    /*margin-bottom: 1rem*/
  
  .order-list__footer
    background: rgba(0, 0, 0, 0.8)
    color: #ffffff
    height: 4rem
    position: fixed
    left: 0
    bottom: 0
    width: 100%
    display: flex

  .order-list__footer-content
    padding: 0.5rem
    height: 100%
    width: 70%

  .order-list__footer-content--right
    position: relative
    width: 30%
    height: 100%

  .order-list__submit-btn
    position: absolute
    top: 50%
    left: 50%
    transform: translateY(-50%) translateX(-50%)
</style>
