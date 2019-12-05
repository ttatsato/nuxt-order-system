<template>
  <div>
    <section>
      <b-field position="is-centered">
        <b-input placeholder="電話番号で検索..."
                 v-model="phoneNumber"
                 type="search"
                 icon="magnify">
        </b-input>
        <p class="control">
          <button
            @click="search(phoneNumber)"
            class="button is-primary">Search</button>
        </p>
      </b-field>
    </section>
    <section>
      <section>
        <h1>お店からの報告</h1>
        <search-result-table
          :searchResult="result.articles"
        >
        </search-result-table>
      </section>
    </section>
  </div>
</template>
<script lang="ts">
  import {Component, Vue} from 'nuxt-property-decorator'
  import { searchStore } from '~/store'
  import SearchResultTable from "../components/organisms/SearchResultTable.vue";
  @Component({
    components: {
      SearchResultTable
    }
  })
  export default class SearchPage extends Vue {
    phoneNumber: string = '';

    result = {}

    async search (phoneNumber: string) : Promise<void> {
      await searchStore.findResult(phoneNumber).then(() => {
        this.result = searchStore.getSearchResult
      })
    }
  }
</script>
<style lang="sass" scoped>
  section
    margin-top: 3rem
</style>
