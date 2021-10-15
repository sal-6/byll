import React from "react";

import { CycleCard, Info } from "./active-cycle-card.styles";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { Text } from "../../../components/typography/text.component";

export const ActiveCycleCard = ({ cycle = {} }) => {
  const {
    client = "Some Client",
    start_date = "09/01/2021",
    end_date = "09/31/2021",
    tax_rate = 0.06,
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
      },
    ],
  } = cycle;

  return (
    <CycleCard>
      <CycleCard.Title>{client}</CycleCard.Title>
      <CycleCard.Divider />
      <Info>
        <Text>{start_date + " - " + end_date}</Text>
      </Info>
    </CycleCard>
  );
};
