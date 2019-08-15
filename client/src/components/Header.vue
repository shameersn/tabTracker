<template>
  <v-app-bar dark app :color="'primary'">
    <v-toolbar-title class="headline text-uppercase" dark>
      <router-link to="/">
        <span class="logo-title">Tab Tracker</span>
      </router-link>
    </v-toolbar-title>

    <v-spacer></v-spacer>
    <v-btn to="register" color="warning" dark>Register</v-btn>
    <v-btn class="ma-2" to="login" color="warning" dark>Login</v-btn>
  </v-app-bar>
</template>

<script>
export default {};
</script>

<style scoped>
.logo-title {
  cursor: pointer;
  color: #fff;
}
</style>