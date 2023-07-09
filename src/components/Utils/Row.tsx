import * as React from "react";
import { View, StyleSheet, type ViewProps, type FlexStyle } from "react-native";

type Props = {
  justifyContent?: FlexStyle["justifyContent"];
} & ViewProps;
export const Row = ({ style, justifyContent, ...rest }: Props) => {
  return <View style={[styles.default, { justifyContent }, style]} {...rest} />;
};

const styles = StyleSheet.create({
  default: { flexDirection: "row" },
});
