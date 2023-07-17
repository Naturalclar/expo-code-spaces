import * as React from "react";
import { StyleSheet } from "react-native";
import { Flex } from "@/components/Utils";
import { List } from "@/components/Lists/List";
import { LoadingScreen } from "@/components/Templates/LoadingScreen";
import * as api from "@/apis";
import { useQuery } from "@tanstack/react-query";

/**
 * Screen used for Notification on Top Right
 */
export const NotificationScreen = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["articles"],
    queryFn: () => api.fetchNotifications(),
  });

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Flex style={styles.container}>
      <List data={data.data} />
    </Flex>
  );
};

const styles = StyleSheet.create({
  container: {},
});
