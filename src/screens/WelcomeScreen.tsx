import * as React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import {
  PrimaryButton,
  PrimaryButtonOutline,
  InfoButton,
} from "../components/Buttons";
import { noop } from "../utils/noop";
import { Flex, Row } from "../components/Utils";

export const WelcomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Flex>
          <Text>Hello World!</Text>
        </Flex>
        <PrimaryButton label="Sign Up" onPress={noop} />
        <PrimaryButtonOutline label="Log In" onPress={noop} />
        <Row justifyContent="flex-end">
          <InfoButton onPress={noop} />
        </Row>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  container: { padding: 24, flex: 1, gap: 20 },
});
