import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { Text, View } from "react-native";
import { WelcomeScreen } from "../screens/WelcomeScreen";

const Stack = createNativeStackNavigator();

export const RootRouter = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
    </Stack.Navigator>
  );
};
