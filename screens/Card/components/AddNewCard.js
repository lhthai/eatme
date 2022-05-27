import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {dummyData, FONTS, SIZES} from '../../../constants';
import { CardItem } from '../../../components';

const AddNewCard = ({selectedCard, setSelectedCard}) => {
  return (
    <View style={{marginTop: SIZES.padding}}>
      <Text style={{...FONTS.h3}}>Add new card</Text>
      {dummyData.allCards.map((item, index) => {
        return (
          <CardItem
            key={`NewCard-${item.id}`}
            item={item}
            isSelected={
              `${selectedCard?.key}-${selectedCard?.id}` == `NewCard-${item.id}`
            }
            onPress={() => setSelectedCard({...item, key: 'NewCard'})}
          />
        );
      })}
    </View>
  );
};

export default AddNewCard;

const styles = StyleSheet.create({});
