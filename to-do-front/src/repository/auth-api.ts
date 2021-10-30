import { axiosInit } from "../libs/axios-instance";

const login = async () => {
  const axios = axiosInit();
  await axios.get("/sanctum/csrf-cookie");
  const response = await axios.post("/login", {
    email: "test@example.com",
    password: "password",
  });

  if (response.status !== 200) {
    throw new Error("auth failed");
  }
};

const logout = async () => {
  const axios = axiosInit();
  const response = await axios.post("/logout");
  if (response.status !== 200) {
    throw new Error("logout failed");
  }
};

export { login, logout };
