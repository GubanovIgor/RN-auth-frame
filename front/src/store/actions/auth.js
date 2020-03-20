import { LOGIN, LOGOUT, LOADING } from "../types";
import * as SecureStore from "expo-secure-store";
import { Alert } from "react-native";

import { Http } from "../../http";
import { isAuth } from "../../utils/auth";

export const signin = (email, password) => async dispatch => {
  const resp = await isAuth(email, password);

  if (resp.status) {
    SecureStore.setItemAsync("lexicon", JSON.stringify({ email, password }));
    dispatch({
      type: LOGIN
    });
  } else {
    Alert.alert(
      "Извините",
      resp.message,
      [
        {
          text: "Ok",
          style: "cancel"
        }
      ],
      { cancelable: false }
    );
  }
};

export const logout = () => async dispatch => {
  dispatch({
    type: LOGOUT
  });

  await SecureStore.deleteItemAsync("lexicon");
};

export const signup = (email, password) => async dispatch => {
  const resp = await Http.post("http://192.168.1.66:3000/auth/signup", {
    email,
    password
  });

  if (resp.status) {
    SecureStore.setItemAsync("lexicon", JSON.stringify({ email, password }));
    dispatch({
      type: LOGIN
    });
  } else {
    Alert.alert(
      "Извините",
      resp.message,
      [
        {
          text: "Ok",
          style: "cancel"
        }
      ],
      { cancelable: false }
    );
  }
};

export const autoSignin = () => async dispatch => {
  const userData = JSON.parse(await SecureStore.getItemAsync("lexicon"));

  if (!userData) {
    dispatch({
      type: LOADING
    });
  } else {
    const resp = await isAuth(userData.email, userData.password);

    if (resp) {
      dispatch({
        type: LOGIN
      });
    } else {
      dispatch({
        type: LOADING
      });
    }
  }
};
