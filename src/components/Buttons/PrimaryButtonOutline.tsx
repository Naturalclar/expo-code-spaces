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
    padding: 16,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.primary,
    borderRadius: 10,
  },
  text: {
    color: Colors.primary,
    fontWeight: "600",
  },
});
