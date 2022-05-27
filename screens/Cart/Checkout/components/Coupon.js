import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {COLORS, FONTS, icons, SIZES} from '../../../../constants';
import {FormInput} from '../../../../components';

const Coupon = () => {
  return (
    <View style={{marginTop: SIZES.padding}}>
      <Text style={{...FONTS.h3}}>Add Coupon</Text>
      <FormInput
        inputContainerStyle={{
          marginTop: 0,
          paddingLeft: SIZES.padding,
          paddingRight: 0,
          borderWidth: 2,
          borderColor: COLORS.lightGray2,
          backgroundColor: COLORS.white,
          overflow: 'hidden',
        }}
        placeholder="Coupon Code"
        appendComponent={
          <View
            style={{
              width: 60,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: COLORS.primary,
            }}>
            <Image source={icons.discount} style={{height: 40, width: 40}} />
          </View>
        }
      />
    </View>
  );
};

export default Coupon;

const styles = StyleSheet.create({});
