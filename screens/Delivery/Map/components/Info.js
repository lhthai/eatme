import {View, Text, Image, TouchableOpacity, Platform} from 'react-native';
import React from 'react';
import {COLORS, FONTS, icons, images, SIZES} from '../../../../constants';
import LinearGradient from 'react-native-linear-gradient';

export default function Info() {
  return (
    <View
      style={{
        position: 'absolute',
        bottom: 0,
        width: '100%',
      }}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colors={[COLORS.transparent, COLORS.lightGray1]}
        style={{
          position: 'absolute',
          top: -20,
          left: 0,
          right: 0,
          height: Platform.OS === 'ios' ? 200 : 50,
        }}
      />
      <View
        style={{
          padding: SIZES.padding,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          backgroundColor: COLORS.white,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={icons.clock}
            style={{width: 40, height: 40, tintColor: COLORS.black}}
          />
          <View style={{marginLeft: SIZES.padding}}>
            <Text style={{color: COLORS.gray, ...FONTS.body4}}>
              Your delivery time
            </Text>
            <Text style={{...FONTS.h3}}>30 minutes</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: SIZES.padding,
          }}>
          <Image
            source={icons.focus}
            style={{width: 40, height: 40, tintColor: COLORS.black}}
          />
          <View style={{marginLeft: SIZES.padding}}>
            <Text style={{color: COLORS.gray, ...FONTS.body4}}>
              Your address
            </Text>
            <Text style={{...FONTS.h3}}>88, Jln Padungan, Kunching</Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            height: 70,
            marginTop: SIZES.padding,
            borderRadius: SIZES.radius,
            paddingHorizontal: SIZES.radius,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: COLORS.primary,
          }}>
          <Image
            source={images.profile}
            style={{width: 40, height: 40, borderRadius: 5}}
          />
          <View style={{flex: 1, marginLeft: SIZES.radius}}>
            <Text style={{color: COLORS.white, ...FONTS.h3}}>
              By Programmers
            </Text>
            <Text style={{color: COLORS.white, ...FONTS.body4}}>
              Delivery Man
            </Text>
          </View>
          <View
            style={{
              height: 40,
              width: 40,
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 1,
              borderRadius: 5,
              borderColor: COLORS.white,
              backgroundColor: COLORS.transparentWhite1,
            }}>
            <Image source={icons.call} style={{width: 30, height: 30}} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
