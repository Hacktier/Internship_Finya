<script setup lang="ts">
import {ref} from "vue";

const number1 = ref(0)
const number2 = ref(0)
const operator = ref('+')
const operatorOptions = ['+', '-', '/', 'X', 'rest']

const result = ref<number | null>(null)

function calculate() {
  switch (operator.value) {

    case '+':
      add(number1.value, number2.value)
      break
    case '/':
      division(number1.value, number2.value)
      break
    case '-':
      subtract(number1.value, number2.value)
      break
    case 'X':
      multiplicate(number1.value, number2.value)
      break
    case 'rest':
      rest(number1.value, number2.value)
  }
}
  // if (operator.value === '+') {
  //   add(number1.value, number2.value)
  // }
  //
  // if (operator.value === '/') {
  //   division(number1.value, number2.value)
  // }
  //
  // if (operator.value === '-') {
  //   subtract(number1.value, number2.value)
  // }
  //
  // if (operator.value === 'x') {
  //   multiplicate(number1.value, number2.value)
  // }
  // if (operator.value === 'rest') {
  //   rest(number1.value, number2.value)
  // }


function rest(number1: number, number2: number) {
  let temp = number1

  while (temp >= number2) {
    temp = temp - number2
  }
  result.value = temp

  // result.value = number1 % number2  ist das gleiche
}

function multiplicate(number1: number, number2: number) {
  result.value = number1 * number2
}

function subtract(number1: number, number2: number) {
  result.value = number1 - number2
}

function division(number1: number, number2: number) {
  result.value = number1 / number2
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
  width: 150px;
}
</style>
