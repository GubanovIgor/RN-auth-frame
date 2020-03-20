import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AuthNavigator } from "./AuthNavigator";

export const AuthNavigation = () => {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
};
