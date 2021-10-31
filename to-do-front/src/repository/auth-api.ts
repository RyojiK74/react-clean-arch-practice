import { axiosInit } from "../libs/axios-instance";
import { loginInputType } from "../usecase/auth/loginInputType";

const login = async ({ email, password }: loginInputType) => {
  const axios = axiosInit();
  await axios.get("/sanctum/csrf-cookie");
  const response = await axios.post("/login", {
    email,
    password,
  });

  if (response.status !== 200) {
    throw new Error("auth failed");
  }
};

const logout = async () => {
  const axios = axiosInit();
  const response = await axios.get("/logout");
  if (response.status !== 200) {
    throw new Error("logout failed");
  }
};

export { login, logout };
