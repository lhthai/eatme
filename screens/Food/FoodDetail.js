import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {Header, IconButton, CartQuantityButton} from '../../components';
import {COLORS, SIZES, icons} from '../../constants';
import {
  LineDivider,
  RestaurantSection,
  FoodItemDetails,
  Footer,
} from './components';

const FoodDetail = ({route, navigation}) => {
  const {foodItem} = route.params;

  return (
    <View style={styles.container}>
      <Header
        title={'DETAILS'}
        containerStyle={styles.headerContainerStyle}
        leftComponent={
          <IconButton
            icon={icons.back}
            containerStyle={styles.iconContainerStyle}
            iconStyle={styles.iconStyle}
            onPress={() => navigation.goBack()}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  headerContainerStyle: {
    height: 50,
    marginHorizontal: SIZES.padding,
    marginTop: 40,
  },
  iconContainerStyle: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: SIZES.radius,
    borderColor: COLORS.gray2,
  },
  iconStyle: {
    width: 20,
    height: 20,
    tintColor: COLORS.gray2,
  },
});
