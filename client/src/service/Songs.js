import Api from "@/service/Api";

export default {
  get(songId = null, search = "") {
    return Api().get(songId ? `song/${songId}` : "song", {
      params: {
        search
      }
    });
  },
  post(song) {
    return Api().post("song", song);
  },
  put(songId, song) {
    return Api().put("song/" + songId, song);
  }
};
