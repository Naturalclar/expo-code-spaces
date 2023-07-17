import * as React from "react";
import { FlatList, StyleSheet } from "react-native";
import { noop } from "@/utils/noop";
import { Colors } from "@/theme/Colors";
import { Article } from "@/types";
import { ArticleListItem } from "./ArticleListItem";

type Props = {
  data: Article[];
};
export const ArticleList = ({ data }: Props) => {
  return (
    <FlatList
      data={data}
      style={styles.container}
      renderItem={({ item }) => (
        <ArticleListItem article={item} onPress={noop} />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  },
});
