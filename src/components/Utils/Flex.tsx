import * as React from "react";
import { View, StyleSheet, ViewProps } from "react-native";

type Props = {
  justify?:
    | "justifyCenter"
    | "justifyStart"
    | "justifyEnd"
    | "justifyBetween"
    | "justifyAround"
    | "justifyEvenly";
  items?: "itemsCenter" | "itemsStart" | "itemsEnd";
} & ViewProps;
export const Flex = ({ style, justify, items, ...rest }: Props) => {
  return (
    <View
      style={[styles.default, styles[justify], styles[items], style]}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  default: { flex: 1 },
  justifyCenter: { justifyContent: "center" },
  justifyStart: { justifyContent: "flex-start" },
  justifyEnd: { justifyContent: "flex-end" },
  justifyBetween: { justifyContent: "space-between" },
  justifyAround: { justifyContent: "space-around" },
  justifyEvenly: { justifyContent: "space-evenly" },
  itemsCenter: { alignItems: "center" },
  itemsEnd: { alignItems: "flex-end" },
  itemsStart: { alignItems: "flex-start" },
});
