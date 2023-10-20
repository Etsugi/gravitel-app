export type TUser = {
  username?: string;
  password?: string;
  token: string;
};

export interface IUserStore {
  _initial: boolean;

  isAuth: boolean;
  isLoading: boolean;

  username: string;
  password: string;

  setUsername: (value: string) => void;
  setPassword: (value: string) => void;

  onLogin: () => void;
  onLogout: () => void;

  initAuthData: () => void;
}

export type TUserMutations = {
  login: TUser;
};
