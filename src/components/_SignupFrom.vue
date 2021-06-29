<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">id : </label>
      <input id="username" type="text" v-model="username" />
    </div>
    <p v-if="!isUserNameValid">이메일 형식으로 입력하세요</p>
    <div>
      <label for="password">pw : </label>
      <input id="password" type="text" v-model="password" />
    </div>
    <p v-if="!isPasswordValid">
      패스워드는 8자리 이상 숫자와 특수문자 포함해야 합니다.
    </p>
    <div>
      <label for="nickname">nickname : </label>
      <input id="nickname" type="text" v-model="nickname" />
    </div>
    <p v-if="!nickname">
      nickname은 필수 입니다
    </p>
    <button
      :disabled="!isUserNameValid || !isPasswordValid || !nickname"
      type="submit"
    >
      회원가입
    </button>
    <p>{{ logMessage }}</p>
  </form>
</template>

<script>
import { registerUser } from '@/api/index';
import { validateEmail, validatePassword } from '@/utils/validation';

export default {
  data() {
    return {
      username: '',
      password: '',
      nickname: '',
      logMessage: '',
    };
  },
  methods: {
    async submitForm() {
      const userData = {
        username: this.username,
        password: this.password,
        nickname: this.nickname,
      };
      const { data } = await registerUser(userData);
      this.logMessage = `${data.username}님의 가입되었습니다!`;
      this.initForm();
    },
    initForm() {
      this.username = '';
      this.password = '';
      this.nickname = '';
    },
  },
  computed: {
    isUserNameValid() {
      return validateEmail(this.username);
    },
    isPasswordValid() {
      return validatePassword(this.password);
    },
  },
};
</script>

<style lang="scss" scoped></style>
