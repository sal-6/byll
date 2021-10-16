import React from "react";

import styled from "styled-components/native";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { ActiveCycleCard } from "../components/active-cycle-card.component";
import {AddCycleButton} from "../../../components/addCycleButton/add-cycle-button.component"

import { billing_data } from "../../../../testing/proxy_data/billing-data.proxy.js";

const AddCycle = styled(AddCycleButton)`
  position: absolute;
  bottom: 50%;
`

export const ActiveCycles = () => {

  return (
    <SafeArea>
      {billing_data.map((item, i) => {return <ActiveCycleCard key={i} cycle={item}/>})}
      <AddCycle />
    </SafeArea>
  );
};
