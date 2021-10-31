import Axios from "axios";

import { login } from "../../repository/auth-api";
import { loginInputType } from "./loginInputType";

const loginUseCase = async ({ email, password }: loginInputType) => {
  try {
    await login({
      email,
      password,
    });
  } catch (e) {
    if (Axios.isAxiosError(e)) {
      throw new Error(e.message);
    }
    throw new Error("unknown error occured in login " + e);
  }
};

export { loginUseCase };
