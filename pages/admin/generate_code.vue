<template>
  <div>
    <h2>ショップQRコード生成</h2>
    <p>下のQRコードをお客様の見える場所に掲示してください。</p>
    <div>
      <qrcode-vue :value="value" :size="size" level="H"></qrcode-vue>
    </div>
  </div>
</template>
<script>
  import {Component, Provide, Vue, Watch} from 'nuxt-property-decorator'
  import {searchStore} from '~/store'
  //@ts-ignore
  import QrcodeVue from 'qrcode.vue'
  @Component({
    components: {
      QrcodeVue,
    }
  })
  export default class GenerateCode extends Vue {
    value = 'https://localhost:3000/welcome'
    size = 300
    created () {
      const shopId = 1
      this.value += "/" + shopId
    }
  }
</script>
<style lang="sass" scoped>
</style>
