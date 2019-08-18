<template>
  <div>
    <v-text-field
      :clearable="true"
      :flat="true"
      :full-width="true"
      v-model="search"
      placeholder="Search songs by title, artist and genre"
      prepend-inner-icon="mdi-magnify"
      hide-details
      single-line
    ></v-text-field>
  </div>
</template>

<script>
import debounce from "lodash.debounce";

export default {
  data: () => ({
    search: ""
  }),
  watch: {
    search: debounce(async function() {
      const route = {
        name: "songs"
      };
      if (this.search !== "") {
        route.query = {
          search: this.search
        };
      }
      this.$router.push(route);
    }, 400),
    "$route.query.search": {
      immediate: true,
      handler(value) {
        this.search = value;
      }
    }
  }
};
</script>
