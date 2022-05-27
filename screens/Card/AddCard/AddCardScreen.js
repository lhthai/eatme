import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {COLORS, SIZES, icons} from '../../../constants';
import Card from './components/Card';
import {Header, IconButton} from '../../../components';
import Footer from './components/Footer';

const AddCardScreen = ({navigation, route}) => {
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    let {selectedCard} = route.params;
    setSelectedCard(selectedCard);
  });

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      <Header
        title={'ADD NEW CARD'}
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
        rightComponent={<View style={{width: 40}} />}
      />
      <KeyboardAwareScrollView
        keyboardDismissMode="on-drag"
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: SIZES.padding,
        }}>
        <Card selectedCard={selectedCard} />
      </KeyboardAwareScrollView>
      <Footer navigation={navigation} />
    </View>
  );
};

export default AddCardScreen;
