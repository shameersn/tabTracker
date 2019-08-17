<template>
  <v-container>
    <v-layout text-center wrap>
      <v-flex xs12>
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title class="app-card-title">Songs</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn dark icon to="/songs/create">
              <v-icon dark>mdi-plus</v-icon>
            </v-btn>
          </v-toolbar>
          <v-card-text>
            <v-layout text-left wrap>
              <v-flex xs12 md6 v-for="song in songs" :key="song.id">
                <v-card class="mx-auto" max-width="400">
                  <v-img class="white--text" height="200px" :src="song.albumImageUrl">
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
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn icon>
                      <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                    <v-btn icon>
                      <v-icon>mdi-delete</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style >
.app-card-title {
  text-transform: uppercase;
}
</style>
<script>
import SongService from "../service/Songs";
export default {
  data: () => ({
    songs: null
  }),
  async mounted() {
    try {
      this.songs = (await SongService.get()).data;
    } catch (error) {
      // console.log(error)
    }
  }
};
</script>
