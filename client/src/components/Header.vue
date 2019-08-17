<template>
  <v-app-bar dark app :color="'primary'">
    <v-toolbar-title class="headline text-uppercase" dark>
      <router-link to="/">
        <span class="logo-title">Tab Tracker</span>
      </router-link>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn to="/songs" text>Browse</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-btn v-if="!$store.state.isLoggedIn" to="/register" color="warning" dark>Register</v-btn>
    <v-btn v-if="!$store.state.isLoggedIn" class="ma-2" to="/login" color="warning" dark>Login</v-btn>
    <v-btn v-if="$store.state.isLoggedIn" class="ma-2" @click="logout" color="warning" dark>Logout</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("seTuser", null);

      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
.logo-title {
  cursor: pointer;
  color: #fff;
  margin-right: 16px;
}
</style>