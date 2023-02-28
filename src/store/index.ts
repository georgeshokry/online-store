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

export interface StoreInterface {
  productsList: Array<Product>
}

export default new Vuex.Store({
  state: {
    productsList: []
  } as StoreInterface,
  getters: {
    ALL_PRODUCTS: state => {
      return state.productsList
    }
  },
  mutations: {
    UPDATE_PRODUCTS: (state, payload) => {
      state.productsList = payload
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
    }
  }
})
