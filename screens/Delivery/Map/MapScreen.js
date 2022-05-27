import React from 'react';
import {View, Text} from 'react-native';
import HeaderButtons from './components/HeaderButtons';
import Info from './components/Info';
import Map from './components/Map';

const MapScreen = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <Map />
      <HeaderButtons navigation={navigation} />
      <Info />
    </View>
  );
};

export default MapScreen;
