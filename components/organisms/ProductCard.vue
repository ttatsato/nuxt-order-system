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
        class="product-card__body-btn"
        rounded
      >選択</b-button>
    </div>
  </div>
</template>
<script lang="ts">
  import {Component, Prop, Vue} from 'nuxt-property-decorator'
  import { searchStore } from '~/store'
  import {Product} from "../../types";

  @Component
  export default class ProductCard extends Vue {
    @Prop()
    product: Product
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
