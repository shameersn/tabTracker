<template>
  <v-flex xs6>
    <v-card mx-auto>
      <youtube :video-id="youtubeId" player-width="100%"></youtube>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  data: () => ({}),
  props: ["youtubeId"]
};
</script>
