<script setup>
import SmallFooter from '@/components/templates/small/SmallFooter.vue'
import SmallHeader from '@/components/templates/small/SmallHeader.vue'
</script>

<template>
  <header>
    <SmallHeader />
  </header>
  <main>
    <router-view />
  </main>
  <footer>
    <SmallFooter />
  </footer>
</template>
