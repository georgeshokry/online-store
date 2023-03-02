<template>
    <div class="store-items__main-section-container">
      <div class="container">
        <div v-for="(item, index) in  ALL_PRODUCTS" :key="index" class="row">
            <div class="mb-3" style="max-width: 540px;">
                <div class="row no-gutters">
                    <!-- product image -->
                    <div class="col-md-4 p-1">
                        <img loading="lazy" :src="item.image" class="img-fluid w-100" alt="product-image">
                    </div>
                    <!-- main item container -->
                    <div class="col-md-8">
                        <div class="position-relative">
                            <div class="d-flex justify-content-between">
                                <h5 class="card-title">{{item.title}}</h5> <div>${{item.price}}</div>
                            </div>
                            <p class="card-text h6">{{item.desc}}</p>
                            <!-- in case of product available -->
                            {{item.key}}
                            <button @click="addToCaret(item.key)" v-if="item.status === 'available'" type="button" class="btn btn-secondary btn-sm" >
                                ADD TO CART
                            </button>
                            <!-- otherwise -->
                            <h3 class="store-items__unavailable-stamp" v-else>
                                UNAVAILABLE
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
            <!-- to show divider except last item -->
            <hr v-if="ALL_PRODUCTS.length - 1 != index">
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import store, { Caret } from '@/store'
export default Vue.extend({
  data () {
    return {
    }
  },
  computed: {
    ALL_PRODUCTS () {
      return store.getters.ALL_PRODUCTS
    }
  },
  mounted () {
    store.dispatch('readAllProducts')
  },
  methods: {
    addToCaret (itemKey: string) {
      store.dispatch('addProductToCaret', { productKey: itemKey, count: 1 } as Caret)
    }
  }
})
</script>

<style scoped>
.store-items__product-image{
    width: 135px;
    height: 130px;
}
h5{
    font-family: 'Blinker', sans-serif;
}
.store-items__add-btn{
    background-color: white;
    padding: 0 3px;
    font-size: 12px;
}
.store-items__unavailable-stamp {
  position: absolute;
  display: inline-block;
  color: #D82B22;
  padding: 0 5px;
  background-color: white;
  box-shadow:inset 0px 0px 0px 2px #D82B22;
  transform: rotate(-10deg);
  top: 40%;
  width: fit-content;
}

.store-items__unavailable-stamp:after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  mix-blend-mode: lighten;
}
.store-items__main-section-container{
  max-height: 80vh;
  overflow-x: auto;
}
</style>
