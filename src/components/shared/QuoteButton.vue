<template>
  <div class="dice-button" @click="quoteStore.getQuote">
    <img :src="dice">
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useQuoteStore } from '@/store/quote'

const quoteStore = useQuoteStore()

const dice = computed(() => {
  return new URL('../../assets/img/icon-dice.svg',  import.meta.url).href
})

</script>

<style lang="scss" scoped>
  .dice-button {
    background: $neon-green;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin: -25px auto 0 auto;
    display: grid;
    place-content: center;

    &:hover {
      cursor: pointer;
      filter: drop-shadow(0 0 1em $neon-green);
    }

    img {
      color: #fff;
    }
  }
</style>