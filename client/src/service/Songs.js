import Api from "@/service/Api";

export default {
  get(songId = null) {
    return Api().get(songId ? `song/${songId}` : "song");
  },
  post(song) {
    return Api().post("song", song);
  },
  put(songId, song) {
    return Api().put("song/" + songId, song);
  }
};
