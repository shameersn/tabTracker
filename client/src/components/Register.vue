<template>
  <div class="register">
    <h1>Register</h1>
    <input type="email" name="email" id="email" v-model="email" />
    <input type="password" name="password" id="password" v-model="password" />
    <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from "../service/Authentication";
export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    async register() {
      const result = await AuthenticationService.register({
        email,
        password
      });

      console.log(result);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
