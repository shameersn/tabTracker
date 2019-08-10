import Api from "@/service/Api";

export default {
  register(credentials) {
    return Api().post("auth/register", credentials);
  }
};
