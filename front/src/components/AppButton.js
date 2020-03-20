import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { THEME } from "../theme";

export const AppButton = ({ children, style, onPress, disabled }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ ...styles.default, ...style }}
      disabled={disabled}
    >
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  default: {
    backgroundColor: THEME.MAIN_COLOR,
    borderColor: "#fff",
    borderRadius: 10,

    minWidth: 150,
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: "center"
  }
});
