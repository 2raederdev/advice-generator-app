<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Box from '@/components/shared/Box.vue'
import Footer from '@/components/ui/Footer.vue'
import QuoteButton from '@/components/shared/QuoteButton.vue'
</script>

<template>
  <div class="layout">
    <!-- <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a> -->
    <Box />
    <QuoteButton />
  </div>
  <Footer />
</template>

<style lang="scss">

.logo {
  height: $height;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

@font-face {
  font-family: Manrope;
  font-display: swap;
  font-weight: 800;
  src: url('@/assets/fonts/Manrope-ExtraBold.ttf');
}
</style>
