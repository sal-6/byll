import React from "react";

import { SafeArea } from "../../components/utility/safe-area.component";
import {Text} from "../../components/typography/text.component"

import styled from "styled-components";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Ionicons} from "@expo/vector-icons"

import { ActiveCycles } from "../../features/activeCycles/screens/active-cycles.screen";


// TODO: [BYLL-5] create actual home page
export const Home = () => {

    return (
        <SafeArea>
            <Text>
                Home
            </Text>
        </SafeArea>
    )
}

// TODO: [BYLL-6] create actual settings page
export const Settings = () => {

    return (
        <SafeArea>
            <Text>
                Settings
            </Text>
        </SafeArea>
    )
}

// TODO: [BYLL-3] Select tab icons
const TAB_ICONS = {
    Home: "md-home",
    "Active Cycles": "md-cash",
    Settings: "md-settings"
}

// TODO: [BYLL-4] updaate styles for things
const tabOptions = ({route}) => ({
    tabBarIcon: ({color, size}) => {
        let iconName;
        iconName = TAB_ICONS[route.name];
        
        return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: "#138000",
    tabBarInactiveTintColor: 'gray',
    headerShown: false
})

const Tab = createBottomTabNavigator();

// TODO: [BYLL-7] create other tabs
export const AppNavigator = () => {

    return (
        <Tab.Navigator
            screenOptions={tabOptions}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Active Cycles" component={ActiveCycles} />
            <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
    )
}