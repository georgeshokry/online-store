import Vue from 'vue'
import Vuex from 'vuex'
import { getDatabase, ref, push, set, onValue } from 'firebase/database'

Vue.use(Vuex)

export interface Product{
  title: string,
  desc: string,
  image: string,
  price: number,
  status: 'available' | 'unavailable',
  key?: string
}

export interface Caret{
  productKey: string,
  count: number
}

export interface StoreInterface {
  productsList: Array<Product>,
  caret: Array<Caret>
}

export default new Vuex.Store({
  state: {
    productsList: [],
    caret: []
  } as StoreInterface,
  getters: {
    ALL_PRODUCTS: state => {
      return state.productsList
    },
    CARET_ITEMS: state => {
      return state.caret
    }
  },
  mutations: {
    UPDATE_PRODUCTS: (state, payload) => {
      state.productsList = payload
    },
    UPDATE_CARET: (state, payload) => {
      state.caret[payload.productIndex] = payload.newItem
    },
    ADD_NEW_CARET: (state, payload) => {
      state.caret.push(payload)
    },
    ADD_ALL_CARET: (state, payload) => {
      state.caret = payload
    }
  },
  actions: {
    addNewProduct ({ commit }, productItem: Product) {
      const db = getDatabase()
      const inventory = push(ref(db, 'inventory/'))
      set(inventory, productItem)
    },
    readAllProducts ({ commit }) {
      const db = getDatabase()
      const dbRef = ref(db, 'inventory/')
      // eslint-disable-next-line
      onValue(dbRef, (snapshot) => {
        const data : Array<Product> = []
        snapshot.forEach((childSnapshot) => {
          const key = childSnapshot.key
          data.push({ ...childSnapshot.val(), key })
          commit('UPDATE_PRODUCTS', data)
        })
      }, {})
    },
    updateProductById ({ commit }, productItem: Product) {
      console.log('productItem', productItem.key)
      const db = getDatabase()
      set(ref(db, 'inventory/' + productItem.key), productItem)
    },
    addProductToCaret ({ commit, state }, caret: Caret) {
      console.log(state)
      const productIndex = state.caret.findIndex((item) => item.productKey === caret.productKey)
      const db = getDatabase()
      // this.state.caret.push(caret)
      if (productIndex !== -1) {
        const newItem = {
          productKey: caret.productKey,
          count: caret.count + state.caret[productIndex].count
        }
        commit('UPDATE_CARET', { newItem, productIndex })
        set(ref(db, 'user/caret/' + caret.productKey), newItem)
      } else {
        commit('ADD_NEW_CARET', caret)
        // we can imagen that there is a user id
        set(ref(db, 'user/caret/' + caret.productKey), caret)
      }
    },
    readAllCaret ({ commit }) {
      const db = getDatabase()
      const dbRef = ref(db, 'user/caret/')
      // eslint-disable-next-line
      onValue(dbRef, (snapshot) => {
        const data : Array<Caret> = []
        snapshot.forEach((childSnapshot) => {
          const key = childSnapshot.key
          data.push({ ...childSnapshot.val(), key })
          commit('ADD_ALL_CARET', data)
        })
      }, {})
    }
  }
})
