import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { Flex } from "@/components/Utils";

/**
 * Screen used for MyPage Tab of the Main Screen
 */
export const MyPageScreen = () => {
  return (
    <Flex style={styles.container}>
      <Text>TODO: MyPage Screen</Text>
    </Flex>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
