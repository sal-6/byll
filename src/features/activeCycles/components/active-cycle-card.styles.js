import React from "react";
import styled from "styled-components";

import { Card} from "react-native-paper";


export const CycleCard = styled(Card)`
  width: 95%;
  align-self: center;
  margin: 10px;
  padding: 10px;
  backgroundColor: ${(props) => props.theme.colors.brand.primary};
`

export const InfoContainer = styled.View`
  flex-direction: row;
`

export const LeftInfo = styled.View`
  width: 50%;
`;

export const TotalView = styled.View`
  width: 50%;
  align-items: center;
  justify-content:center;
`;
