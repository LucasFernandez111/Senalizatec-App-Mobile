import React from "react";
import Login from "../account/Login.js";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home.js";
import GameContUI from "../pages/GameContUI.js";

const Routes = () => {
  const { Navigator, Screen } = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Login">
        <Screen
          options={{ headerShown: false }}
          name="Login"
          component={Login}
        />
        <Screen options={{ headerShown: false }} name="Home" component={Home} />
        <Screen
          options={{ headerShown: false }}
          name="GameContUI"
          component={GameContUI}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;
