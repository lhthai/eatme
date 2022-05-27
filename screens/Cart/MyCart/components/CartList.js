import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {SwipeListView} from 'react-native-swipe-list-view';
import {COLORS, FONTS, icons, SIZES} from '../../../../constants';
import {IconButton, StepperInput} from '../../../../components';

const CartList = ({myCartList, setMyCartList}) => {
  const updateQuantityHandler = (newQty, id) => {
    const newMyCartList = myCartList.map(cl =>
      cl.id === id ? {...cl, qty: newQty} : cl,
    );

    setMyCartList(newMyCartList);
  };

  const removeMyCartHandler = id => {
    let newMyCartList = [...myCartList];

    const index = newMyCartList.findIndex(cart => cart.id === id);
    newMyCartList.splice(index, 1);
    setMyCartList(newMyCartList);
  };

  return (
    <SwipeListView
      data={myCartList}
      keyExtractor={item => `${item.id}`}
      contentContainerStyle={{
        marginTop: SIZES.radius,
        paddingHorizontal: SIZES.padding,
        paddingBottom: SIZES.padding * 2,
      }}
      disableRightSwipe={true}
      rightOpenValue={-75}
      renderItem={(data, rowMap) => (
        <View
          style={{
            height: 100,
            backgroundColor: COLORS.lightGray2,
            ...styles.cartItemContainer,
          }}>
          <View style={{width: 90, height: 100, marginLeft: -10}}>
            <Image
              source={data.item.image}
              resizeMode="contain"
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 10,
              }}
            />
          </View>
          <View style={{flex: 1}}>
            <Text style={{...FONTS.body3}}>{data.item.name}</Text>
            <Text style={{color: COLORS.primary, ...FONTS.h3}}>
              ${data.item.price}
            </Text>
          </View>
          <StepperInput
            containerStyle={{
              height: 50,
              width: 125,
              backgroundColor: COLORS.white,
            }}
            value={data.item.qty}
            onAdd={() => updateQuantityHandler(data.item.qty + 1, data.item.id)}
            onMinus={() =>
              data.item.qty > 1
                ? updateQuantityHandler(data.item.qty - 1, data.item.id)
                : 1
            }
          />
        </View>
      )}
      renderHiddenItem={(data, rowMap) => (
        <IconButton
          containerStyle={{
            flex: 1,
            justifyContent: 'flex-end',
            backgroundColor: COLORS.primary,
            ...styles.cartItemContainer,
          }}
          icon={icons.delete_icon}
          iconStyle={{
            marginRight: 10,
          }}
          onPress={() => removeMyCartHandler(data.item.id)}
        />
      )}
    />
  );
};

export default CartList;

const styles = StyleSheet.create({
  cartItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SIZES.radius,
    paddingHorizontal: SIZES.radius,
    borderRadius: SIZES.radius,
  },
});
