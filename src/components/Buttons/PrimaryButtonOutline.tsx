import * as React from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";
import { Colors } from "../../theme/Colors";

type Props = {
  onPress: () => void;
  label: string;
};
export const PrimaryButtonOutline = ({ onPress, label }: Props) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 24,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.primary,
    borderRadius: 50,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    color: Colors.primary,
    fontWeight: "600",
  },
});
