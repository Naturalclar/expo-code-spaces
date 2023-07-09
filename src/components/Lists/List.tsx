import * as React from "react";
import { FlatList, StyleSheet } from "react-native";
import { ListItem } from "./ListItem";
import { noop } from "@/utils/noop";
import { Colors } from "@/theme/Colors";


type Data = {
  id: string
  title: string;
  description: string;
  imageUrl: string;
};

const imageUrl =
  "https://images.unsplash.com/photo-1687292478056-80a089e0b8b6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4ODg5MTc2Mw&ixlib=rb-4.0.3&q=80&w=300";

const sampleDatas = [...Array(6)].map((_, index) => ({
  id: `${index}`,
  title: `Sample Title ${index}`,
  description: `Sample description ${index}.`,
  imageUrl,
}));

type Props = {
  data?: Data[];
};
export const List = ({ data = sampleDatas }: Props) => {
  return (
    <FlatList
      data={data}
      style={styles.container}
      renderItem={({ item }) => (
        <ListItem
          id={item.id}
          title={item.title}
          description={item.description}
          imageUrl={item.imageUrl}
          onPress={noop}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white
    }
})