import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, constants, FONTS, icons, SIZES} from '../../../../constants';
import {TextButton, TextIconButton} from '../../../../components';

const Footer = ({navigation, currentStep}) => {
  return (
    <View style={{marginVertical: SIZES.radius, marginBottom: SIZES.padding}}>
      {currentStep < constants.track_order_status.length - 1 && (
        <View style={{flexDirection: 'row', height: 55}}>
          <TextButton
            buttonContainerStyle={{
              width: '40%',
              borderRadius: SIZES.base,
              backgroundColor: COLORS.lightGray2,
            }}
            label="Cancel"
            labelStyle={{
              color: COLORS.primary,
            }}
            onPress={() => navigation.navigate('FoodDetail')}
          />
          <TextIconButton
            containerStyle={{
              flex: 1,
              marginLeft: SIZES.radius,
              borderRadius: SIZES.base,
              backgroundColor: COLORS.primary,
            }}
            label="Map View"
            labelStyle={{
              color: COLORS.white,
              ...FONTS.h3,
            }}
            icon={icons.map}
            iconPosition="LEFT"
            iconStyle={{
              width: 25,
              height: 25,
              marginRight: SIZES.base,
              tintColor: COLORS.white,
            }}
            onPress={() => navigation.navigate('Map')}
          />
        </View>
      )}
      {currentStep == constants.track_order_status.length - 1 && (
        <TextButton
          buttonContainerStyle={{
            height: 55,
            borderRadius: SIZES.base,
          }}
          label="DONE"
          onPress={() => navigation.navigate('FoodDetail')}
        />
      )}
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({});
