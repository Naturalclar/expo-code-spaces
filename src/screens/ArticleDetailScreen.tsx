import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { Flex } from "@/components/Utils";

/**
 * Screen used for Article Detail
 */
export const ArticleDetailScreen = () => {
  return (
    <Flex style={styles.container}>
      <Text>TODO: Article Detail Screen</Text>
    </Flex>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
