import React, { useState } from "react";
import { Text, View, TouchableHighlight, StyleSheet, Modal, Dimensions } from "react-native";
import SwitchComp from "../Components/Switch";
import { ThemeSwitch, ColourSwitch } from '../Scripts/SetTheme';
import themeOptions from '../Themes/ThemesObjects';
import colourOptions from '../Themes/ColourObjects';


export const SettingsPage = () => {
  let themeSwitch = ThemeSwitch.useContainer();
  let colourSwitch = ColourSwitch.useContainer();
  const [modalVisible, setModalVisible] = useState(false);
  const [congestionType, setCongestionType] = useState("");
  return (

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>

      <View
        style={
          { flexDirection: 'column', }
        }
      >
        <View
          style={
            { alignItems: 'center', flexDirection: 'row-reverse', justifyContent: 'space-between', }
          }
        >
          <Text style={themeSwitch.theme === "dark" ? styles.light_label : styles.dark_label}>Change Theme</Text>
          <SwitchComp onChange={() => {
            themeSwitch.switchTheme();
          }}
          ></SwitchComp>
        </View>
        <View
          style={
            { flexDirection: 'row-reverse', alignContent: 'center', alignItems: 'center' }
          }
        >
          <Text style={themeSwitch.theme === "dark" ? styles.light_label : styles.dark_label}
            onPress={() => {
              setModalVisible(true);
              setCongestionType("High")
            }}
          >High Congestion</Text>
          <View
            style={{ backgroundColor: colourSwitch.pickedColour.high, height: 45, width: 45, marginRight: 20 }}
          >
          </View>
        </View>

        <View
          style={
            { flexDirection: 'row-reverse', alignContent: 'center', alignItems: 'center' }
          }
        >
          <Text style={themeSwitch.theme === "dark" ? styles.light_label : styles.dark_label}
            onPress={() => {
              setModalVisible(true);
              setCongestionType("Med")
            }}
          >Med Congestion</Text>
          <View
            style={{ backgroundColor: colourSwitch.pickedColour.medium, height: 45, width: 45, marginRight: 20 }}
          >
          </View>
        </View>

        <View
          style={
            { flexDirection: 'row-reverse', alignContent: 'center', alignItems: 'center' }
          }
        >
          <Text style={themeSwitch.theme === "dark" ? styles.light_label : styles.dark_label}
            onPress={() => {
              setModalVisible(true);
              setCongestionType("Low")
            }}
          >Low Congestion</Text>
          <View
            style={{ backgroundColor: colourSwitch.pickedColour.low, height: 45, width: 45, marginRight: 20 }}
          >
          </View>
        </View>

      </View>
      <Modal visible={modalVisible}
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
          flex: 0.7,
          marginTop: 100,

        }}>
          <View style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            width: 250,
          }}>
            {
              colourOptions.map((colours) => {
                return (
                  <TouchableHighlight
                    key={colours.name + colours.hexCode}
                  >
                    <View
                      style={{ backgroundColor: colours.hexCode, height: 20, width: 20, margin: 2 }}
                      key={colours.name}
                      onTouchEnd={() => {
                        colourSwitch.switchColour(colours.hexCode, congestionType);
                        setModalVisible(false);
                      }}
                    />
                  </TouchableHighlight>
                )
              })
            }
          </View>
        </View>
      </Modal>

    </View >
  );

}

const styles = StyleSheet.create({
  dark_label: {
    color: themeOptions.dark_theme.text,
    margin: 20,
    padding: 15,
    backgroundColor: themeOptions.dark_theme.background,
    borderRadius: 6,
    width: Dimensions.get('screen').width / 3,
  },
  light_label: {
    color: themeOptions.light_theme.text,
    margin: 20,
    padding: 15,
    backgroundColor: themeOptions.light_theme.background,
    borderRadius: 6,
    width: Dimensions.get('screen').width / 3,
  },

})