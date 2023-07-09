import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { WelcomeScreen } from "../screens/WelcomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();

/**
 * Routing for Post-Login Screens
 */
export const MainRouter = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={MainTab}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={WelcomeScreen} />
      <Tab.Screen name="MyPage" component={WelcomeScreen} />
    </Tab.Navigator>
  );
};
