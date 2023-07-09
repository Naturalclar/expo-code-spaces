import * as React from "react";
import { View, StyleSheet, ViewProps } from "react-native";

type Props = ViewProps;
export const Flex = ({ style, ...rest }: Props) => {
  return <View style={[styles.default, style]} {...rest} />;
};

const styles = StyleSheet.create({
  default: { flex: 1 },
});
