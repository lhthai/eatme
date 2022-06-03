import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Section, VerticalFoodCard} from '.';
import {SIZES} from '../../../constants';

const PopularSection = ({popular, navigation}) => {
  return (
    <Section
      title={'Popular Near You'}
      onPress={() => console.log('Show all popular items')}>
      <FlatList
        data={popular}
        horizontal
        keyExtractor={item => `${item.id}`}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
          <VerticalFoodCard
            containerStyle={{
              marginLeft: index == 0 ? SIZES.padding : 18,
              marginRight: index == popular.length - 1 ? SIZES.padding : 0,
            }}
            item={item}
            onPress={() => navigation.navigate('FoodDetail', {foodItem: item})}
          />
        )}
      />
    </Section>
  );
};

export default PopularSection;

const styles = StyleSheet.create({});
