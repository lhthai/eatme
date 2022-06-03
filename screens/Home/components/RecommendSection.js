import {FlatList} from 'react-native';
import React from 'react';
import {Section, HorizontalFoodCard} from '.';
import {SIZES} from '../../../constants';

const RecommendSection = ({recommends, navigation}) => {
  return (
    <Section
      title="Recommended"
      onPress={() => console.log('Recommened Pressed')}>
      <FlatList
        data={recommends}
        keyExtractor={item => `${item.id}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
          <HorizontalFoodCard
            containerStyle={{
              height: 180,
              width: SIZES.width * 0.85,
              marginLeft: index == 0 ? SIZES.padding : 18,
              marginRight: index == recommends.length - 1 ? SIZES.padding : 0,
              paddingRight: SIZES.radius,
              alignItems: 'center',
            }}
            imageStyle={{
              marginTop: 35,
              height: 150,
              width: 150,
            }}
            item={item}
            onPress={() => navigation.navigate('FoodDetail', {foodItem: item})}
          />
        )}
      />
    </Section>
  );
};

export default RecommendSection;
