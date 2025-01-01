<template>
  <form @submit.prevent="submit">
    <input-field label="ユーザー名" v-model="username" type="text" />
    <input-field label="パスワード" v-model="password" type="password" />
    <submit-button label="ログイン" />
  </form>
</template>

<script>
import InputField from './InputField.vue';
import SubmitButton from './SubmitButton.vue';

export default {
  components: {
    InputField,
    SubmitButton
  },
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    submit() {
      this.$emit('submit', { username: this.username, password: this.password });
    }
  }
};
</script>
