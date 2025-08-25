<script setup lang="ts">

import {useRouter} from "vue-router";

const router = useRouter();

</script>

<template>
  <q-btn
      class="cursor-pointer q-my-lg"
      @click="router.push({ name: 'Explanation' })"
  >
    Explanation
  </q-btn>
</template>

<style scoped>

</style>
