import { USER_LOGIN } from "entities/User/model/mutations/userMutations";
import { apolloClient } from "shared/api/apollo";
import { LOCAL_STORAGE_USER_KEY } from "shared/const/localStorage";
import { create } from "zustand";
import { IUserStore, TUserMutations } from "../types/user";

export const useUserStore = create<IUserStore>((set, get) => ({
  _initial: false,

  isAuth: false,
  isLoading: false,

  username: "",
  password: "",

  setUsername: (value: string) => set({ username: value }),
  setPassword: (value: string) => set({ password: value }),

  onLogin: async () => {
    set({ isLoading: true });

    try {
      const { data } = await apolloClient.mutate<TUserMutations>({
        mutation: USER_LOGIN,
        variables: {
          username: get().username,
          password: get().password,
        },
      });

      if (data?.login.token) {
        localStorage.setItem(LOCAL_STORAGE_USER_KEY, data?.login.token);
        set({ username: "", password: "", isAuth: true });
      }
    } catch (error: unknown) {
      console.error(error);
    }

    set({ isLoading: false });
  },

  onLogout: () => {
    set({ isAuth: false });
    localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
  },

  initAuthData: () => {
    const token = localStorage.getItem(LOCAL_STORAGE_USER_KEY);

    if (token) {
      set({ isAuth: true });
    }

    set({ _initial: true });
  },
}));
