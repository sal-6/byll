import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { ActiveCycles } from "../../features/activeCycles/screens/active-cycles.screen";
import { ActiveCycleDetail } from "../../features/activeCycles/screens/active-cycle-detail.screen";

const ActiveCyclesStack = createStackNavigator();

export const ActiveCyclesNavigator = () => {
  return (
    <ActiveCyclesStack.Navigator headerMode="none">
      <ActiveCyclesStack.Screen
        name="Active Cycles List"
        component={ActiveCycles}
      />
      <ActiveCyclesStack.Screen
        name="Active Cycle Detail"
        component={ActiveCycleDetail}
      />
    </ActiveCyclesStack.Navigator>
  );
};
