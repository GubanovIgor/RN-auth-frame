import React from "react";
import { StyleSheet, Image } from "react-native";

export const AppLogo = () => {
  return (
    <Image
      style={styles.image}
      resizeMode="cover"
      source={require("../../assets/logo.png")}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 180,
    height: 90,
    marginBottom: 200
  }
});
