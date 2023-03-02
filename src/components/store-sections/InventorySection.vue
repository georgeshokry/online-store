<template>
    <div class="mt-3 inventory-section__section-container">
        <div v-for="(item, index) in ALL_PRODUCTS" :key="index" class="row">
            <form-inputs :productItem="item" @assignNewValues="saveProduct"/>
            <hr>
        </div>
        <product-create-header />
        <form-inputs :productItem="productData" @assignNewValues="assignNewValues"/>
        <button type="button" class="btn btn-secondary" @click="addNewProduct()">Add Product</button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import FormInputs from './FormInputs.vue'
import store, { Product } from '@/store'
import debounce from 'lodash.debounce'
import ProductCreateHeader from '@/components/store-headers/ProductCreateHeader.vue'
export default Vue.extend({
  components: { FormInputs, ProductCreateHeader },
  data () {
    return {
      productData: {
        title: '',
        desc: '',
        image: '',
        price: 0,
        status: 'available'
      } as Product
    }
  },
  computed: {
    ALL_PRODUCTS () {
      return store.state.productsList
    }
  },
  methods: {
    saveProduct: debounce((newProduct: Product) => {
      console.log('newProduct', newProduct)
      // to reduce emitting calls for better performance we need to wait
      store.dispatch('updateProductById', newProduct)
    }, 1000),
    addNewProduct () {
      store.dispatch('addNewProduct', this.productData)
      this.resetFormInputs()
    },
    assignNewValues (newProduct: Product) {
      this.productData = newProduct
    },
    resetFormInputs () {
      this.productData = {
        title: '',
        desc: '',
        image: '',
        price: 0,
        status: 'available'
      } as Product
    }
  }
})
</script>

<style scoped>
.inventory-section__desc{
  min-height: 100px;
}
.inventory-section__section-container{
  max-height: 85vh;
  overflow-x: auto;
  padding: 0px 20px;
}
</style>
