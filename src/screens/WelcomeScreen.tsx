import * as React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { PrimaryButton } from "../components/Buttons/PrimaryButton";
import { noop } from "../utils/noop";
import { PrimaryButtonOutline } from "../components/Buttons/PrimaryButtonOutline";
import { Flex } from "../components/Utils/Flex";

export const WelcomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Flex>
          <Text>Hello World!</Text>
        </Flex>
        <PrimaryButton label="Sign Up" onPress={noop} />
        <PrimaryButtonOutline label="Log In" onPress={noop} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  container: { padding: 24, flex: 1, gap: 20 },
});
