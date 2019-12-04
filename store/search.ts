import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import axios from 'axios'
import {SearchResult} from '~/types'
export interface SearchState {
  results: SearchResult[]
}

@Module({ stateFactory: true, namespaced: true, name: 'search' })
export default class Search extends VuexModule implements SearchState {
  results: SearchResult[] = []

  get searchResults () {
    return this.results
  }

  @Mutation
  setResult(result: SearchResult) {
    this.results.push(result)
  }

  @Action
  async findResult(phoneNumber: string) {
    axios.get('https://us-central1-n-shield.cloudfunctions.net/fetchPostArticles').then(res => {
      this.setResult(res.data)
    })
  }
}

