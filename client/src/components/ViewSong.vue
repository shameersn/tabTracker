<template>
  <v-container>
    <v-layout text-center wrap>
      <v-flex xs12>
        <v-card class="elevation-12" v-if="song">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title class="app-card-title">Song Details</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn dark icon :to="'/songs/' + song.id + '/edit'">
              <v-icon dark>mdi-pencil</v-icon>
            </v-btn>
          </v-toolbar>
          <v-card-text>
            <v-layout text-left wrap>
              <v-flex xs6>
                <v-card class="mx-auto" max-width="800">
                  <v-img class="white--text" height="300px" :src="song.albumImageUrl">
                    <v-card-title class="align-end fill-height">{{song.title}}</v-card-title>
                  </v-img>

                  <v-card-text>
                    <span>{{song.artist}}</span>
                    <br />
                    <span class="text--primary">
                      <span>{{song.album}}</span>
                      <br />
                      <span>{{song.genre}}</span>
                    </span>
                    <p>{{song.lyrics}}</p>
                    <p>{{song.tab}}</p>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn icon>
                      <v-icon>mdi-delete</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
              <song-youtube :youtubeId="song.youtubeId" />
            </v-layout>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import SongYoutube from "./SongYoutube";
import SongService from "../service/Songs";

export default {
  data: () => ({
    song: null,
    songId: null
  }),
  async mounted() {
    try {
      this.songId = this.$store.state.route.params.songId;
      this.song = (await SongService.get(this.songId)).data;
    } catch (error) {
      // console.log(error)
    }
  },
  components: { SongYoutube }
};
</script>
