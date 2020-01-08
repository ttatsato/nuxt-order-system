<template>
  <div class="preview">
    <h2>いらっしゃいませ</h2>
    <div class="preview__body">
      <p v-if="shop.name">
        <b>{{shop.name}}</b>へようこそ!<br>
        素敵なお食事のお時間をお過ごしください。
      </p><br>
    </div>
    <div class="preview__footer">
      <b-button
        rounded
        @click="$router.push('/')"
      >メニュー一覧へ</b-button>
    </div>
  </div>
</template>
<script lang="ts">
  import {Vue, Component, Watch} from 'nuxt-property-decorator'
  import {searchStore} from '~/store'
  import {shopStore} from "../utils/store-accessor";
  @Component({})
  export default class Welcome extends Vue {
    created () {
      // const shopId: number = this.$route.query.shopId
      const shopId: number = 1
      shopStore.fetchShopInfo(shopId).then(isOk => {
        if (!isOk) {
          console.error("ショップ情報の取得に失敗しました。")
        }
      })
    }
    get shop () {
      return shopStore.getShop
    }

    @Watch('shop')
    change() {
      console.log(this.shop)
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
