import React from "react";

import { View } from "react-native";

import { CycleCard, InfoContainer, LeftInfo, TotalView } from "./active-cycle-card.styles";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { Text } from "../../../components/typography/text.component";

export const ActiveCycleCard = ({ cycle = {} }) => {
  const {
    client = "Some Client",
    start_date = "09/01/2021",
    end_date = "09/31/2021",
    charges = [
      {
        name: "Some Item",
        base_price_per_unit: 200.0,
        discounts: [
          {
            name: "Some Discount",
            amount: 5.07,
            is_per_unit: true,
            description: "N/A",
          },
        ],
        extra_charges: [
          {
              name: "Expedited Fee",
              amount: 1.99,
              is_per_unit: false,
              description: "N/A"
          }
        ],
        purchase_date: "09/06/2021",
        quantity: 5 
      },
    ],
  } = cycle;

  const calculateTotal = (charges) => {
    let tot = 0;
    for (const charge of charges){
      let cost = charge.base_price_per_unit * charge.quantity;
      let addition = 0;
      let subtraction = 0;
      for (const extra of charge.extra_charges){
        if (extra.is_per_unit){
          addition += extra.amount * charge.quantity;
        } else {
          addition += extra.amount
        }
      }
      for (const deduction of charge.discounts){
        if (deduction.is_per_unit){
          subtraction += deduction.amount * charge.quantity;
        } else {
          subtraction += deduction.amount;
        }
      }
      tot += cost + addition - subtraction;
    }
    return tot;
  }

  const total = calculateTotal(charges);
  console.log(total)

  return (
    <CycleCard>
      <InfoContainer>
      <LeftInfo>
        <Text>{start_date + " - " + end_date}</Text>
        <Text>{client}</Text>
      </LeftInfo>
      <TotalView>
        <Text>{"$" + total}</Text>
      </TotalView>
      </InfoContainer>
    </CycleCard>
  );
};
