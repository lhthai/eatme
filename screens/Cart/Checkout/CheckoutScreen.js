import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Header, IconButton, FooterTotal} from '../../../components';
import {COLORS, SIZES, icons} from '../../../constants';
import {Cards, Coupon, DeliveryAddress} from './components';

const CheckoutScreen = ({navigation, route}) => {
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    let {selectedCard} = route.params;
    setSelectedCard(selectedCard);
  });

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      <Header
        title={'CHECKOUT'}
        containerStyle={{
          height: 50,
          marginHorizontal: SIZES.padding,
          marginTop: 40,
        }}
        leftComponent={
          <IconButton
            icon={icons.back}
            containerStyle={{
              width: 40,
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 1,
              borderRadius: SIZES.radius,
              borderColor: COLORS.gray2,
            }}
            iconStyle={{
              width: 20,
              height: 20,
              tintColor: COLORS.gray2,
            }}
            onPress={() => navigation.goBack()}
          />
        }
        rightComponent={<View style={{width: 40}} />}
      />
      <KeyboardAwareScrollView
        keyboardDismissMode="on-drag"
        extraScrollHeight={-200}
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: SIZES.padding,
          paddingBottom: 20,
        }}>
        <Cards selectedCard={selectedCard} />
        <DeliveryAddress />
        <Coupon />
      </KeyboardAwareScrollView>
      <FooterTotal
        subtotal={37.97}
        shippingFee={0.0}
        total={37.97}
        onPress={() => navigation.replace('Success')}
      />
    </View>
  );
};

export default CheckoutScreen;
