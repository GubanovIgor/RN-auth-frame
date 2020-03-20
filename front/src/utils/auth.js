import { Http } from "../http";

export const isAuth = (email, password) => {
  return Http.post("http://192.168.1.66:3000/auth/signin", {
    email,
    password
  });
};
