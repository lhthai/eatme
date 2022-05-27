import {StyleSheet, View, Image} from 'react-native';
import React from 'react';
import {COLORS, icons} from '../constants';

const FormInputCheck = ({value, valueError}) => {
  return (
    <View style={{justifyContent: 'center'}}>
      <Image
        source={
          value == '' || (value != '' && valueError == '')
            ? icons.correct
            : icons.cross
        }
        style={{
          width: 20,
          height: 20,
          tintColor:
            value == ''
              ? COLORS.gray
              : value != '' && valueError == ''
              ? COLORS.green
              : COLORS.red,
        }}
      />
    </View>
  );
};

export default FormInputCheck;

const styles = StyleSheet.create({});
