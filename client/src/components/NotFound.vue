<template>
  <v-container>
    <v-layout text-center wrap>
      <v-flex xs12>
        <v-toolbar-title>Not Found</v-toolbar-title>
      </v-flex>
      <v-flex xs12 mb-5>
        <v-layout justify-center>
          <router-link to="/">Home</router-link>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({})
};
</script>
