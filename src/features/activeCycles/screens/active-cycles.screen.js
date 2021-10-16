import React from "react";

import { SafeArea } from "../../../components/utility/safe-area.component";

import { ActiveCycleCard } from "../components/active-cycle-card.component";

import {billing_data} from "../../../../testing/proxy_data/billing-data.proxy.js";

export const ActiveCycles = () => {
  console.log(billing_data)
  return (
    <SafeArea>
      {billing_data.map((item) => {return <ActiveCycleCard cycle={item}/>})}
    </SafeArea>
  );
};
