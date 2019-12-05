import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import {SearchResult} from '~/types'
import SearchRepository from "~/api/search";
export interface SearchState {
  result: SearchResult
}

const searchRepository = new SearchRepository();

@Module({ stateFactory: true, namespaced: true, name: 'search' })
export default class Search extends VuexModule implements SearchState {
  result: SearchResult;

  get getSearchResult (): SearchResult {
    // @ts-ignore
    return this.context.state.result
  }

  @Mutation
  setResult(result: SearchResult) {
    this.result = result
  }

  @Action
  async findResult(phoneNumber: string) {
    const searchResult = await searchRepository.find(phoneNumber);
    this.setResult(searchResult)
  }
}

