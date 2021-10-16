import React from "react";
import styled from "styled-components";

import { Card } from "react-native-elements";

export const CycleCard = styled(Card)`
  backgorund-color: blue;
`.attr({});

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
