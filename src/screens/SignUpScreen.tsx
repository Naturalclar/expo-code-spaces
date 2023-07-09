import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { Flex } from "@/components/Utils";
import { PrimaryButton } from "@/components/Buttons";
import { useAuth } from "@/contexts/AuthContext";

/**
 * Screen used for signing up
 */
export const SignUpScreen = () => {
  const { setUser } = useAuth();
  const onPressSignUp = React.useCallback(() => {
    setUser({ name: "test user" });
  }, [setUser]);

  return (
    <Flex style={styles.container}>
      <Text>TODO: SignUp Screen</Text>
      <PrimaryButton label="Sign Up" onPress={onPressSignUp} />
    </Flex>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    gap: 20,
  },
});
