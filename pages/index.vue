<template>
  <div>
    <div v-for="result in searchResults">
      {{result}}
    </div>
  </div>
</template>
<script lang="ts">
  import {Component, Vue} from 'nuxt-property-decorator'
  import { searchStore } from '~/store'
  import {SearchResult} from "../types";

  @Component
  export default class Index extends Vue {
    created () {
      searchStore.findResult('098765')
    }
    get searchResults (): SearchResult[] {
      return searchStore.results
    }
  }
</script>
