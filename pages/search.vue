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
        {{result}}
        <!--<search-result-table-->
          <!--:searchResult="searchResult.ArticlesFromShop"-->
        <!--&gt;-->
        <!--</search-result-table>-->
      </section>
    </section>
    <section>
      <code>
      <pre>
        {{result}}
      </pre>
      </code>
    </section>
  </div>
</template>
<script lang="ts">
  import {Component, Vue} from 'nuxt-property-decorator'
  import { searchStore } from '~/store'
  import SearchResultTable from "../components/organisms/SearchResultTable.vue";
  import SearchRepository from "../api/search";

  const searchRepository = new SearchRepository();

  @Component({
    components: {
      SearchResultTable
    }
  })
  export default class SearchPage extends Vue {
    phoneNumber: string = '';
    result: object = {};
    async search (phoneNumber: string) : Promise<void> {
      this.result = await searchRepository.find(phoneNumber)
    }
  }
</script>
<style lang="sass" scoped>
  section
    margin-top: 3rem
</style>
