import React from "react";
import { View, TouchableOpacity} from "react-native";
import styled from "styled-components";

import { Text } from "../typography/text.component";
import { Entypo } from '@expo/vector-icons';

const Button = styled(TouchableOpacity)`
    width: 80px;
    height: 80px;
    border-radius: 100px;
    background-color: #138000;
    justify-content: center;
    align-items: center;
`

export const AddCycleButton = ({onPress}) => {
    return (
        <Button onPress={onPress}>
            <Entypo name="plus" size={24} color="black" size={50} color="grey"/>
        </Button>
    )
}