import React from "react";

import styled from "styled-components/native";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { ActiveCycleCard } from "../components/active-cycle-card.component";
import { AddCycleButton } from "../../../components/addCycleButton/add-cycle-button.component";

import { billing_data } from "../../../../testing/proxy_data/billing-data.proxy.js";
import { TouchableOpacity } from "react-native";


const AddCycleContainer = styled.View`
  position: absolute;
  bottom: 4%;
  right: 8%;
`



export const ActiveCycles = () => {

  const onAddStyle = () => {
    console.log("Add Cycle");
  }

  return (
    <SafeArea>
      {billing_data.map((item, i) => {return (
        <TouchableOpacity onPress={() => {console.log("Hi")}}>
        <ActiveCycleCard key={i} cycle={item}/>
        </TouchableOpacity>
      )})}
      <AddCycleContainer>
        <AddCycleButton onPress={onAddStyle}/>
      </AddCycleContainer>
      
    </SafeArea>
  );
};
