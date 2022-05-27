import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {COLORS, dummyData, FONTS, SIZES} from '../../../constants';

const FoodCategoriesSection = ({
  selectedCategoryId,
  setSelectedCategoryId,
  handleChangeCategory,
  selectedMenuType,
}) => {
  return (
    <FlatList
      data={dummyData.categories}
      horizontal
      keyExtractor={item => `${item.id}`}
      showsHorizontalScrollIndicator={false}
      renderItem={({item, index}) => (
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            height: 55,
            marginTop: SIZES.padding,
            marginLeft: index == 0 ? SIZES.padding : SIZES.radius,
            marginRight:
              index == dummyData.categories.length - 1 ? SIZES.padding : 0,
            paddingHorizontal: 8,
            borderRadius: SIZES.radius,
            backgroundColor:
              selectedCategoryId == item.id
                ? COLORS.primary
                : COLORS.lightGray2,
          }}
          onPress={() => {
            setSelectedCategoryId(item.id);
            handleChangeCategory(item.id, selectedMenuType);
          }}>
          <Image
            style={{marginTop: 5, width: 50, height: 50}}
            source={item.icon}
          />
          <Text
            style={{
              alignSelf: 'center',
              marginRight: SIZES.base,
              color:
                selectedCategoryId == item.id ? COLORS.white : COLORS.darkGray,
              ...FONTS.h3,
            }}>
            {item.name}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default FoodCategoriesSection;

const styles = StyleSheet.create({});
