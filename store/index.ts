import Vuex from 'vuex'
import * as root from './root'
import * as people from './modules/people'
import * as search from './modules/search'

export type RootState = root.State

const createStore = () => {
  return new Vuex.Store({
    state: root.state(),
    getters: root.getters,
    mutations: root.mutations,
    actions: root.actions,
    modules: {
      [people.name]: people,
      [search.name]: search
    }
  })
}

export default createStore
