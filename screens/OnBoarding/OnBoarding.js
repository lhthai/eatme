import React, {useRef, useState} from 'react';
import {View, Text, Animated, Image, ImageBackground} from 'react-native';
import {COLORS, constants, FONTS, SIZES} from '../../constants';
import {Footer, HeaderLogo} from './components';

const OnBoarding = ({navigation}) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const onViewChangeRef = useRef(({viewableItems, changed}) => {
    setCurrentIndex(viewableItems[0].index);
  });

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      <HeaderLogo />
      <Animated.FlatList
        ref={flatListRef}
        horizontal
        pagingEnabled
        data={constants.onboarding_screens}
        scrollEventThrottle={16}
        snapToAlignment={'center'}
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        onViewableItemsChanged={onViewChangeRef.current}
        keyExtractor={item => `${item.id}`}
        renderItem={({item, index}) => (
          <View style={{width: SIZES.width}}>
            <View style={{flex: 3}}>
              <ImageBackground
                source={item.backgroundImage}
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  height: '100%',
                  width: index == 1 ? '92%' : '100%',
                }}>
                <Image
                  source={item.bannerImage}
                  resizeMode="contain"
                  style={{
                    width: SIZES.width * 0.8,
                    height: SIZES.width * 0.8,
                    marginBottom: -SIZES.padding,
                  }}
                />
              </ImageBackground>
            </View>
            <View
              style={{
                flex: 1,
                marginTop: 30,
                alignItems: 'center',
                justifyContent: 'center',
                paddingHorizontal: SIZES.radius,
              }}>
              <Text style={{...FONTS.h1, fontSize: 25}}>{item.title}</Text>
              <Text
                style={{
                  marginTop: SIZES.radius,
                  textAlign: 'center',
                  color: COLORS.darkGray,
                  paddingHorizontal: SIZES.padding,
                  ...FONTS.body3,
                }}>
                {item.description}
              </Text>
            </View>
          </View>
        )}
      />
      <Footer
        scrollX={scrollX}
        flatListRef={flatListRef}
        currentIndex={currentIndex}
        navigation={navigation}
      />
    </View>
  );
};

export default OnBoarding;
