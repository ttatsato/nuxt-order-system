<template>
  <div class="preview">
    <h2>注文完了</h2>
    <div class="preview__body">
      <p>注文が完了しました!<br>商品が届くまでしばらくお待ちください。</p>
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

  @Component({
    components: {
      ProductCard
    }
  })
  export default class Preview extends Vue {
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
