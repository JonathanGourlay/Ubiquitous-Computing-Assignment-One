import React from "react";
import { createContainer } from "unstated-next";
import { userLocation } from "../Scripts/GetCurrentLocation";

function useCoordSwitch() {
  let [mapCoords, setMapCoords] = React.useState();
  let [search, setSearch] = React.useState("");

  React.useEffect(() => {
    userLocation(setMapCoords);
  }, []);
  return { mapCoords, setMapCoords, search, setSearch };
}

const Region = createContainer(useCoordSwitch);

export default Region;
