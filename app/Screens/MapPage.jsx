import React from "react";
import { View, Dimensions, } from "react-native";
import MapView, { Polygon } from 'react-native-maps';
import SwitchComp from "../Components/Switch";
import Region from '../Scripts/SetMap';
import BeachList from '../Scripts/api';
import { ColourSwitch } from '../Scripts/SetTheme';
import { BeachInfoModal } from '../Components/BeachModal';

export const MapPage = () => {
  const [mapType, setMapType] = React.useState("standard");
  const [modalVisible, setModalVisible] = React.useState(false)
  const [selectedBeach, setSelectedBeach] = React.useState();
  let colourSwitch = ColourSwitch.useContainer();
  let region = Region.useContainer()

  // Switch the map type
  const switchMapType = () => {
    if (mapType === "standard") {
      setMapType("satellite");
    }
    if (mapType === "satellite") {
      setMapType("standard");
    }
  };

  // Return a colour dependent on the congestion type colour
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
    <View style={{ flex: 1 }}>
      <MapView
        showsUserLocation
        showsTraffic={true}
        showsCompass={false}
        style={{
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height,
          position: "absolute",
        }}
        mapType={mapType}

        region={region.mapCoords}
      >
        {
          BeachList.map((beach) => {
            return (

              <View
                key={beach.title}
              >
                < Polygon
                  coordinates={beach.pollygon}
                  fillColor={switchCongestionType(beach.congestion)}
                  strokeWidth={2}
                  key={beach.id}
                  tappable={true}
                  onPress={() => {
                    setModalVisible(true)
                    setSelectedBeach(beach)
                    region.setMapCoords({
                      ...region.mapCoords,
                      latitude: beach.latLng.latitude,
                      longitude: beach.latLng.longitude
                    });
                  }}
                >
                  <BeachInfoModal
                    key={beach.id}
                    beach={beach}
                    visible={modalVisible && selectedBeach === beach}
                    setModalVisible={setModalVisible}
                  />

                </ Polygon>
              </View>
            )
          })
        }

      </MapView>
      <View style={{
        position: 'absolute',
        left: 0,
        right: 350,
        top: 0,
        bottom: 0
      }}>
        <SwitchComp onChange={() => {
          switchMapType()
        }}></SwitchComp>
      </View>



    </View>
  );
}

