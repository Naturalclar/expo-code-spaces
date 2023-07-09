import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { Flex } from "@/components/Utils";

/**
 * Screen used for logging in to already existing account
 */
export const LoginScreen = () => {
  return (
    <Flex style={styles.container}>
      <Text>TODO: Login Screen</Text>
    </Flex>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
