import React, { useReducer } from "react";
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

import { signin } from "../../store/actions/auth";
import { AppButton } from "../../components/AppButton";
import { AppText } from "../../components/AppText";
import { THEME } from "../../theme";

export const EntryScreen = () => {
  const dispatch = useDispatch();

  const reviewSchema = yup.object().shape({
    email: yup.string().required("Укажите email"),
    password: yup.string().required("Укажите пароль")
  });

  const entryHandler = values => {
    const { email, password } = values;
    dispatch(signin(email, password));
  };

  return (
    <Formik
      initialValues={{ email: "", password: "", repeatPassword: "" }}
      onSubmit={values => entryHandler(values)}
      validationSchema={reviewSchema}
    >
      {({ handleChange, handleSubmit, values, touched, errors, isValid }) => (
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

            <AppButton style={{ marginTop: 30 }} onPress={handleSubmit} disabled={!isValid}>
              <AppText text="ВОЙТИ" />
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
