import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { WelcomeScreen } from "../screens/WelcomeScreen";

const Stack = createNativeStackNavigator();

/**
 * Routing for Pre-Login Screens
 */
export const AuthRouter = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
    </Stack.Navigator>
  );
};
