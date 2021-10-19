import React from "react";
import styled from "styled-components";
import { DataTable } from "react-native-paper";

import { Text } from "../../../components/typography/text.component";
import { SafeArea } from "../../../components/utility/safe-area.component";

const ClientContainer = styled.View`
  width: 100%;
  height: 20%;
  background-color: #90be6d;
  justify-content: center;
  align-items: center;
`;

const ClientLetterContainer = styled.View`
  width: 70px;
  height: 70px;
  border-radius: 80px;
  background-color: #f8961e;
  margin: 5px;
  justify-content: center;
  align-items: center;
`;

const ClientLetter = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.h4};
  color: white;
`;

const TableContainer = styled.View`
  flex: 1;
  background-color: white;
`;

export const ActiveCycleDetail = ({ cycl, route }) => {
  const { cycle } = route.params;
  return (
    <SafeArea>
      <ClientContainer>
        <ClientLetterContainer>
          <ClientLetter>{cycle.client[0].toUpperCase()}</ClientLetter>
        </ClientLetterContainer>
        <Text>{cycle.client}</Text>
        <Text variant="label">{`${cycle.start_date} - ${cycle.end_date}`}</Text>
      </ClientContainer>
      <TableContainer>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Item</DataTable.Title>
            <DataTable.Title numeric>Date</DataTable.Title>
            <DataTable.Title numeric>Total</DataTable.Title>
          </DataTable.Header>
          {cycle.charges.map((purchase) => {
            return (
              <DataTable.Row
                onPress={() => {
                  console.log(purchase);
                }}
              >
                <DataTable.Cell>{purchase.name}</DataTable.Cell>
                <DataTable.Cell>{purchase.purchase_date}</DataTable.Cell>
              </DataTable.Row>
            );
          })}
        </DataTable>
      </TableContainer>
    </SafeArea>
  );
};
