import * as React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { HomeScreen } from "@/screens/HomeScreen";

const Tab = createMaterialTopTabNavigator();

export const HomeTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Service 1" component={HomeScreen} />
      <Tab.Screen name="Service 2" component={HomeScreen} />
    </Tab.Navigator>
  );
};
