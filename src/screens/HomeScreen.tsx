import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { Flex } from "@/components/Utils";

/**
 * Screen used for Home Tab of the Main Screen
 */
export const HomeScreen = () => {
  return (
    <Flex style={styles.container}>
      <Text>TODO: Home Screen</Text>
    </Flex>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
