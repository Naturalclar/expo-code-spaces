import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { Pressable, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Colors } from "@/theme/Colors";
import { Row } from "@/components/Utils";
import { MyPageScreen } from "@/screens/MyPageScreen";
import { HomeTab } from "./HomeTab";
import { useNavigation } from "@react-navigation/native";
import { NotificationScreen } from "@/screens/NotificationScreen";
import { SearchScreen } from "@/screens/SearchScreen";
import { ChartIcon, HomeIcon, NotificationIcon, RecordIcon, SearchIcon, UserIcon } from "@/components/Icons";

const Stack = createNativeStackNavigator();

/**
 * Routing for Post-Login Screens
 */
export const MainRouter = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={MainTab} />
      <Stack.Screen name="Notification" component={NotificationScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
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

  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
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
      },
    });
  }, [navigation, handlePressNotification]);

  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: Colors.primary }}>
      <Tab.Screen name="Home" component={HomeTab}
        options={{
          tabBarIcon: ({ color, size }) => (<HomeIcon color={color} size={size} />)
        }}
      />
      <Tab.Screen name="Data" component={MyPageScreen}
        options={{
          tabBarIcon: ({ color, size }) => (<ChartIcon color={color} size={size} />)
        }}
      />
      <Tab.Screen name="Record" component={MyPageScreen}
        options={{
          tabBarIcon: ({ color, size }) => (<RecordIcon color={color} size={size} />)
        }}
      />
      <Tab.Screen name="MyPage" component={MyPageScreen}
        options={{
          tabBarIcon: ({ color, size }) => (<UserIcon color={color} size={size} />)
        }} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  rightOptions: {
    gap: 20,
  },
});
