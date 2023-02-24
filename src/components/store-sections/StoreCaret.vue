<template>
    <div class="mt-3 store-caret__main-section-container">
        <div v-for="(item, index) in caretItems" :key="index" class="row">
            <div class="mb-3" style="max-width: 540px;">
                <div class="position-relative">
                    <div class="d-flex justify-content-between">
                       {{item.count}} X <h5 class="card-title">{{item.title}}</h5> <div>${{item.price}}</div>
                    </div>
                </div>
            </div>
            <hr>
        </div>
        <div class="d-flex justify-content-between">
            <h5 class="card-title">Total</h5><div>$1564512</div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      caretItems: [
        {
          id: '123',
          count: 1
        },
        {
          id: '36',
          count: 3
        }
      ]
    }
  },

  methods: {

  }
})
</script>

<style scoped>
.store-caret__main-section-container{
  max-height: 90vh;
  overflow-x: auto;
}
</style>
