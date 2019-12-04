import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import axios from 'axios'
import {SearchResult} from '~/types'
export interface SearchState {
  result: SearchResult
}

@Module({ stateFactory: true, namespaced: true, name: 'search' })
export default class Search extends VuexModule implements SearchState {
  result: SearchResult;

  get searchResult () {
    return this.result
  }

  @Mutation
  setResult(result: SearchResult) {
    console.log(result)
    this.result = result
    console.log(this.result)
  }

  @Action
  async findResult(phoneNumber: string) {
    axios.get('https://us-central1-n-shield.cloudfunctions.net/fetchPostArticles').then(res => {
      this.setResult(res.data)
    })
  }
}

