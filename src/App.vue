<template>
  <div id="app" class="min-h-screen w-full flex flex-col">
    <SiteHeader />
    <main class="flex-grow">
      <!-- メインコンテンツをここに追加 -->
    </main>
    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from '@/components/SiteHeader.vue'
import SiteFooter from '@/components/SiteFooter.vue'

export default {
  components: {
    SiteHeader,
    SiteFooter
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0;
}
</style>
