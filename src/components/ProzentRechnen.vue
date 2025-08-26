<script setup lang="ts">
import {ref} from "vue";

const number1 = ref(0)
const number2 = ref(0)
const operator = ref('+')

if (operator.value === '+') {
  add(number1.value, number2.value)
 }

</script>

<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex flex-center">
        <div class="column items-center">
          <div class="row q-mb-lg">
            <h3>Dein Ergebnis ist: {{ result }}</h3>
          </div>

          <div class="row q-mb-lg">
            <q-input
                class="q-mr-md"
                outlined
                type="number"
                v-model.number="number1"
                label="Zahl "
            />
            <q-input
                class="q-mr-md"
                outlined
                type="number"
                v-model.number="number2"
                label="prozent mehr"
            />
            <q-input
                outlined
                type="number"
                v-model.number="zwischenErgebnis"
                label="zwischen Ergebnis"
            />
          </div>



          <q-btn color="primary" @click="calculate">Berechnen</q-btn>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style scoped>

</style>