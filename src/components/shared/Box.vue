<script setup>
// import { computed } from "vue";
import { onMounted, ref, computed } from 'vue'

import { useQuoteStore } from '@/store/quote'
import LoadingRing from '@/components/ui/LoadingRing.vue'


const quoteStore = useQuoteStore()

const windowWidth = ref(window.innerWidth)

const isMobile = computed(() => windowWidth.value <= 900)
const divider = computed(() => {
  return isMobile.value
    ? new URL('../../assets/img/pattern-divider-mobile.svg',  import.meta.url).href
    : new URL('../../assets/img/pattern-divider-desktop.svg',  import.meta.url).href
})


onMounted(() => {
  quoteStore.getQuote()
  window.onresize = () => { 
    console.log('window.innerWidth: ', window.innerWidth)
    windowWidth.value = window.innerWidth
  }
})

</script>

<template>
  <article class="quote-box">
    <header class="quote-box__header">
      ADVICE #{{ quoteStore.usedQuoteId }}
    </header>
    <div class="quote-box__quote-wrapper">
      <div v-if="!quoteStore.usedQuote">
        <LoadingRing />
      </div>
      <p v-else>"{{ quoteStore.usedQuote }}"</p>

    </div>
    <footer class="quote-box__footer">
      <img :src="divider" alt="Image to divide the quote box">
    </footer>
  </article>
</template>


<style lang="scss" scoped>
  .quote-box {
    display: flex;
    flex-direction: column;
    background: $dark-grayish-blue;
    min-height: 300px;
    max-width: 600px;
    padding: 48px 12px;
    border-radius: 10px;
    font-family: $font-family-default;

    &__header {
      color: $neon-green;
      text-align: center;
    }

    &__quote-wrapper {
      color: #fff;
      margin: auto;
      padding: 24px 0;

      p {
        text-align: center;
        font-size: 18px;
        font-weight: $font-weight-default;
      }
    }

    &__footer {
      text-align: center;
    }

    @media only screen and (min-width: $mobile-screen) {
      padding: 48px;

      &__quote-wrapper {
        p {
          font-size: $font-size-quote;
        }
      }
    }
  }
</style>