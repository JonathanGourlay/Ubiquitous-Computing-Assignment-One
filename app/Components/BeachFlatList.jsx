import BeachList from '../Scripts/api';
import BeachCard from './BeachCard';
import React from "react";
import { StyleSheet, FlatList, Text } from "react-native";
import Region from '../Scripts/SetMap';
import * as NavigationRef from '../Navigation/NavigationRef';
import { DistanceChecker } from "../Scripts/CalculateDistance";
import { userLocation } from "../Scripts/GetCurrentLocation";
import themeOptions from '../Themes/ThemesObjects';
import { ThemeSwitch } from '../Scripts/SetTheme';

const BeachRenderList = () => {
    let [currentCoords, setMapCoords] = React.useState();
    let region = Region.useContainer();
    let themeSwitch = ThemeSwitch.useContainer();

    // This function can take a moment to run to stop the empty list from trying to render null is returned
    userLocation(setMapCoords);
    if (currentCoords === undefined) {
        return null;

    }
    let beachDistances = [];

    // Loop through the list of beaches and spread the distance onto it
    BeachList.map((beach) => {
        beachDistances.push({
            ...beach,
            distance: DistanceChecker(currentCoords.latitude, beach.latLng.latitude, currentCoords.longitude, beach.latLng.longitude)
        })
    })
    // Sort through the list of beaches to return the 5 closest beaches
    let closestBeaches = beachDistances.sort((beachOne, beachTwo) => {
        // return negative if one is less than two
        // return zero if equal
        // return positive if one is greater than two
        //
        if (beachOne.distance < beachTwo.distance) return -1;
        if (beachOne.distance > beachTwo.distance) return 1;
        else return 0;
    })
        .slice(0, 5);

    return (
        <React.Fragment>
            <Text
                style={{
                    fontWeight: 'bold',
                    fontSize: 20,
                    color: themeSwitch.theme === "dark" ? themeOptions.light_theme.text : themeOptions.dark_theme.text,
                }}
            >Closest Beaches To You</Text>
            <FlatList
                style={styles.container}
                horizontal={false}
                data={closestBeaches}
                renderItem={({ item }) => {
                    return (<BeachCard
                        beach={item}
                        key={item.id}
                        onPress={() => {
                            region.setMapCoords({
                                ...region.mapCoords,
                                latitude: item.latLng.latitude,
                                longitude: item.latLng.longitude
                            });
                            NavigationRef.navigate("Map", [])
                        }}
                    />);
                }}
                keyExtractor={item => item.id}
            />
        </React.Fragment>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
    },

});

export default BeachRenderList;