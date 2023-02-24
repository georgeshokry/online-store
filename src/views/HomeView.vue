<template>
  <div class="container">
    <div class="row g-5">
      <div class="col-4 card">
        <store-header />
        <store-items />
      </div>
      <div class="col-4">
        caret here
      </div>
      <div class="col-4">
        inventory here
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import StoreHeader from '@/components/store-sections/StoreHeader.vue'
import StoreItems from '@/components/store-sections/StoreItems.vue'
import Vue from 'vue'

export default Vue.extend({
  components: { StoreHeader, StoreItems },
  data () {
    return {
    }
  },

  methods: {

  }
})
</script>

<style lang="scss" scoped>

</style>
