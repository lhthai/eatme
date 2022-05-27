import {StyleSheet, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, dummyData, FONTS, SIZES} from '../../../constants';

const MenuType = ({
  selectedCategoryId,
  selectedMenuType,
  setSelectedMenuType,
  handleChangeCategory,
}) => {
  return (
    <FlatList
      horizontal
      data={dummyData.menu}
      keyExtractor={item => `${item.id}`}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        marginTop: 30,
        marginBottom: 20,
      }}
      renderItem={({item, index}) => (
        <TouchableOpacity
          style={{
            marginLeft: SIZES.padding,
            marginRight: index == dummyData.menu.length - 1 ? SIZES.padding : 0,
          }}
          onPress={() => {
            setSelectedMenuType(item.id);
            handleChangeCategory(selectedCategoryId, item.id);
          }}>
          <Text
            style={{
              color:
                selectedMenuType == item.id ? COLORS.primary : COLORS.black,
              ...FONTS.h3,
            }}>
            {item.name}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default MenuType;

const styles = StyleSheet.create({});
