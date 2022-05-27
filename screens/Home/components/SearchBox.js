import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS, icons, SIZES} from '../../../constants';
import {FilterModal} from '.';

const SearchBox = () => {
  const [showFilterModal, setShowFilterModal] = useState(false);
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 40,
        alignItems: 'center',
        marginHorizontal: SIZES.padding,
        marginVertical: SIZES.padding,
        paddingHorizontal: SIZES.radius,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.lightGray2,
      }}>
      <Image
        source={icons.search}
        style={{height: 20, width: 20, tintColor: COLORS.black}}
      />
      <TextInput
        placeholder="search food..."
        style={{flex: 1, marginLeft: SIZES.radius, ...FONTS.h3}}
      />
      <TouchableOpacity onPress={() => setShowFilterModal(true)}>
        <Image
          source={icons.filter}
          style={{height: 20, width: 20, tintColor: COLORS.black}}
        />
      </TouchableOpacity>
      {showFilterModal && (
        <FilterModal
          isVisible={showFilterModal}
          onClose={() => setShowFilterModal(false)}
        />
      )}
    </View>
  );
};

export default SearchBox;

