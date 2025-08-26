 <script setup lang="ts">

import {useRouter} from "vue-router";

const router = useRouter();

function linkTo(url: string) {
  window.location.href = url
}

</script>

<template>
  <div class="q-pa-md">
    <q-btn unelevated rounded outline label="Taschenrechner" @click="router.push({ name: 'Calculator' })"/>
    <q-btn disable unelevated round color="primary" icon="card_giftcard" />
    <q-btn unelevated rounded outline label="Store" @click="router.push({ name: 'Store' })"/>
    <q-btn disable unelevated round color="primary" icon="card_giftcard" />
    <q-btn unelevated rounded outline label="Google" @click="linkTo('https://www.google.com/')"/>
    <q-btn disable unelevated round color="primary" icon="card_giftcard" />
    <q-btn unelevated rounded outline label="Wikipedia" @click="linkTo('https://de.wikipedia.org/wiki/')"/>
    <q-btn disable unelevated round color="primary" icon="card_giftcard" />
    <q-btn unelevated rounded outline label="Google Translate" @click="linkTo('https://translate.google.com/')"/>
    <q-btn disable unelevated round color="primary" icon="card_giftcard" />
    <q-btn unelevated rounded outline label="Prozent rechnen" @click="router.push({ name: 'ProzentRechnen' })"/>
    <q-btn disable unelevated round color="primary" icon="card_giftcard" />
    <q-btn unelevated rounded outline label="ZahlenRaten" @click="router.push({ name: 'ZahlenRaten' })"/>
    <q-btn disable unelevated round color="primary" icon="card_giftcard" />
    <br />
    <q-spinner-cube
        class="q-mt-xl"
        color="primary"
        size="50em"
    />
  </div>
</template>

<style scoped>

</style>
