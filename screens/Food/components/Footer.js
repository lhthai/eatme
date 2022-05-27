import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SIZES} from '../../../constants';
import {StepperInput} from '../../../components';
import {useState} from 'react';
import {TextButton} from '../../../components';

const Footer = ({navigation}) => {
  const [qty, setQty] = useState(1);

  return (
    <View
      style={{
        flexDirection: 'row',
        height: 120,
        alignItems: 'center',
        paddingHorizontal: SIZES.padding,
        paddingBottom: SIZES.radius,
      }}>
      <StepperInput
        value={qty}
        onAdd={() => setQty(qty + 1)}
        onMinus={() => (qty > 1 ? setQty(qty - 1) : 1)}
      />
      <TextButton
        buttonContainerStyle={{
          flex: 1,
          flexDirection: 'row',
          height: 60,
          marginLeft: SIZES.radius,
          paddingHorizontal: SIZES.radius,
          borderRadius: SIZES.radius,
        }}
        label="Buy Now"
        label2="$15.99"
        onPress={() => navigation.navigate('MyCart')}
      />
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({});
