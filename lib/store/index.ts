import { getUserInfo } from "service.ts/request";
import { create } from "zustand";
import { UserInfo } from "../interface";

interface PilotStoreInterface {
  userInfo?: UserInfo;
  authToken?: string;

  setUserInfo: (userInfo: UserInfo) => void;
  setAuthToken: (token?: string) => void;
  fetchUserInfo: () => Promise<void>;
}

export const usePilotStore = create<PilotStoreInterface>()((set, get) => ({
  setUserInfo: (userInfo) => {
    set({
      userInfo: userInfo,
    });
  },
  setAuthToken: (token) => {
    set({
      authToken: token,
    });
  },
  fetchUserInfo: async () => {
    const { authToken } = get();
    if (!authToken) {
      return;
    }
    try {
      const res = await getUserInfo({});
      set({
        userInfo: res.data,
      });
    } catch (error) {}
  },
}));
