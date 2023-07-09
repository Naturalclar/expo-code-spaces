import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { Pressable, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcon from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcon from "@expo/vector-icons/MaterialIcons";
import { Colors } from "@/theme/Colors";
import { Row } from "@/components/Utils";
import { MyPageScreen } from "@/screens/MyPageScreen";
import { HomeTab } from "./HomeTab";
import { useNavigation } from "@react-navigation/native";

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
      />
      <Stack.Screen
        name="Notification"
        component={MyPageScreen}
      />
      <Stack.Screen
        name="Search"
        component={MyPageScreen}
      />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

type FIXME = any

const MainTab = () => {

  const navigation = useNavigation<FIXME>()
  const handlePressNotification = React.useCallback(()=>{navigation.navigate('Notification')},[navigation])
  const handlePressSearch = React.useCallback(()=>{navigation.navigate('Search')},[navigation])

  React.useEffect(()=>{
    navigation.setOptions({
      headerRight: () => {
        return (
          <Row style={styles.rightOptions}>
            <Pressable onPress={handlePressSearch}>
            <MaterialIcon name="search" size={24} color={Colors.black} />
            </Pressable>
            <Pressable onPress={handlePressNotification}>
            <MaterialCommunityIcon
              name="bell-outline"
              size={24}
              color={Colors.black}
            />
            </Pressable>
          </Row>
        );
      },
    })
  },[navigation, handlePressNotification])

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
