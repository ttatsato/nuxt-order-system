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
    <section
      v-for="searchResult in searchResults"
      :key="searchResult.id"
    >
      <section>
        <h1>お店からの報告</h1>
        <!--<SearchResultTable-->
          <!--:data="searchResult.ArticleFromShop"-->
        <!--&gt;</SearchResultTable>-->
      </section>
    </section>
    <section>
      <code>
      <pre>
        {{searchResults}}
      </pre>
      </code>
    </section>
  </div>
</template>
<script lang="ts">
  import {Component, namespace, Vue} from 'nuxt-property-decorator'
  import * as search from '../store/modules/search'
  import {SearchResult} from "../types";
  const Search = namespace(search.name)

  @Component({
    // SearchResultTable: () => import('~/components/organisms/SearchResultTable')
  })
  export default class SearchPage extends Vue {
    phoneNumber: string = ''
    @Search.State('searchResults') searchResults: SearchResult[]
    @Search.Action('select') select: any

    async search (phoneNumber: string) : Promise<void> {
      this.select(phoneNumber);
    }
  }
</script>
<style lang="sass" scoped>
  section
    margin-top: 3rem
</style>
