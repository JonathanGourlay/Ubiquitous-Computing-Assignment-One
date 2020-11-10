import React from "react";
import { Text, View, Modal, StyleSheet } from "react-native";
import { ThemeSwitch, ColourSwitch } from '../Scripts/SetTheme';
import themeOptions from '../Themes/ThemesObjects';



// Modal that contains information about the tapped on beach
export const BeachInfoModal = ({ beach, visible, setModalVisible }) => {
    let colourSwitch = ColourSwitch.useContainer();
    let themeSwitch = ThemeSwitch.useContainer();

    // set the colour depending on the congestion type's colour
    const switchCongestionType = (beachCongestion) => {
        if (beachCongestion === "Low") {
            return (colourSwitch.pickedColour.low);
        }
        if (beachCongestion === "Med") {
            return (colourSwitch.pickedColour.medium);
        }
        if (beachCongestion === "High") {
            return (colourSwitch.pickedColour.high);
        } else {
            return ("#ef00f7");
        }
    };

    return (
        <Modal visible={visible}
            animationType="slide"
            transparent={true}
        >
            <View style={{
                margin: 20,
                backgroundColor: themeSwitch.theme === "dark" ? themeOptions.light_theme.background : themeOptions.dark_theme.background,
                borderRadius: 20,
                padding: 35,
                alignItems: "center",
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
                flex: 0.5,
                marginTop: 100,

            }}>
                <View style={styles.container} >
                    <Text style={{
                        color: themeSwitch.theme === "dark" ? themeOptions.light_theme.text : themeOptions.dark_theme.text, alignSelf: 'center',
                        fontSize: 25,
                        fontWeight: 'bold'
                    }}>
                        {beach.title}
                    </Text>
                    <Text style={{
                        color: themeSwitch.theme === "dark" ? themeOptions.light_theme.text : themeOptions.dark_theme.text, alignSelf: 'center',
                        fontSize: 20,
                        fontWeight: 'bold'
                    }}>Congestion -{">"} {beach.congestion} </Text>
                    <View
                        style={{ backgroundColor: switchCongestionType(beach.congestion), height: 50, width: 50, alignSelf: 'center' }}
                    />
                    <Text style={{
                        color: themeSwitch.theme === "dark" ? themeOptions.light_theme.text : themeOptions.dark_theme.text, alignSelf: 'center',
                        fontSize: 20,
                        fontWeight: 'bold'
                    }}>
                        Lifeguarded: {beach.cardInfo.Lifeguarded}
                    </Text>
                    <Text style={{
                        color: themeSwitch.theme === "dark" ? themeOptions.light_theme.text : themeOptions.dark_theme.text, alignSelf: 'center',
                        fontSize: 20,
                        fontWeight: 'bold'
                    }}>
                        Public Toilets: {beach.cardInfo.PublicToilets}
                    </Text>
                    <Text style={{
                        color: themeSwitch.theme === "dark" ? themeOptions.light_theme.text : themeOptions.dark_theme.text, alignSelf: 'center',
                        fontSize: 20,
                        fontWeight: 'bold'
                    }}>
                        Dogs may exercise: {beach.cardInfo.DogsMayExercise}
                    </Text>
                    <Text style={{
                        color: themeSwitch.theme === "dark" ? themeOptions.light_theme.text : themeOptions.dark_theme.text, alignSelf: 'center',
                        fontSize: 20,
                        fontWeight: 'bold'
                    }}>
                        Cycling Permited: {beach.cardInfo.CyclingPermited}
                    </Text>
                    <Text style={{
                        color: themeSwitch.theme === "dark" ? themeOptions.light_theme.text : themeOptions.dark_theme.text, alignSelf: 'center',
                        fontSize: 20,
                        fontWeight: 'bold'
                    }}>
                        BBQs: {beach.cardInfo.BBQs}
                    </Text>
                </View>

                <Text style={themeSwitch.theme === "dark" ? styles.light_label : styles.dark_label}
                    onPress={() => {
                        setModalVisible(false);
                    }}
                >Back to Map</Text>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    dark_label: {
        color: themeOptions.dark_theme.text,
        margin: 20,
        padding: 15,
        backgroundColor: themeOptions.dark_theme.primary_colour,
        borderRadius: 6,

    },
    light_label: {
        color: themeOptions.light_theme.text,
        margin: 20,
        padding: 15,
        backgroundColor: themeOptions.light_theme.primary_colour,
        borderRadius: 6,

    },
    title: {
        alignSelf: 'center',
        fontSize: 25,
        fontWeight: 'bold'
    },
    subtitle: {
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    }

})