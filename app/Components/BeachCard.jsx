import React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";

// Beach cards displayed on the homescreen
const BeachCard = (props) => {
    return (
        <View style={styles.container} onTouchEnd={() => {
            props.onPress();
        }}>
            <Text style={styles.title}>
                {props.beach.title}
            </Text>
            <Text style={styles.item}>
                {props.beach.text}
            </Text>
        </View>
    );
}

// Beach cards displayed in the search bar
export const SmallBeachCard = (props) => {
    return (
        <View style={styles.small_container} onTouchEnd={() => {
            props.onPress();
        }}>
            <Text style={styles.small_title}>
                {props.beach.title}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#737373',
        flex: 0.3,
        marginTop: 10,
        width: Dimensions.get('window').width - 10,
        borderRadius: 5
    },
    item: {
        backgroundColor: '#737373',
        padding: 10,
        marginVertical: 4,
        marginHorizontal: 8,
    },
    title: {
        fontSize: 16,
        textAlign: "center",
    },
    small_container: {
        backgroundColor: '#737373',
        flex: 1,
        marginTop: 5,
        width: Dimensions.get('window').width - 10,
        padding: 15,
        borderRadius: 5
    },
    small_item: {
        backgroundColor: '#737373',
        padding: 10,
        marginVertical: 4,
        marginHorizontal: 8,
    },
    small_title: {
        fontSize: 12,
        textAlign: "center",
    },
});

export default BeachCard;