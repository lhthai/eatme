import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Header, IconButton, CartQuantityButton} from '../../components';
import {COLORS, SIZES, icons, dummyData} from '../../constants';
import {
  LineDivider,
  RestaurantSection,
  FoodItemDetails,
  Footer,
} from './components';

const FoodDetail = ({navigation}) => {
  const [foodItem, setFoodItem] = useState(dummyData.vegBiryani);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      <Header
        title={'DETAILS'}
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
            onPress={() => console.log('Back')}
          />
        }
        rightComponent={<CartQuantityButton quantity={3} />}
      />
      <ScrollView>
        <FoodItemDetails foodItem={foodItem} />
        <LineDivider />
        <RestaurantSection />
        <LineDivider />
        <Footer navigation={navigation} />
      </ScrollView>
    </View>
  );
};

export default FoodDetail;
