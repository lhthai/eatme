import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import {COLORS, dummyData, FONTS, icons, SIZES} from '../../../constants';
import {IconLabel} from '.';
import {TextButton} from '../../../components';

const FoodItemDetails = ({foodItem}) => {
  const [selectedSize, setSelectedSize] = useState('');

  return (
    <View
      style={{
        marginTop: SIZES.radius,
        marginBottom: SIZES.padding,
        paddingHorizontal: SIZES.padding,
      }}>
      <View
        style={{
          height: 190,
          borderRadius: 15,
          backgroundColor: COLORS.lightGray2,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: SIZES.base,
            paddingHorizontal: SIZES.radius,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image source={icons.calories} style={{width: 30, height: 30}} />
            <Text style={{color: COLORS.darkGray2, ...FONTS.body4}}>
              {foodItem?.calories} calories
            </Text>
          </View>
          <Image
            source={icons.love}
            style={{
              width: 20,
              height: 20,
              tintColor: foodItem?.isFavourite ? COLORS.primary : COLORS.gray,
            }}
          />
        </View>
        <Image
          source={foodItem?.image}
          resizeMode="contain"
          style={{height: 170, width: '100%'}}
        />
      </View>
      <View style={{marginTop: SIZES.padding}}>
        <Text style={{...FONTS.h1}}>{foodItem?.name}</Text>
        <Text
          style={{
            marginTop: SIZES.base,
            color: COLORS.darkGray,
            textAlign: 'justify',
          }}>
          {foodItem?.description}
        </Text>
        <View style={{flexDirection: 'row', marginTop: SIZES.padding}}>
          <IconLabel
            containerStyle={{backgroundColor: COLORS.primary}}
            icon={icons.star}
            label="4.5"
            labelStyle={{color: COLORS.white}}
          />
          <IconLabel
            containerStyle={{marginLeft: SIZES.radius, paddingHorizontal: 0}}
            icon={icons.clock}
            label="30 mins"
            labelStyle={{color: COLORS.black}}
          />
          <IconLabel
            containerStyle={{marginLeft: SIZES.radius, paddingHorizontal: 0}}
            icon={icons.dollar}
            label="Free shipping"
            labelStyle={{color: COLORS.black}}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.padding,
            alignItems: 'center',
          }}>
          <Text style={{...FONTS.h3}}>Sizes: </Text>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              marginLeft: SIZES.padding,
            }}>
            {dummyData.sizes.map((item, index) => {
              return (
                <TextButton
                  key={`Sizes-${index}`}
                  buttonContainerStyle={{
                    width: 55,
                    height: 55,
                    margin: SIZES.base,
                    borderWidth: 1,
                    borderRadius: SIZES.radius,
                    borderColor:
                      selectedSize == item.id ? COLORS.primary : COLORS.gray2,
                    backgroundColor:
                      selectedSize == item.id ? COLORS.primary : null,
                  }}
                  label={item.label}
                  labelStyle={{
                    color:
                      selectedSize == item.id ? COLORS.white : COLORS.gray2,
                    ...FONTS.body2,
                  }}
                  onPress={() => setSelectedSize(item.id)}
                />
              );
            })}
          </View>
        </View>
      </View>
    </View>
  );
};

export default FoodItemDetails;
