<template>
  <div class="preview">
    <h2>ご退出確認</h2>
    <div class="preview__body">
      <p>お店をご退出しますか？</p>
      <p>ご退出される旨は、お店のスタッフに通知されます。</p>
    </div>
    <div class="preview__footer">
      <div class="footer-btn-container">
        <b-button
          rounded
          @click="$router.push('/')"
        >まだお会計しないで商品一覧画面に戻る</b-button>
        <b-button
          rounded
          @click="$router.push('/check_complete')"
        >退出する</b-button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import {Component, Vue} from 'nuxt-property-decorator'
  import {searchStore} from '~/store'

  @Component()
  export default class Check extends Vue {
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
