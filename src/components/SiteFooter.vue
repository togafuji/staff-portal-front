<template>
  <footer class="bg-gray-700 text-white text-2xl text-center py-4 w-full">
    <div class="container mx-auto">
      <p>togasaki.inc © {{ currentYear }}</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TimeFooters',
  data() {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>
