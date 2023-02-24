<template>
    <div class="mt-3 inventory-section__section-container">
        <div v-for="(item, index) in inventoryItems" :key="index" class="row">
            <div class="mb-3">
              <div class="row no-gutters mb-2">
                <!-- product title input -->
                <div class="col">
                  <div class="form-floating">
                    <input class="form-control form-control-sm" v-model="item.title" type="text" id="title" >
                    <label for="title">Title</label>
                  </div>
                </div>
                <!-- price input -->
                <div class="col">
                  <div class="form-floating">
                    <input class="form-control form-control-sm" v-model="item.price" type="number" id="price">
                    <label for="price">Price</label>
                  </div>
                </div>
                <!-- status input -->
                <div class="col">
                  <div class="form-floating">
                    <select class="form-select form-select-sm" v-model="item.status" id="status">
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
                    <textarea class="form-control inventory-section__desc" v-model="item.desc" id="desc"  rows="8" cols="50"></textarea>
                    <label for="desc">Description</label>
                  </div>
              </div>
              <!-- image input -->
              <div class="col">
                  <div class="form-floating">
                    <input class="form-control form-control-sm" v-model="item.image" type="text" id="imageUrl">
                    <label for="imageUrl">Image</label>
                  </div>
              </div>
            </div>
            <hr>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      inventoryItems: [
        {
          image: 'http://uploads.linakis.com/Files/Vue-Dev-Brief/Vue-Dev-Brief-Example-Section1.jpg',
          title: 'product name',
          desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been',
          price: '123',
          status: 'available'
        },
        {
          image: 'http://uploads.linakis.com/Files/Vue-Dev-Brief/Vue-Dev-Brief-Example-Section1.jpg',
          title: 'product name',
          desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been',
          price: '123',
          status: 'unavailable'
        },
        {
          image: 'http://uploads.linakis.com/Files/Vue-Dev-Brief/Vue-Dev-Brief-Example-Section1.jpg',
          title: 'product name',
          desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been',
          price: '123',
          status: 'available'
        },
        {
          image: 'http://uploads.linakis.com/Files/Vue-Dev-Brief/Vue-Dev-Brief-Example-Section1.jpg',
          title: 'product name',
          desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been',
          price: '123',
          status: 'available'
        },
        {
          image: 'http://uploads.linakis.com/Files/Vue-Dev-Brief/Vue-Dev-Brief-Example-Section1.jpg',
          title: 'product name',
          desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been',
          price: '123',
          status: 'available'
        },
        {
          image: 'http://uploads.linakis.com/Files/Vue-Dev-Brief/Vue-Dev-Brief-Example-Section1.jpg',
          title: 'product name',
          desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been',
          price: '123',
          status: 'available'
        },
        {
          image: 'http://uploads.linakis.com/Files/Vue-Dev-Brief/Vue-Dev-Brief-Example-Section1.jpg',
          title: 'product name',
          desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been',
          price: '123',
          status: 'available'
        },
        {
          image: 'http://uploads.linakis.com/Files/Vue-Dev-Brief/Vue-Dev-Brief-Example-Section1.jpg',
          title: 'product name',
          desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been',
          price: '123',
          status: 'available'
        }
      ]
    }
  },

  methods: {

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
