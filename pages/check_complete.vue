<template>
  <div class="preview">
    <h2>ご利用いただきありがとうございました</h2>
    <div class="preview__body">
      <p>
        この度は、ガスト上野店をご利用いただきましてありがとうございました!<br>
        スタッフ一同、またのご利用をお待ちしております。
      </p>
    </div>
    <div class="preview__footer">
    </div>
  </div>
</template>
<script lang="ts">
  import {Vue} from 'nuxt-property-decorator'
  import {searchStore} from '~/store'

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
