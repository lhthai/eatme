import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Header, IconButton, CartQuantityButton, FooterTotal} from '../../../components';
import {COLORS, SIZES, icons, dummyData} from '../../../constants';
import {CartList} from './components';

const MyCart = ({navigation}) => {
  const [myCartList, setMyCartList] = useState(dummyData.myCart);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      <Header
        title={'MY CART'}
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
        rightComponent={<CartQuantityButton quantity={3} />}
      />
      <CartList myCartList={myCartList} setMyCartList={setMyCartList} />
      <FooterTotal
        subtotal={37.97}
        shippingFee={0.0}
        total={37.97}
        onPress={() => navigation.navigate('MyCard')}
      />
    </View>
  );
};

export default MyCart;
