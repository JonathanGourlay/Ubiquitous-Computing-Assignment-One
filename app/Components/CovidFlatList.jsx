import CovidCard from './CovidCard';
import React from "react";
import { StyleSheet, SafeAreaView, FlatList, Dimensions } from "react-native";

// Example COVID updates 
const CovidList = [{
  id: '0',
  title: 'Check Congestion at Your Favourite Spot',
  text: 'Avoid paths and beaches highlighted in red.',
},
{
  id: '1',
  title: 'Social Distancing',
  text: 'Due to COVID-19 please maintain social distancing throughout our beaches.',
},
]

const CovidRenderList = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={CovidList}
        renderItem={({ item }) => {
          return (<CovidCard item={item} key={item.id} />);
        }}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.4,
    marginTop: 10,
    width: Dimensions.get('window').width - 10,
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
});

export default CovidRenderList;