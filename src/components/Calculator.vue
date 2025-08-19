<script setup lang="ts">
import {ref} from "vue";

const number1 = ref(0)
const number2 = ref(0)
const operator = ref('+')
const operatorOptions = ['+', '-']

const result = ref<number | null>(null)

function calculate() {
  if (operator.value === '+') {
    add(number1.value, number2.value)
    return
  }

  alert("Dieser Operator muss noch gebaut werden.")
}

function add(number1: number, number2: number) {
  result.value = number1 + number2
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
                label="Zahl 1"
            />
            <q-select
                class="q-mr-md"
                outlined
                v-model="operator"
                :options="operatorOptions"
            />
            <q-input
                outlined
                type="number"
                v-model.number="number2"
                label="Zahl 2"
            />
          </div>

          <q-btn color="primary" @click="calculate">Berechnen</q-btn>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style scoped>
.q-select {
  width: 75px;
}
</style>
