import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CardItem} from '../../../components';
import {dummyData} from '../../../constants';

const CardList = ({selectedCard, setSelectedCard}) => {
  return (
    <View>
      {dummyData.myCards.map((item, index) => {
        return (
          <CardItem
            key={`MyCard-${item.id}`}
            item={{...item, key: 'MyCard'}}
            isSelected={
              `${selectedCard?.key}-${selectedCard?.id}` == `MyCard-${item.id}`
            }
            onPress={() => setSelectedCard({...item, key: 'MyCard'})}
          />
        );
      })}
    </View>
  );
};

export default CardList;

const styles = StyleSheet.create({});
