<template>
  <div>
    <section>
      <b-field
        position="is-centered"
        :type="{'is-danger' : valid}"
      >
        <b-input placeholder="電話番号で検索..."
                 v-model="phoneNumber"
                 type="search"
                 icon="magnify">
        </b-input>
        <p class="control">
          <button
            @click="search(phoneNumber)"
            class="button is-primary">Search
          </button>
        </p>
      </b-field>
    </section>
    <section>
      <article
        v-if="Object.keys(result).length > 0"
        class="panel is-primary">
        <p class="panel-heading">
          {{Object.keys(result).length > 0 ? '報告あり' : '報告なし'}}
        </p>
        <div class="panel-block is-active">
          <table class="panel-block__table">
            <tr class="panel-block__row">
              <td class="panel-block__col">id</td>
              <td class="panel-block__col">{{result.id}}</td>
            </tr>
            <tr class="panel-block__row">
              <td class="panel-block__col">電話番号</td>
              <td class="panel-block__col">{{result.tel}}</td>
            </tr>
            <tr class="panel-block__row">
              <td class="panel-block__col">性別</td>
              <td class="panel-block__col">{{result.personal.sex}}</td>
            </tr>
            <tr class="panel-block__row">
              <td class="panel-block__col">報告数</td>
              <td class="panel-block__col">{{result.numberOfArticles}}</td>
            </tr>
            <tr class="panel-block__row">
              <td class="panel-block__col">報告タイプ</td>
              <td class="panel-block__col">
                <div>
                  <span
                    v-for="tag in result.tags.fromShop"
                    :key="tag.id"
                    class="tag is-default">{{ tag.name }}</span>
                </div>
                <div>
                                  <span
                                    v-for="tag in result.tags.fromPersonal"
                                    :key="tag.id"
                                    class="tag is-default">
                 {{ tag.name }}
                </span>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </article>
    </section>
    <section
      v-if="Object.keys(result).length > 0"
    >
      <div class="tile is-parent">
        <div class="tile is-child box">
          <p class="title">お店からの報告</p>
          <search-result-table
            :searchResult="result.articles"
          >
          </search-result-table>
        </div>
      </div>
      <div class="tile is-parent">
        <div class="tile is-child box">
          <p class="title">個人からの報告</p>
          <search-result-table
            :searchResult="result.articles"
          >
          </search-result-table>
        </div>
      </div>
    </section>
  </div>
</template>
<script lang="ts">
  import {Component, Vue} from 'nuxt-property-decorator'
  import {searchStore} from '~/store'
  import SearchResultTable from "../components/organisms/SearchResultTable.vue";

  @Component({
    components: {
      SearchResultTable
    }
  })
  export default class SearchPage extends Vue {
    phoneNumber: string = '';
    valid: boolean = false;
    result = {}

    async search(phoneNumber: string): Promise<void> {
      if (!phoneNumber) {
        this.valid = true
        return
      } else {
        this.valid = false
      }
      await searchStore.findResult(phoneNumber).then(() => {
        this.result = searchStore.getSearchResult
        console.log(Object.keys(this.result).length)
      })
    }
  }
</script>
<style lang="sass" scoped>
  section
    margin-top: 3rem

    .panel-block__table
      width: 100%
    .panel-block__row
      border-bottom: 1px solid #dbdbdb
      &:last-child
        border-bottom: none
      & > .panel-block__col
        padding: 1rem
        &:first-child
          font-weight: bold
          border-right: 1px solid #dbdbdb
</style>
