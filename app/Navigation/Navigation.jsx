import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SearchBarComp from "../Components/SearchBar";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
    NavigationContainer,
} from "@react-navigation/native";
import { HomePage, SettingsPage, MapPage } from "../Screens/Index";
import { ThemeSwitch } from "../Scripts/SetTheme";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { navigationRef } from "./NavigationRef";
import themeOptions from '../Themes/ThemesObjects';

const Tab = createMaterialBottomTabNavigator();

export default Navigation = () => {
    let themeSwitch = ThemeSwitch.useContainer();

    return (
        <NavigationContainer theme={themeSwitch.theme === "dark" ? themeOptions.light_theme : themeOptions.dark_theme} ref={navigationRef} >
            <StatusBar
                style={themeSwitch.theme === "dark" ? "dark" : "light"}
                hidden={false}
                backgroundColor={themeSwitch.theme === "dark" ? themeOptions.light_theme.background : themeOptions.dark_theme.background}
                translucent={true}
            ></StatusBar>
            <SearchBarComp />
            <Tab.Navigator
                initialRouteName="Home"
                activeColor={themeSwitch.theme === "dark" ? themeOptions.light_theme.primary_colour : themeOptions.dark_theme.primary_colour}
                inactiveColor={themeSwitch.theme === "dark" ? themeOptions.light_theme.secondary_colour : themeOptions.dark_theme.secondary_colour}
                shifting={true}
                barStyle={{ backgroundColor: themeSwitch.theme === "dark" ? themeOptions.light_theme.background : themeOptions.dark_theme.background }}
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
        </NavigationContainer>
    )
}