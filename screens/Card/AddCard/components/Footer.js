import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../../../constants';
import {TextButton} from '../../../../components';

const Footer = ({navigation}) => {
  return (
    <View
      style={{
        paddingTop: SIZES.radius,
        paddingBottom: SIZES.padding,
        paddingHorizontal: SIZES.padding,
      }}>
      <TextButton
        label={'Add Card'}
        buttonContainerStyle={{
          height: 60,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.primary ,
        }}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({});
