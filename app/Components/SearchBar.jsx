import React, { useState } from 'react';
import { SearchBar } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SmallBeachCard } from './BeachCard';
import { FlatList, StyleSheet, View } from "react-native";
import * as NavigationRef from '../Navigation/NavigationRef';
import Region from '../Scripts/SetMap';
import BeachList from "../Scripts/api";
import { useBackHandler } from '@react-native-community/hooks'
import {
  useTheme,
} from "@react-navigation/native";


const SearchView = () => {
  let region = Region.useContainer();
  const [beachFilterData, setBeachFilterData] = useState(BeachList);
  let themeType = useTheme();

  useBackHandler(() => {
    if (region.search !== "") {
      region.setSearch("");
      return true;
    }
    return false;
  })

  React.useEffect(() => {
    const filtered = BeachList.filter((beach) => { return beach.title.toLowerCase().includes(region.search.toLowerCase()) })
    setBeachFilterData(filtered)
  }, [region.search])

  const onSearch = (text) => {
    region.setSearch(text);
  }

  return (
    <SafeAreaView style={region.search !== "" && { flex: 1 }}>
      <SearchBar
        containerStyle={{
          backgroundColor: themeType.colors.background,
          borderBottomColor: 'transparent',
          borderTopColor: 'transparent'
        }}
        placeholder="Type Here..."
        onChangeText={onSearch}
        value={region.search}
        lightTheme={themeType.dark}
        round
      />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <FlatList
          style={styles.container}
          data={beachFilterData}
          keyExtractor={item => item.id}
          renderItem={({ item }) => {
            return (
              <SmallBeachCard
                beach={item}
                key={item.id}
                onPress={() => {
                  region.setSearch("");
                  region.setMapCoords({
                    ...region.mapCoords,
                    latitude: item.latLng.latitude,
                    longitude: item.latLng.longitude
                  });
                  NavigationRef.navigate("Map", [])
                }}
              />
            );
          }}
        />

      </View>
    </SafeAreaView >
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBarLight: {
    backgroundColor: 'red'
  },
  searchBarDark: {
    backgroundColor: 'green'
  },
});

export default SearchView;