import React from "react";

import { SafeArea } from "../../../components/utility/safe-area.component";

import { ActiveCycleCard } from "../components/active-cycle-card.component";

export const ActiveCycles = () => {
  return (
    <SafeArea>
      <ActiveCycleCard />
      <ActiveCycleCard />
      <ActiveCycleCard />
    </SafeArea>
  );
};
