<script setup lang="ts">
import {ref} from "vue";

const lul = ref('')
const result = ref('test')

function ifTest() {
  if (lul.value === 1) {
      result.value = 'Hallo'
    return
  }

  if (lul.value === 2) {
    result.value = ':)'
    return
  }

  result.value = 'Welt'
}

function switchTest() {
  switch (lul.value) {
    case '1': result.value = 'Hallo'
      break
    case '2':  result.value = ':)'
      break
    case 'wtf': result.value = ';)'
      break
    default:
      result.value = lul.value
  }
}

</script>

<template>
  <h3>
    {{ result }}
  </h3>
  <q-input
      class="q-mr-md"
      outlined
      v-model="lul"
      label="Hans Wurstz"
  />


  <q-btn color="primary" @click="switchTest">test</q-btn>

</template>

<style scoped>

</style>