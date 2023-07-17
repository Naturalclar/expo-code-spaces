import * as React from "react";
import { Text, Image, Pressable, StyleSheet } from "react-native";
import { Row, Flex } from "@/components/Utils";
import { Article } from "@/types";

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
        <Image source={{ uri: article.imageUrl }} style={styles.image} />
        <Flex>
          <Text>{article.title}</Text>
          <Text>{article.description}</Text>
        </Flex>
      </Row>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 50,
    width: 50,
    borderRadius: 10,
  },
  container: {
    padding: 12,
    gap: 10,
  },
});
