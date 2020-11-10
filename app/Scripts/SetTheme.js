import React, { useState } from "react";
import { createContainer } from "unstated-next";

function useThemeSwitch() {
  let [theme, setTheme] = React.useState("dark");
  const switchTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    }
    if (theme === "light") {
      setTheme("dark");
    }
  };
  return { theme, switchTheme };
}

function useColourSwitch() {
  const [pickedColour, setColour] = useState({
    high: "rgb(255, 25, 25)",
    medium: "rgb(255, 147, 25)",
    low: "rgb(113, 255, 25)",
  });

  // Set the colour depedning on the congestion type
  const switchColour = (chosenColour, congestionType) => {
    if (congestionType === "High") {
      setColour({ ...pickedColour, high: chosenColour });
    }
    if (congestionType === "Med") {
      setColour({ ...pickedColour, medium: chosenColour });
    }
    if (congestionType === "Low") {
      setColour({ ...pickedColour, low: chosenColour });
    }
  };

  return { pickedColour, switchColour };
}

const ThemeSwitch = createContainer(useThemeSwitch);
const ColourSwitch = createContainer(useColourSwitch);

export { ThemeSwitch, ColourSwitch };
