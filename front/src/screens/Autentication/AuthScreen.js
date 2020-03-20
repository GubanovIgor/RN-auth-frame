import React from "react";
import { View, StyleSheet } from "react-native";

import { AppButton } from "../../components/AppButton";
import { AppText } from "../../components/AppText";
import { AppLogo } from "../../components/AppLogo";
import { THEME } from "../../theme";

export const AuthScreen = ({ navigation }) => {
  const entryScreenHandler = () => {
    navigation.navigate("EntryScreen");
  };

  const signupScreenScreenHandler = () => {
    navigation.navigate("SignupScreen");
  };

  return (
    <View style={styles.wrapper}>
      <AppLogo/>
      <AppButton style={{ marginBottom: 10 }} onPress={entryScreenHandler}>
        <AppText text="ВХОД" />
      </AppButton>
      <AppButton onPress={signupScreenScreenHandler}>
        <AppText text="РЕГИСТРАЦИЯ" />
      </AppButton>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: THEME.MAIN_COLOR
  }
});
