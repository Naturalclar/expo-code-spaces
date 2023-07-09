import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { Flex } from "@/components/Utils";
import { useAuth } from "@/contexts/AuthContext";
import { PrimaryButton } from "@/components/Buttons";

/**
 * Screen used for MyPage Tab of the Main Screen
 */
export const MyPageScreen = () => {
  const { setUser } = useAuth();
  const onPressLogOut = React.useCallback(() => {
    setUser(null);
  }, [setUser]);

  return (
    <Flex style={styles.container}>
      <Text>TODO: MyPage Screen</Text>
      <PrimaryButton label="Log Out" onPress={onPressLogOut} />
    </Flex>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    gap: 20,
  },
});
