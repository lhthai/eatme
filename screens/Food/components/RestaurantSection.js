import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS, images, SIZES} from '../../../constants';
import {Rating} from '.';

const RestaurantSection = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginVertical: SIZES.padding,
        paddingHorizontal: SIZES.padding,
        alignItems: 'center',
      }}>
      <Image
        source={images.profile}
        style={{width: 50, height: 50, borderRadius: SIZES.radius}}
      />
      <View
        style={{flex: 1, marginLeft: SIZES.radius, justifyContent: 'center'}}>
        <Text style={{...FONTS.h3}}>Simon Le</Text>
        <Text style={{color: COLORS.gray, ...FONTS.body4}}>
          1.2 KM away from you
        </Text>
      </View>
      <Rating rating={4} iconStyle={{marginLeft: 3}} />
    </View>
  );
};

export default RestaurantSection;

const styles = StyleSheet.create({});
