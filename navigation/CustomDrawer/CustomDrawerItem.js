import React, {useReducer} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {COLORS, FONTS, SIZES} from '../../constants';

const CustomDrawerItem = ({label, icon, isFocused, onPress}) => {
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        height: 40,
        marginBottom: SIZES.base,
        alignItems: 'center',
        paddingLeft: SIZES.radius,
        borderRadius: SIZES.radius,
        backgroundColor: isFocused ? COLORS.transparentBlack1 : null,
      }}
      onPress={onPress}>
      <Image
        source={icon}
        style={{width: 20, height: 20, tintColor: COLORS.white}}
      />
      <Text style={{marginLeft: 15, color: COLORS.white, ...FONTS.h3}}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomDrawerItem;
