import {View, Text} from 'react-native';
import React from 'react';
import Dots from './Dots';
import {COLORS, constants, SIZES} from '../../../constants';
import {TextButton} from '../../../components';

const Footer = ({scrollX, flatListRef, currentIndex, navigation}) => {
  return (
    <View style={{height: 160}}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Dots scrollX={scrollX} />
      </View>
      {currentIndex < constants.onboarding_screens.length - 1 && (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: SIZES.padding,
            marginVertical: SIZES.padding,
          }}>
          <TextButton
            label="Skip"
            buttonContainerStyle={{backgroundColor: null}}
            labelStyle={{color: COLORS.darkGray2}}
            onPress={() => navigation.replace('SignIn')}
          />
          <TextButton
            label="Next"
            buttonContainerStyle={{
              height: 60,
              width: 200,
              borderRadius: SIZES.radius,
            }}
            onPress={() => {
              flatListRef?.current?.scrollToIndex({
                index: currentIndex + 1,
                animated: true,
              });
            }}
          />
        </View>
      )}
      {currentIndex == constants.onboarding_screens.length - 1 && (
        <View
          style={{
            paddingHorizontal: SIZES.padding,
            marginVertical: SIZES.padding,
          }}>
          <TextButton
            label="Let's Get Started"
            buttonContainerStyle={{height: 60, borderRadius: SIZES.radius}}
            onPress={() => navigation.replace('SignIn')}
          />
        </View>
      )}
    </View>
  );
};

export default Footer;
