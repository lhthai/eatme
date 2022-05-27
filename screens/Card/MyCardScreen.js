import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Header} from '../../components';
import {IconButton} from '../../components';
import {SIZES, COLORS, icons} from '../../constants';
import {AddNewCard, CardList, Footer} from './components';

const MyCardScreen = ({navigation}) => {
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <View
      style={{
        flex: 1,
      }}>
      <Header
        title={'MY CARDS'}
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
      <ScrollView
        style={{
          flexGrow: 1,
          marginTop: SIZES.radius,
          paddingHorizontal: SIZES.padding,
          paddingBottom: SIZES.radius,
        }}>
        <CardList
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
        />
        <AddNewCard
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
        />
      </ScrollView>
      <Footer selectedCard={selectedCard} navigation={navigation} />
    </View>
  );
};

export default MyCardScreen;
