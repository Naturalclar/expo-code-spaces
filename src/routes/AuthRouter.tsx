import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { WelcomeScreen } from "../screens/WelcomeScreen";
import { SignUpScreen } from "@/screens/SignUpScreen";
import { LoginScreen } from "../screens/LoginScreen";

const Stack = createNativeStackNavigator();

/**
 * Routing for Pre-Login Screens
 */
export const AuthRouter = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};
