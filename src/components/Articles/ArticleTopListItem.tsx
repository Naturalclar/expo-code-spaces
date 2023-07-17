import * as React from "react";
import { View, Pressable, StyleSheet, ImageBackground } from "react-native";
import { Row } from "@/components/Utils";
import { Article } from "@/types";
import { Typography } from "../Typography";
import { Colors } from "@/theme/Colors";

type Props = {
  article: Article;
  onPress: (id: string) => void;
};

export const ArticleTopListItem = ({ article, onPress }: Props) => {
  const handlePress = React.useCallback(() => {
    onPress(article.id);
  }, [article.id, onPress]);

  return (
    <Pressable
      style={(state) => [{ opacity: state.pressed ? 0.4 : 1 }]}
      onPress={handlePress}
    >
      <Row style={styles.container}>
        <ImageBackground
          source={{ uri: article.imageUrl }}
          style={styles.image}
        />
        <View style={styles.body}>
          <Typography size={32} weight="bold" color={Colors.white}>
            {article.title}
          </Typography>
          <Typography color={Colors.white}>{article.description}</Typography>
        </View>
      </Row>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  body: { gap: 10, position: "absolute", bottom: 16, left: 16 },
  image: {
    height: 250,
    width: "100%",
  },
  container: {
    gap: 10,
  },
});
