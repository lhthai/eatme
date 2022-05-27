import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {IconButton, Header} from '../../../components';
import {COLORS, SIZES, icons} from '../../../constants';
import Footer from './components/Footer';
import Info from './components/Info';
import TrackOrder from './components/TrackOrder';

const DeliveryStatusScreen = ({navigation}) => {
  const [currentStep, setCurrentStep] = useState(2);

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: SIZES.padding,
        backgroundColor: COLORS.white,
      }}>
      <Header
        title={'DELIVERY STATUS'}
        containerStyle={{
          height: 50,
          marginHorizontal: SIZES.padding,
          marginTop: 40,
        }}
      />
      <Info />
      <ScrollView showsVerticalScrollIndicator={false}>
        <TrackOrder currentStep={currentStep} />
      </ScrollView>
      <Footer currentStep={currentStep} navigation={navigation} />
    </View>
  );
};

export default DeliveryStatusScreen;
