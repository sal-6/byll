import React from "react";
import styled from "styled-components";

import { Card} from "react-native-paper";


export const CycleCard = styled(Card)`
  width: 95%;
  align-self: center;
  margin: 10px;
  padding: 10px;
  backgroundColor: ${(props) => props.theme.colors.ui.success};
`

export const InfoContainer = styled.View`
  flex-direction: row;
`

export const LeftInfo = styled.View`
  width: 65%;
`;

export const TotalView = styled.View`
  width: 35%;
  align-items: center;
  justify-content:center;
`;
