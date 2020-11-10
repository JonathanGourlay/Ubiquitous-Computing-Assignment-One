
import React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";

// Card displayed on the home page that contains a covid update
const CovidCard = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {props.item.title}
            </Text>
            <Text style={styles.item}>
                {props.item.text}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#cc1b1b',
        flex: 0.3,
        marginTop: 10,
        width: Dimensions.get('window').width - 10,
        borderRadius: 5,
    },
    item: {
        backgroundColor: '#cc1b1b',
        padding: 5,
        marginVertical: 4,
        marginHorizontal: 8,
        textAlign: "center",
    },
    title: {
        fontSize: 16,
        textAlign: "center",
        fontWeight: 'bold'
    },
});

export default CovidCard;