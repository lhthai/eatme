import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../../../../constants';

const Info = () => {
  return (
    <View style={{marginTop: SIZES.radius, paddingHorizontal: SIZES.padding}}>
      <Text style={{textAlign: 'center', color: COLORS.gray, ...FONTS.body4}}>
        Estimated Delivery
      </Text>
      <Text style={{textAlign: 'center', ...FONTS.h2}}>
        21 Sept 2021 / 12:30PM
      </Text>
    </View>
  );
};

export default Info;

const styles = StyleSheet.create({});
