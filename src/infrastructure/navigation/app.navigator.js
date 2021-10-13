import React from "react";

import { SafeArea } from "../../components/utility/safe-area.component";
import {Text} from "../../components/typography/text.component"

import styled from "styled-components";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Ionicons} from "@expo/vector-icons"

const FullView = styled.View`
    flex: 1;
    width: 100%;
    background-color: red;
`

// TODO: create actual home page
export const Home = () => {

    return (
        <SafeArea>
            <FullView>
                <Text>
                    Home
                </Text>
            </FullView>
        </SafeArea>
    )
}

// TODO: create actual settings page
export const Settings = () => {

    return (
        <SafeArea>
            <FullView>
                <Text>
                    Settings
                </Text>
            </FullView>
        </SafeArea>
    )
}

// TODO: Select tab icons
const TAB_ICONS = {
    Home: "md-home",
    Settings: "md-settings"
}

// TODO: updaate styles for things
const tabOptions = ({route}) => ({
    tabBarIcon: ({color, size}) => {
        let iconName;
        iconName = TAB_ICONS[route.name];
        
        return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
    headerShown: false
})

const Tab = createBottomTabNavigator();

export const AppNavigator = () => {

    return (
        <Tab.Navigator
            screenOptions={tabOptions}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
    )
}