<template>
  <div class="preview">
    <h2>いらっしゃいませ</h2>
    <div class="preview__body">
      <p>
        ガスト上野店へようこそ!<br>
        素敵なお食事のお時間をお過ごしください。
      </p><br>
      <p>
        このサービスを使った弊店でのご注文は、すべて<br>
        <strong>都度支払い</strong><br>
        です。
      </p>
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
  import {Component, Vue} from 'nuxt-property-decorator'
  import {searchStore} from '~/store'

  @Component()
  export default class Welcome extends Vue {
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
