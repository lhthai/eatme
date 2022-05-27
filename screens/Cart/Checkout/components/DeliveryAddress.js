import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {COLORS, FONTS, icons, SIZES} from '../../../../constants';

const DeliveryAddress = () => {
  return (
    <View style={{marginTop: SIZES.padding}}>
      <Text style={{...FONTS.h3}}>Delivery Address</Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: SIZES.radius,
          paddingVertical: SIZES.radius,
          paddingHorizontal: SIZES.padding,
          borderWidth: 2,
          borderRadius: SIZES.radius,
          borderColor: COLORS.lightGray2,
        }}>
        <Image source={icons.location1} style={{width: 40, height: 40}} />
        <Text style={{marginLeft: SIZES.radius, width: '85%', ...FONTS.body3}}>
          300 Post Street San Fransisco, CA
        </Text>
      </View>
    </View>
  );
};

export default DeliveryAddress;

const styles = StyleSheet.create({});
