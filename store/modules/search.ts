import { ActionTree, MutationTree, ActionContext } from 'vuex'
import { RootState } from 'store'
import { SearchResult } from "~/types";
import axios from 'axios';
export const name = 'search';
export const namespaced = true

export const types = {
  SET: 'SELECT'
}

export interface State {
  searchResults: SearchResult[]
}

export const state = (): State => ({
  searchResults: []
})

export const mutations: MutationTree<State> = {
  [types.SET] (state, searchResults: SearchResult[]) {
    state.searchResults = searchResults
  }
}

export interface Actions<S, R> extends ActionTree<S, R> {
  select (context: ActionContext<S, R>, phoneNumber: string): void
}

export const actions: Actions<State, RootState> = {
  select ({ commit }, phoneNumber: string) {
    console.log(phoneNumber);
    axios.get('https://us-central1-n-shield.cloudfunctions.net/fetchPostArticles').then(res => {
        console.log(res);
        commit(types.SET, 'sss');
      }
    )
  }
}

// export const getters: GetterTree<State, RootState> = {
//   selectedPerson: state => {
//     const p = state.people.find(person => person.id === state.selected)
//     return p ? p : { first_name: 'Please,', last_name: 'select someone' }
//   }
// }


