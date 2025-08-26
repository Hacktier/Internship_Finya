<script setup lang="ts">
import {ref} from "vue";
import {useRouter} from "vue-router";

const router = useRouter();

const number1 = ref(0)
const number2 = ref(0)

const result = ref<number | null>(null)

function prozent(number1: number, number2: number) {
  result.value = number1 /100*number2+number1
}

</script>

<template>
  <div class="q-pa-md">
    <div class="flex flex-center">
      <q-btn unelevated rounded outline label="Zurück" @click="router.push({ name: 'Dashboard' })" class="fixed-top-left q-ma-md"/>
    </div>

  </div>
  <q-layout>
    <q-page-container>
      <q-page class="flex flex-center">
        <div class="column items-center">
          <div class="row q-mb-lg">
            <h3>Das Ergebnis ist: {{ result?.toFixed(2)}}€</h3>
          </div>

          <div class="row q-mb-lg">
            <q-input
                class="q-mr-md"
                outlined
                type="number"
                v-model.number="number1"
                label="zahl "
            />
            <q-input
                class="q-mr-md"
                outlined
                type="number"
                v-model.number="number2"
                label="prozent Trinkgeld"
            />

          </div>



          <q-btn color="primary" @click="prozent(number1, number2)">Berechnen</q-btn>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style scoped>

</style>