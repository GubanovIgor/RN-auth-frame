import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { MainScreen } from "../../screens/App/MainScreen";
import { defaultOptions } from "./defaultOptions";

const App = createStackNavigator();

export const AppNavigator = () => {
  return (
    <App.Navigator screenOptions={defaultOptions}>
      <App.Screen
        name="MainScreen"
        component={MainScreen}
        options={{ title: false }}
      />
    </App.Navigator>
  );
};