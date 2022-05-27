import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../../constants';
import {TextButton} from '../../../components';

const Footer = ({selectedCard, navigation}) => {
  return (
    <View
      style={{
        paddingTop: SIZES.radius,
        paddingBottom: SIZES.padding,
        paddingHorizontal: SIZES.padding,
      }}>
      <TextButton
        disabled={selectedCard == null}
        buttonContainerStyle={{
          height: 60,
          borderRadius: SIZES.radius,
          backgroundColor: selectedCard == null ? COLORS.gray : COLORS.primary,
        }}
        label={selectedCard?.key == 'NewCard' ? 'Add' : 'Place your Order'}
        onPress={() =>
          selectedCard?.key == 'NewCard'
            ? navigation.navigate('AddCard', {selectedCard: selectedCard})
            : navigation.navigate('CheckOut', {selectedCard: selectedCard})
        }
      />
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({});
