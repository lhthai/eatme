import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {COLORS, FONTS, images, SIZES} from '../../../constants';
import {Rating} from '.';
import {AuthContext} from '../../../context/AuthContext';

const RestaurantSection = () => {
  const {currentUser} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Image source={images.profile} style={styles.imgProfile} />
      <View style={styles.btnContainer}>
        <Text style={{...FONTS.h3}}>{currentUser.displayName}</Text>
        <Text style={{color: COLORS.gray, ...FONTS.body4}}>
          1.2 KM away from you
        </Text>
      </View>
      <Rating rating={4} iconStyle={{marginLeft: 3}} />
    </View>
  );
};

export default RestaurantSection;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: SIZES.padding,
    paddingHorizontal: SIZES.padding,
    alignItems: 'center',
  },
  imgProfile: {
    width: 50,
    height: 50,
    borderRadius: SIZES.radius,
  },
  btnContainer: {
    flex: 1,
    marginLeft: SIZES.radius,
    justifyContent: 'center',
  },
});
