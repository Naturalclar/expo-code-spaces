import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { Flex } from "@/components/Utils";
import { PrimaryButton } from "@/components/Buttons";
import { useAuth } from "@/hooks/useAuth";

/**
 * Screen used for MyPage Tab of the Main Screen
 */
export const MyPageScreen = () => {
  const { logout } = useAuth()

  return (
    <Flex style={styles.container}>
      <Text>TODO: MyPage Screen</Text>
      <PrimaryButton label="Log Out" onPress={logout} />
    </Flex>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    gap: 20,
  },
});
