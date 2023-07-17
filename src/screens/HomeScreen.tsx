import * as React from "react";
import { Flex } from "@/components/Utils";
import { useQuery } from "@tanstack/react-query";
import * as api from "@/apis";
import { LoadingScreen } from "@/components/Templates/LoadingScreen";
import { ArticleList } from "@/components/Articles/ArticleList";

/**
 * Screen used for Home Tab of the Main Screen
 */
export const HomeScreen = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["articles"],
    queryFn: () => api.fetchArticles(),
  });

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Flex>
      <ArticleList data={data.data} />
    </Flex>
  );
};
