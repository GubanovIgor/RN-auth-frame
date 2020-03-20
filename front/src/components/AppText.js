import React from "react";
import { Text, StyleSheet } from "react-native";
import { THEME } from "../theme";

export const AppText = ({ text, style }) => {
  return <Text style={{ ...styles.default, ...style }}>{text}</Text>;
};

const styles = StyleSheet.create({
  default: {
    color: THEME.TURQUOISE_COLOR,
    fontFamily: 'Roboto-medium'
  }
});
