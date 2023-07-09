import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { Flex } from "@/components/Utils";
import { List } from "@/components/Lists/List";

/**
 * Screen used for Home Tab of the Main Screen
 */
export const HomeScreen = () => {
  return (
    <Flex style={styles.container}>
      <List />
    </Flex>
  );
};

const styles = StyleSheet.create({
  container: {
  },
});
