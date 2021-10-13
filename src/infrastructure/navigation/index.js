import React from "react";
import styled from "styled-components/native";

import { NavigationContainer } from "@react-navigation/native";

import { AppNavigator } from "./app.navigator";

export const Navigation = () => {

    return (
        <NavigationContainer>
            <AppNavigator />
        </NavigationContainer>
    )
}