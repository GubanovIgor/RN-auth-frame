import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { AuthScreen } from "../../screens/Autentication/AuthScreen";
import { EntryScreen } from "../../screens/Autentication/EntryScreen";
import { SignupScreen } from "../../screens/Autentication/SignupScreen";
import { defaultOptions } from "./defaultOptions";

const Auth = createStackNavigator();

export const AuthNavigator = () => {
  return (
    <Auth.Navigator screenOptions={defaultOptions}>
      <Auth.Screen
        name="AuthScreen"
        component={AuthScreen}
        options={{ title: false }}
      />
      <Auth.Screen
        name="EntryScreen"
        component={EntryScreen}
        options={{ title: false }}
      />
      <Auth.Screen
        name="SignupScreen"
        component={SignupScreen}
        options={{ title: false }}
      />
    </Auth.Navigator>
  );
};
