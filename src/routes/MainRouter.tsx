import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Colors } from "@/theme/Colors";
import { Row } from "@/components/Utils";
import { MyPageScreen } from "@/screens/MyPageScreen";
import { HomeTab } from "./HomeTab";
import { useNavigation } from "@react-navigation/native";
import { NotificationScreen } from "@/screens/NotificationScreen";
import { SearchScreen } from "@/screens/SearchScreen";
import {
  ChartIcon,
  HomeIcon,
  NotificationIcon,
  RecordIcon,
  SearchIcon,
  UserIcon,
} from "@/components/Icons";
import { HomeScreen } from "@/screens/HomeScreen";
import { MyPageRouter } from "./MyPageRouter";

const Stack = createNativeStackNavigator();

/**
 * Routing for Post-Login Screens
 */
export const MainRouter = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        presentation: "modal",
      }}
    >
      <Stack.Screen
        name="Main"
        options={{ headerShown: false }}
        component={MainTab}
      />
      <Stack.Screen
        name="Notification"
        component={NotificationScreen}
        options={({ navigation }) => ({
          headerRight: () => <Text onPress={navigation.goBack}>Cancel</Text>,
        })}
      />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={({ navigation }) => ({
          headerRight: () => <Text onPress={navigation.goBack}>Cancel</Text>,
        })}
      />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

type FIXME = any;

const MainTab = () => {
  const navigation = useNavigation<FIXME>();
  const handlePressNotification = React.useCallback(() => {
    navigation.navigate("Notification");
  }, [navigation]);
  const handlePressSearch = React.useCallback(() => {
    navigation.navigate("Search");
  }, [navigation]);

  const headerRight = React.useCallback(() => {
    return (
      <Row style={styles.rightOptions}>
        <Pressable onPress={handlePressSearch}>
          <SearchIcon size={24} color={Colors.black} />
        </Pressable>
        <Pressable onPress={handlePressNotification}>
          <NotificationIcon size={24} color={Colors.black} />
        </Pressable>
      </Row>
    );
  }, [handlePressNotification, handlePressSearch]);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeTab}
        options={{
          tabBarIcon: ({ color, size }) => (
            <HomeIcon color={color} size={size} />
          ),
          headerRight,
        }}
      />
      <Tab.Screen
        name="Data"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <ChartIcon color={color} size={size} />
          ),
          headerRight,
        }}
      />
      <Tab.Screen
        name="Record"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <RecordIcon color={color} size={size} />
          ),
          headerRight,
        }}
      />
      <Tab.Screen
        name="MyPage"
        component={MyPageRouter}
        options={{
          tabBarIcon: ({ color, size }) => (
            <UserIcon color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  rightOptions: {
    gap: 20,
    marginRight: 20,
  },
});
