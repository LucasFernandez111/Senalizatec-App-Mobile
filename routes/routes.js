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
      <Navigator initialRouteName="Home">
        <Screen name="Login" component={Login} />
        <Screen name="Home" component={Home} />
        <Screen name="GameContUI" component={GameContUI} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;
