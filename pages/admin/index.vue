<template>
  <div class="preview">
    <h2>メニュー登録</h2>
    <div class="preview__body">
      <section>
          <b-field label="メニュー名">
            <b-input
              v-model="name"
            ></b-input>
          </b-field>
          <!--
          以下を設定するとエラー表示できる
          type="is-danger"
          message="This email is invalid"
          -->
          <b-field label="メニュー価格">
            <b-input
              type="number"
              v-model="price"
            ></b-input>
          </b-field>
        </section>
    </div>
    <div class="preview__footer">
      <div class="footer-btn-container">
        <b-button
          rounded
          @click="$router.push('/admin')"
        >戻る</b-button>
        <b-button
          rounded
          @click="createMenu()"
        >商品登録</b-button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import {Component, Provide, Vue, Watch} from 'nuxt-property-decorator'
  import {searchStore} from '~/store'
  import ProductRepository from "../../api/product";
  import {Product} from "../../types";

  @Component({})
  export default class AdminIndex extends Vue {
    name: string = ''
    price: number = 10
    /**
     * メニューを作成する
     */
    async createMenu () {
      const productRepository = new ProductRepository()
      const product: Product = {
        id: null,
        name: this.name,
        price: this.price
      }
      const result = await productRepository.create(product)
      alert(result.data.name + "を登録しました。")
      //  $router.push('/complete')"
      this.resetFormValue()
    }
    resetFormValue () {
      this.name = ''
      this.price = null
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
