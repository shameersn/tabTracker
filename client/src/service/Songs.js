import Api from "@/service/Api";

export default {
  get() {
    return Api().get("song");
  },
  post(song) {
    return Api().post("song", song);
  }
};
