import { Colors } from "@/theme/Colors";
import * as React from "react";
import { View, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

type Props = {
  onPress: () => void;
};
export const InfoButton = ({ onPress }: Props) => {
  return (
    <View style={styles.container}>
      <Ionicons name="md-information" size={16} color={Colors.primary} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 32,
    height: 32,
    width: 32,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.primary,
  },
});
