import React from "react";
import { useDispatch } from "react-redux";
import { View, Text, StyleSheet } from "react-native";

import { THEME } from "../../theme";
import { AppButton } from "../../components/AppButton";
import { logout } from "../../store/actions/auth";

export const MainScreen = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <View style={styles.wrapper}>
      <Text>Main</Text>
      <AppButton onPress={logoutHandler}>
        <Text>LOGOUT</Text>
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
