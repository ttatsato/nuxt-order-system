import { ActionTree, MutationTree, GetterTree, ActionContext } from 'vuex'
import { RootState } from 'store'
import { Person } from "~/types";

export const name = 'people'
export const namespaced = true

export const types = {
  SELECT: 'SELECT',
  SET: 'SET'
}

export interface State {
  selected: number,
  people: Array<Person>
}

export const state = (): State => ({
  selected: 1,
  people: []
})

export const getters: GetterTree<State, RootState> = {
  selectedPerson: state => {
    const p = state.people.find(person => person.id === state.selected)
    return p ? p : { first_name: 'Please,', last_name: 'select someone' }
  }
}

export const mutations: MutationTree<State> = {
  [types.SELECT] (state, id: number) {
    state.selected = id
  },
  [types.SET] (state, people: Person[]) {
    state.people = people
  }
}

export interface Actions<S, R> extends ActionTree<S, R> {
  select (context: ActionContext<S, R>, id: number): void
}

export const actions: Actions<State, RootState> = {
  select ({ commit }, id: number) {
    commit(types.SELECT, id)
  }
}


