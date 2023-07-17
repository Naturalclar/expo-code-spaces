import * as React from "react";
import { Text, StyleSheet } from "react-native";

type Props = { weight?: "bold" | "regular" | "light" } & Text["props"];
export const Typography = ({ weight, ...rest }: Props) => {
  return <Text style={[styles[weight]]} {...rest} />;
};

const styles = StyleSheet.create({
  light: {
    fontWeight: "300",
  },
  regular: {
    fontWeight: "400",
  },
  bold: {
    fontWeight: "600",
  },
});
