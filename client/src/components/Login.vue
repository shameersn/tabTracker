
<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-form>
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Login</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-text-field
                  label="Email"
                  name="email"
                  prepend-icon="mdi-email"
                  type="email"
                  v-model="email"
                  required
                  :rules="emailRules"
                ></v-text-field>

                <v-text-field
                  id="password"
                  label="Password"
                  name="password"
                  prepend-icon="mdi-lock"
                  type="password"
                  required
                  v-model="password"
                  :rules="passWordRules"
                ></v-text-field>
              </v-card-text>
              <v-footer v-if="error">
                <div style="color: red">{{error}}</div>
              </v-footer>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="login">login</v-btn>
              </v-card-actions>
            </v-card>
          </v-form>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import AuthenticationService from "@/service/Authentication";
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    email: "",
    password: "",
    error: null,
    passWordRules: [
      v => !!v || "Password is required",
      v => v.length <= 6 || "Password must be less than 6 characters"
    ],
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ]
  }),
  methods: {
    async login() {
      try {
        const { data } = await AuthenticationService.login({
          email: this.email,
          password: this.password
        });

        this.$store.dispatch("setToken", data.token);
        this.$store.dispatch("setUser", data.user);
      } catch (error) {
        this.error = error.response.data.message;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
