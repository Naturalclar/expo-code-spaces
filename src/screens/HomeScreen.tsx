import * as React from "react";
import { Flex } from "@/components/Utils";
import { List } from "@/components/Lists/List";
import { useQuery } from "@tanstack/react-query";
import * as api from '@/apis'
import { LoadingScreen } from "@/components/Templates/LoadingScreen";

/**
 * Screen used for Home Tab of the Main Screen
 */
export const HomeScreen = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["articles"],
    queryFn: () => api.fetchArticles()
  })

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <Flex >
      <List data={data.data} />
    </Flex>
  );
};

