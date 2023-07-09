import * as React from "react";
import { StyleSheet } from "react-native";
import { Flex } from "@/components/Utils";
import { List } from "@/components/Lists/List";

/**
 * Screen used for Notification on Top Right
 */
export const NotificationScreen = () => {
  return (
    <Flex style={styles.container}>
      <List />
    </Flex>
  );
};

const styles = StyleSheet.create({
  container: {},
});
