<template>
  <div>
    <h3 class="text-lg font-semibold mb-2">添付ファイル</h3>
    <ul>
      <li v-for="(file, index) in files" :key="index" class="mb-1">
        <a :href="file.url" target="_blank" class="text-blue-500 hover:underline">
          {{ file.name }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AttachmentPreview',
  props: {
    files: {
      type: Array,
      default: () => []
    }
  }
})
</script>
