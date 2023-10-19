import { LOCAL_STORAGE_USER_KEY } from "shared/const/localStorage";
import { create } from "zustand";
import { IUserStore, TUser } from "../types/user";

export const useUserStore = create<IUserStore>((set) => ({
  _initial: false,

  isAuth: false,
  isLoading: false,

  login: "",
  password: "",

  setLogin: (value: string) => set({ login: value }),
  setPassword: (value: string) => set({ password: value }),

  onLogin: async () => {
    set({ isLoading: true });

    try {
      const response: TUser = {};

      localStorage.setItem(LOCAL_STORAGE_USER_KEY, response.token);
      set({ login: "", password: "", isAuth: true });
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
