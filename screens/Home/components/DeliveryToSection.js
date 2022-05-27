import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React from 'react';
import {COLORS, dummyData, FONTS, icons, SIZES} from '../../../constants';

const DeliveryToSection = () => {
  return (
    <View style={{marginTop: SIZES.padding, marginHorizontal: SIZES.padding}}>
      <Text style={{color: COLORS.primary, ...FONTS.h3}}>DELIVERY TO</Text>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          marginTop: SIZES.base,
          alignItems: 'center',
        }}>
        <Text style={{...FONTS.h3}}>{dummyData?.myProfile?.address}</Text>
        <Image
          source={icons.down_arrow}
          style={{marginLeft: SIZES.base, height: 20, width: 20}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default DeliveryToSection;

const styles = StyleSheet.create({});
