<script setup lang="ts">
import axios from "axios";
import {computed, ref} from "vue";
import {useRouter} from "vue-router";

const router = useRouter();

const number2 = ref(0)
const product = ref<productType | null>(null)
const ratingColors = ref([ 'red-8', 'orange-6', 'lime-6', 'light-green-6', 'green-8' ])
const roundedRating = computed( () => {
  if (product.value) {
    return Math.round(product.value.rating.rate)
  }
})

interface productResponseType {
  data: productType
}

interface productType {
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    count: number
    rate: number
  }
}

function getProduct(irgendwas:number) {
 console.log(irgendwas)
  axios.get<productResponseType>('https://fakestoreapi.com/products/' +irgendwas)
      .then(response => product.value = response.data)
}

</script>

<template>
  <div class="q-pa-md">
    <div class="flex flex-center">
      <q-btn unelevated rounded outline label="Zurück" @click="router.push({ name: 'Dashboard' })" class="fixed-top-left q-ma-md"/>

      <q-btn color="primary" @click="getProduct(number2)">Suchen</q-btn>
    </div>

    <q-input
        autofocus
        class="q-mt-md"
        outlined
        type="number"
        v-model.number="number2"
        label="Suche"
    />

    <div class="q-pa-md flex flex-center">

      <q-card v-if="product">
        <img :src="product.image">

        <q-card-section>
          <div class="text-h6">{{ product.title }}</div>
          <strong>{{ product.price }}€</strong>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ product.category }}
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ product.description }}
        </q-card-section>
        -section>

        <q-card-section class="q-pt-none">
          {{ product.rating.rate }}
          <q-rating
              class='something'
              v-model="roundedRating"
              :max="5"
              size="1.758em"
              color="grey"
              :color-selected="ratingColors"
              readonly
          />

          ({{ product.rating.count}} Bewertungen)
        </q-card-section>
      </q-card>
    </div>

  </div>

</template>

<style>
img, .q-card {
  max-width: 350px;
}

.something{
  //background-color:black;
}

</style>


