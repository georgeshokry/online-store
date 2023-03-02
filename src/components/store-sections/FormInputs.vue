<template>
    <div class="mb-3">
        <div class="row no-gutters mb-2">
        <!-- product title input -->
        <div class="col">
            <div class="form-floating">
            <input class="form-control form-control-sm" v-model="inventoryItems.title" type="text" id="title" @change="changeFormValue()">
            <label for="title">Title</label>
            </div>
        </div>
        <!-- price input -->
        <div class="col">
            <div class="form-floating">
            <input class="form-control form-control-sm" v-model="inventoryItems.price" type="number" id="price"  @change="changeFormValue()">
            <label for="price">Price</label>
            </div>
        </div>
        <!-- status input -->
        <div class="col">
            <div class="form-floating">
            <select class="form-select form-select-sm" v-model="inventoryItems.status" id="status" @change="changeFormValue()">
                <option>available</option>
                <option>unavailable</option>
            </select>
            <label for="status">Status</label>
            </div>
        </div>
        </div>
        <!-- desc inpu -->
        <div class="col mb-3">
            <div class="form-floating">
            <textarea class="form-control inventory-section__desc" v-model="inventoryItems.desc" id="desc"  rows="8" cols="50" @change="changeFormValue()"></textarea>
            <label for="desc">Description</label>
            </div>
        </div>
        <!-- image input -->
        <div class="col">
            <div class="form-floating">
            <input class="form-control form-control-sm" v-model="inventoryItems.image" type="text" id="imageUrl" @change="changeFormValue()">
            <label for="imageUrl">Image</label>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Product } from '@/store'

export default Vue.extend({
  props: {
    productItem: {
      type: Object as ()=> Product,
      required: true,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
      inventoryItems: {} as ()=> Product
    }
  },
  watch: {
    productItem: {
      handler (newVal) {
        this.inventoryItems = newVal
      },
      immediate: true
    }
  },
  methods: {

    changeFormValue () {
      this.$emit('assignNewValues', this.inventoryItems)
    }
  }
})
</script>
