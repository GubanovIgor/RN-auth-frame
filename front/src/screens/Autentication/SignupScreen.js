import React from "react";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import * as yup from "yup";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";

import { AppButton } from "../../components/AppButton";
import { AppText } from "../../components/AppText";
import { THEME } from "../../theme";
import { signup } from "../../store/actions/auth";

export const SignupScreen = () => {
  const dispatch = useDispatch();

  const reviewSchema = yup.object().shape({
    email: yup
      .string()
      .email("Некорректный email")
      .required("Укажите email"),
    password: yup
      .string()
      .min(6, "Минимальная длина пароля 6 символов")
      .required("Укажите пароль"),
    repeatPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Пароли должны совпадать")
      .required("Повторите пароль")
  });

  const signupHandler = values => {
    const { email, password } = values;
    dispatch(signup(email, password));
  };

  return (
    <Formik
      initialValues={{ email: "", password: "", repeatPassword: "" }}
      onSubmit={values => signupHandler(values)}
      validationSchema={reviewSchema}
    >
      {({ handleChange, handleSubmit, values, touched, errors }) => (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.wrapper}>
            <TextInput
              style={styles.textInput}
              placeholder="email"
              placeholderTextColor={THEME.LIGHT_MAIN_COLOR}
              onChangeText={handleChange("email")}
              value={values.email}
            />
            {touched.email && errors.email && (
              <Text style={styles.alertText}>{errors.email}</Text>
            )}
            <TextInput
              style={styles.textInput}
              placeholder="пароль"
              placeholderTextColor={THEME.LIGHT_MAIN_COLOR}
              onChangeText={handleChange("password")}
              value={values.password}
            />
            {touched.password && errors.password && (
              <Text style={styles.alertText}>{errors.password}</Text>
            )}
            <TextInput
              style={styles.textInput}
              placeholder="повторите пароль"
              placeholderTextColor={THEME.LIGHT_MAIN_COLOR}
              onChangeText={handleChange("repeatPassword")}
              value={values.repeatPassword}
            />
            {touched.repeatPassword && errors.repeatPassword && (
              <Text style={styles.alertText}>{errors.repeatPassword}</Text>
            )}

            <AppButton
              style={{ marginTop: 30 }}
              onPress={handleSubmit}
            >
              <AppText text="ЗАРЕГИСТРИРОВАТЬСЯ" />
            </AppButton>
          </View>
        </TouchableWithoutFeedback>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  textInput: {
    width: 270,
    borderBottomWidth: 1,
    borderColor: "#fff",
    marginBottom: 15,
    paddingVertical: 5,

    fontSize: 16,
    textAlign: "center",
    color: "#fff"
  },
  alertText: {
    fontSize: 14,
    color: THEME.DANGER_COLOR,
    marginTop: -10
  }
});
