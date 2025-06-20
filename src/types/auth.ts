export type UserReceiveData = {
  user: {
    name: string;
    email: string;
  };
  token: string;
};

export type UserRefreshData = Omit<UserReceiveData, "token">;

export type UserRegisterData = {
  name: string;
  email: string;
  password: string;
};

export type UserLogInData = Omit<UserRegisterData, "name">;
