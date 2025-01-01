<template>
  <div>
    <label>{{ label }}</label>
    <input :type="type" :value="value" @input="updateValue($event.target.value)" />
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    value: String,
    type: String
  },
  emits: ['update:value'],
  setup(props, { emit }) {
    const updateValue = (value) => {
      emit('update:value', value);
    };

    return { updateValue };
  }
};
</script>
