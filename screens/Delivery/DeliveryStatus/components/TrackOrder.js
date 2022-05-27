import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import {COLORS, constants, FONTS, icons, SIZES} from '../../../../constants';
import {LineDivider} from '../../../Food/components';

const TrackOrder = ({currentStep}) => {

  return (
    <View
      style={{
        marginTop: SIZES.padding,
        paddingVertical: SIZES.padding,
        borderRadius: SIZES.radius,
        borderWidth: 2,
        borderColor: COLORS.lightGray2,
        backgroundColor: COLORS.white2,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 20,
          paddingHorizontal: SIZES.padding,
        }}>
        <Text style={{...FONTS.h3}}>Track Order</Text>
        <Text style={{color: COLORS.gray, ...FONTS.body3}}>NY012345</Text>
      </View>
      <LineDivider lineStyle={{backgroundColor: COLORS.lightGray2}} />
      <View
        style={{
          marginTop: SIZES.padding,
          paddingHorizontal: SIZES.padding,
        }}>
        {constants.track_order_status.map((item, index) => {
          return (
            <View key={`StatusList-${index}`}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginVertical: -5,
                }}>
                <Image
                  source={icons.check_circle}
                  style={{
                    width: 40,
                    height: 40,
                    tintColor:
                      index <= currentStep ? COLORS.primary : COLORS.lightGray1,
                  }}
                />
                <View style={{marginLeft: SIZES.radius}}>
                  <Text style={{...FONTS.h3}}>{item.title}</Text>
                  <Text style={{color: COLORS.gray, ...FONTS.body4}}>
                    {item.sub_title}
                  </Text>
                </View>
              </View>
              {index < constants.track_order_status.length - 1 && (
                <View>
                  {index < currentStep && (
                    <View
                      style={{
                        height: 50,
                        width: 3,
                        marginLeft: 18,
                        backgroundColor: COLORS.primary,
                        zIndex: -1,
                      }}></View>
                  )}
                  {index >= currentStep && (
                    <Image
                      source={icons.dotted_line}
                      resizeMode="cover"
                      style={{width: 4, height: 50, marginLeft: 17}}
                    />
                  )}
                </View>
              )}
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default TrackOrder;

const styles = StyleSheet.create({});
