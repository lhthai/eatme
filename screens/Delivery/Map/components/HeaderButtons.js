import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IconButton} from '../../../../components';
import {COLORS, icons, SIZES} from '../../../../constants';

const HeaderButtons = ({navigation}) => {
  return (
    <>
      <IconButton
        icon={icons.back}
        containerStyle={{
          position: 'absolute',
          top: SIZES.padding * 2,
          left: SIZES.padding,
          ...styles.buttonStyle,
        }}
        iconStyle={{
          width: 20,
          height: 20,
          tintColor: COLORS.gray2,
        }}
        onPress={() => navigation.goBack()}
      />
      <View
        style={{
          position: 'absolute',
          top: SIZES.padding * 2,
          right: SIZES.padding,
        }}>
        <IconButton
          icon={icons.globe}
          containerStyle={{...styles.buttonStyle}}
          iconStyle={{width: 20, height: 20, tintColor: COLORS.gray}}
        />
        <IconButton
          icon={icons.focus}
          containerStyle={{marginTop: SIZES.radius, ...styles.buttonStyle}}
          iconStyle={{width: 20, height: 20, tintColor: COLORS.gray}}
        />
      </View>
    </>
  );
};

export default HeaderButtons;

const styles = StyleSheet.create({
  buttonStyle: {
    width: 40,
    height: 40,
    borderRadius: SIZES.radius,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: COLORS.gray2,
    backgroundColor: COLORS.white,
  },
});
