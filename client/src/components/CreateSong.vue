<template>
  <v-container>
    <v-row text-center wrap justify="center">
      <v-col xs="12" md="9">
        <v-card class="elevation-12">
          <v-form>
            <v-toolbar color="primary" dark flat>
              <v-toolbar-title class="app-card-title">Create Song</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-text-field
                label="Title"
                name="title"
                v-model="song.title"
                :rules="requiredRules"
                required
              ></v-text-field>
              <v-text-field
                label="Artist"
                name="artist"
                v-model="song.artist"
                :rules="requiredRules"
                required
              ></v-text-field>
              <v-text-field
                label="Genre"
                name="genre"
                v-model="song.genre"
                :rules="requiredRules"
                required
              ></v-text-field>
              <v-text-field
                label="Album"
                name="album"
                v-model="song.album"
                :rules="requiredRules"
                required
              ></v-text-field>
              <v-text-field
                label="Album Image Url"
                name="albumImageUrl"
                v-model="song.albumImageUrl"
                :rules="requiredRules"
                required
              ></v-text-field>
              <v-text-field
                label="Youtube Id"
                name="youtubeId"
                v-model="song.youtubeId"
                :rules="requiredRules"
                required
              ></v-text-field>
              <v-textarea required name="lyrics" label="Lyrics" v-model="song.lyrics"></v-textarea>
              <v-textarea required name="tab" label="Tab" v-model="song.tab"></v-textarea>
            </v-card-text>
            <v-footer v-if="error">
              <div style="color: red">{{error}}</div>
            </v-footer>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" @click="createSong">Create Song</v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style >
</style>
<script>
import SongService from "../service/Songs";
export default {
  data: () => ({
    song: {
      title: null,
      artist: null,
      genre: null,
      album: null,
      albumImageUrl: null,
      youtubeId: null,
      lyrics: null,
      tab: null
    },
    error: null,
    requiredRules: [v => !!v || "This field is required"]
  }),
  methods: {
    async createSong() {
      try {
        await SongService.post(this.song);

        this.$router.push("/songs");
      } catch (err) {
        this.error = "Error";
      }
    }
  },
  async mounted() {}
};
</script>
