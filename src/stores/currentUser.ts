import { defineStore } from "pinia";
import { Ref, ref } from "vue";
import Default from "../plugins/httpClient.ts";

export interface ICurrentUser {
  username: string;
  id: string;
}

export const useCurrentUserStore = defineStore("currentUserStore", () => {
  const user: Ref<ICurrentUser | null> = ref(null);
  const httpClient = new Default();
  const isInit = ref(false);
  const isInProgress = ref(false);
  async function initUser() {
    isInProgress.value = true;
    await httpClient
      .post("/api/protected/get-current-user/")
      .then((response) => {
        user.value = response.data;
        isInit.value = true;
        isInProgress.value = false;
      })
      .catch((axiosError) => {
        console.log(axiosError);
        isInProgress.value = false;
      });
  }

  return { user, initUser, isInit };
});
