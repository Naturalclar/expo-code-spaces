import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcon from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcon from "@expo/vector-icons/MaterialIcons";
import { Colors } from "@/theme/Colors";
import { Row } from "@/components/Utils";
import { MyPageScreen } from "@/screens/MyPageScreen";
import { HomeTab } from "./HomeTab";

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
        options={{
          headerRight: () => {
            return (
              <Row style={styles.rightOptions}>
                <MaterialIcon name="search" size={24} color={Colors.black} />
                <MaterialCommunityIcon
                  name="bell-outline"
                  size={24}
                  color={Colors.black}
                />
              </Row>
            );
          },
        }}
      />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeTab} />
      <Tab.Screen name="Data" component={MyPageScreen} />
      <Tab.Screen name="Record" component={MyPageScreen} />
      <Tab.Screen name="MyPage" component={MyPageScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  rightOptions: {
    gap: 20,
  },
});
