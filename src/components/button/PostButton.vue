<!-- src/components/button/PostButton.vue -->
<template>
  <button :class="buttonClass" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PostButton',
  props: {
    type: {
      type: String,
      required: true // 'preview', 'back', 'submit' など
    },
    onClick: {
      type: Function,
      required: false
    }
  },
  computed: {
    buttonClass() {
      switch (this.type) {
        case 'preview':
          return 'px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600'
        case 'back':
          return 'px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400'
        case 'submit':
          return 'px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600'
        default:
          return 'px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600'
      }
    }
  },
  methods: {
    handleClick() {
      if (this.onClick) {
        this.onClick()
      }
    }
  }
})
</script>

<style scoped>
button {
  transition: background-color 0.3s;
}
</style>
