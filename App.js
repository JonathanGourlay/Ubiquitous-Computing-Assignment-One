import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeSwitch, ColourSwitch } from "./app/Scripts/SetTheme";
import Navigation from "./app/Navigation/Navigation";
import Region from "./app/Scripts/SetMap";

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeSwitch.Provider>
        <ColourSwitch.Provider>
          <Region.Provider>
            <Navigation />
          </Region.Provider>
        </ColourSwitch.Provider>
      </ThemeSwitch.Provider>
    </SafeAreaProvider>
  );
}
