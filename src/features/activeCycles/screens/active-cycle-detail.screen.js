import React from "react";
import { Text } from "../../../components/typography/text.component";
import { SafeArea } from "../../../components/utility/safe-area.component";

export const ActiveCycleDetail = ({ cycl, route }) => {
  const { cycle } = route.params;
  console.log(cycle);
  return (
    <SafeArea>
      <Text>{cycle.client}</Text>
      <Text>{`${cycle.start_date} - ${cycle.end_date}`}</Text>
    </SafeArea>
  );
};
