<script setup lang="ts">
import {ref} from "vue";
import {useRouter} from "vue-router";


const router = useRouter();
const result = ref<number | null>(null)
const number1 = ref(0)
const number2 = ref(0)
const winner = ref('')

function getWinner() {
  const min = 1;
  const max = 100;
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  result.value = randomNumber

  const eins = randomNumber - number1.value
  const zwei = randomNumber - number2.value

  if (Math.abs(eins) < Math.abs(zwei)) {
    winner.value = '1'
    return
  }

  if (Math.abs(eins) === Math.abs(zwei)) {
    winner.value = '1/2'
    return
  }


  winner.value = '2'
}

</script>

<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex flex-center">
        <q-btn unelevated rounded outline label="Zurück" @click="router.push({ name: 'Dashboard' })"
               class="fixed-top-left q-ma-md"/>
        <div class="column items-center">
          <div class="column q-mb-lg">
            <span class="text-h3">Die Zahl ist: {{ result }}</span>
            <h5>Spieler {{ winner }} hat gewonnen!</h5>
          </div>

          <div class="row q-mb-lg">
            <q-input
                class="q-mr-md"
                outlined
                type="number"
                v-model.number="number1"
                label="zahl1"
                :rules="[value => value > 0 && value <= 100 ||'Wert muss größer als 0 und kleiner gleich 100 sein']"
            />
            <q-input
                class="q-mr-md"
                outlined
                type="number"
                v-model.number="number2"
                label="zahl2"
                :rules="[value => value > 0 && value <= 100 ||'Wert muss größer als 0 und kleiner gleich 100 sein']"
            />
          </div>

          <q-btn
              color="primary"
              @click="getWinner"
              :disable="(number1 < 1 || number2 < 1) || (number1 > 100 || number2 > 100)"
              label="Start"
          />
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style scoped>

</style>