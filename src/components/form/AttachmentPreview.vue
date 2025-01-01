<template>
  <div class="attachment-preview">
    <div v-if="files.length">
      <div v-for="(file, index) in files" :key="index">
        <div v-if="isImage(file)" class="image-preview">
          <img :src="URL.createObjectURL(file)" class="w-20 h-20 object-cover" />
        </div>
        <div v-else class="file-preview">
          <span>{{ file.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    files: Array
  },
  methods: {
    isImage(file) {
      return file.type.startsWith('image')
    }
  }
}
</script>
