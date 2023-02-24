<template>
  <div class="container">
    <div class="row">
      <div class="col-xl-5 col-lg-12 col-md-12 col-sm-12 card">
        <store-header />
        <store-items />
      </div>
      <div class="col-xl-2 col-lg-12 col-md-12 col-sm-12 card">
        <caret-header />
        <store-caret />
      </div>
      <div class="col-xl-5 col-lg-12 col-md-12 col-sm-12 card">
        <inventory-header />
        <inventory-section />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import StoreCaret from '@/components/store-sections/StoreCaret.vue'
import StoreHeader from '@/components/store-headers/StoreHeader.vue'
import StoreItems from '@/components/store-sections/StoreItems.vue'
import CaretHeader from '@/components/store-headers/CaretHeader.vue'
import Vue from 'vue'
import InventorySection from '@/components/store-sections/InventorySection.vue'
import InventoryHeader from '@/components/store-headers/InventoryHeader.vue'

export default Vue.extend({
  components: { StoreHeader, StoreItems, StoreCaret, CaretHeader, InventorySection, InventoryHeader },
  data () {
    return {
    }
  },

  methods: {

  }
})
</script>

<style scoped>

</style>
