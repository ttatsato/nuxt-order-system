<template>
  <div class="product-card">
    <img
      class="product-card__media"
      src="../../../../Downloads/98.jpg"/>
    <div class="product-card__body">
      <p>{{product.name}}</p>
    </div>
    <div class="product-card__footer">
      <p>¥{{product.price}}</p>
      <b-button
        v-show="count === 0"
        class="product-card__body-btn"
        @click="choice()"
        rounded
      >選択</b-button>
      <div
        v-show="count > 0"
        class="product-card__body-btn"
      >
        <span>-</span>
        <b-button
          v-show="count > 0"
          @click="choice()"
          rounded
        >{{count}}</b-button>
        <span>+</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import {Component, Prop, Vue, Watch} from 'nuxt-property-decorator'
  import {orderStore} from '~/store'
  import {Product} from "../../types";

  @Component
  export default class ProductCard extends Vue {
    @Prop()
    product: Product

    count: number = 0

    // @Watch('count')
    // countChange (c: number) {
    // }

    choice () {
      orderStore.appendOrder(this.product).then(() => {
        this.count++
      })
    }
  }
</script>
<style lang="sass" scoped>
  .product-card
    padding: 0.25rem
  .product-card__body
    position: relative
    height: 3rem
  .product-card__footer
    position: relative
  .product-card__body-btn
    position: absolute
    bottom: 0
    right: 0
</style>
