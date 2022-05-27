import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {dummyData} from '../../../../constants';
import {CardItem} from '../../../../components';

const Cards = ({selectedCard, setSelectedCard}) => {
  return (
    <View>
      {selectedCard &&
        dummyData.myCards.map((item, index) => {
          return (
            <CardItem
              key={`MyCard-${item.id}`}
              item={item}
              isSelected={
                `${selectedCard?.key}-${selectedCard?.id}` ==
                `MyCard-${item.id}`
              }
              onPress={() => setSelectedCard({...item, key: 'MyCard'})}
            />
          );
        })}
    </View>
  );
};

export default Cards;

const styles = StyleSheet.create({});
