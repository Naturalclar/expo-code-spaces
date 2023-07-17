import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { TermsScreen } from "@/screens/TermsScreen";
import { PolicyScreen } from "@/screens/PolicyScreen";
import { MyPageScreen } from "@/screens/MyPageScreen";
import { Colors } from "@/theme/Colors";

const Stack = createNativeStackNavigator();

/**
 * Routing for MyPage Screens
 */
export const MyPageRouter = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTintColor: Colors.black,
      }}
    >
      <Stack.Screen name="MyPage" component={MyPageScreen} />
      <Stack.Screen name="Terms" component={TermsScreen} />
      <Stack.Screen name="Policy" component={PolicyScreen} />
    </Stack.Navigator>
  );
};
