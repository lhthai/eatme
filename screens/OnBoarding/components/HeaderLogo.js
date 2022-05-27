import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {images, SIZES} from '../../../constants';

const HeaderLogo = () => {
  return (
    <View
      style={{
        position: 'absolute',
        top: SIZES.height > 800 ? 50 : 25,
        left: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image
        style={{width: SIZES.width * 0.5, height: 100}}
        source={images.logo_02}
        resizeMode="contain"
      />
    </View>
  );
};

export default HeaderLogo;

const styles = StyleSheet.create({});
