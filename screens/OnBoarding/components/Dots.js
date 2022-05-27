import {Animated, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, constants, SIZES} from '../../../constants';

const Dots = ({scrollX}) => {
  const dotPosition = Animated.divide(scrollX, SIZES.width);

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {constants.onboarding_screens.map((item, index) => {
        const dotColor = dotPosition.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [COLORS.lightOrange, COLORS.primary, COLORS.lightOrange],
          extrapolate: 'clamp',
        });
        const dotWidth = dotPosition.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [10, 30, 10],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            key={`dot-${index}`}
            style={{
              borderRadius: 5,
              marginHorizontal: 6,
              width: dotWidth,
              height: 10,
              backgroundColor: dotColor,
            }}></Animated.View>
        );
      })}
    </View>
  );
};

export default Dots;

const styles = StyleSheet.create({});
