import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import React from "react";
import { HomePage, SettingsPage, MapPage } from "../Screens/Index";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";


const Tab = createMaterialBottomTabNavigator();

const Tabs = () => {

    return (

        <Tab.Navigator
            initialRouteName="Home"
            activeColor="black"
            inactiveColor="yellow"
            shifting={true}
        >
            <Tab.Screen
                name="Home"
                component={HomePage}
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />

            <Tab.Screen
                name="Settings"
                component={SettingsPage}
                options={{
                    tabBarLabel: "Settings",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="settings"
                            color={color}
                            size={26}
                        />
                    ),
                }}
            />

            <Tab.Screen
                name="Map"
                component={MapPage}
                options={{
                    tabBarLabel: "Map",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="map" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs;