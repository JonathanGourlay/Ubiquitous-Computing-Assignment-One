import React from "react";
import { View } from "react-native";
import BeachRenderList from '../Components/BeachFlatList';
import CovidRenderList from '../Components/CovidFlatList';

export const HomePage = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <CovidRenderList></CovidRenderList>
      <BeachRenderList></BeachRenderList>

    </View>
  );
}

