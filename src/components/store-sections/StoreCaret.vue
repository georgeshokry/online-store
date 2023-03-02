<template>
    <div class="mt-3 store-caret__main-section-container">
        <div v-for="(item, index) in caretToDisplay" :key="index" class="row">
            <div class="mb-3" style="max-width: 540px;">
                <div class="position-relative">
                    <div class="d-flex justify-content-between">
                       <div>{{item.count}} X <h6 class="card-title">{{item.title}}</h6> </div>
                       <div>${{item.price | formatPrice}}</div>
                    </div>
                </div>
            </div>
            <hr>
        </div>
        <div class="d-flex justify-content-between">
            <h5 class="card-title">Total</h5><div>${{totalPrice | formatPrice}}</div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import store, { Caret, Product } from '@/store'
export default Vue.extend({
  data () {
    return {
      totalPrice: 0,
      caretToDisplay: []
    }
  },
  mounted () {
    store.dispatch('readAllCaret')
  },
  computed: {
    CARET_ITEMS () {
      return store.getters.CARET_ITEMS as Caret
    },
    ALL_PRODUCTS () {
      return store.getters.ALL_PRODUCTS as Product
    }
  },
  filters: {
    formatPrice (value: number) {
      return (Math.round(value * 100) / 100).toFixed(2)
    }
  },
  watch: {
    CARET_ITEMS (items: Array<Caret>) {
      this.calculateCaretItems(items)
    },
    ALL_PRODUCTS: {
      handler () {
        this.calculateCaretItems(this.CARET_ITEMS)
      },
      deep: true
    }
  },
  methods: {
    calculateCaretItems (items: Array<Caret>) {
      this.resetValues() // reset caret data & total before loop on new data on every change
      for (const allProductsIndex in this.ALL_PRODUCTS) {
        for (const caretIndex in items) {
          if (this.ALL_PRODUCTS[allProductsIndex].key === items[caretIndex].productKey) {
            // get the total of every item in caret
            this.totalPrice = this.totalPrice + (this.ALL_PRODUCTS[allProductsIndex].price * items[caretIndex].count)
            // add to array to display in dom
            this.caretToDisplay.push({
              price: this.ALL_PRODUCTS[allProductsIndex].price,
              title: this.ALL_PRODUCTS[allProductsIndex].title,
              count: items[caretIndex].count
            })
          }
        }
      }
    },
    resetValues () {
      this.caretToDisplay = []
      this.totalPrice = 0
    }
  }
})
</script>

<style scoped>
.store-caret__main-section-container{
  max-height: 77vh;
  overflow-x: clip;
  overflow-y: auto;
}
</style>
