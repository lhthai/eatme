import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS, images, SIZES, icons} from '../../../../constants';
import {FormInput, RadioButton} from '../../../../components';
import {utils} from '../../../../utils';
import FormInputCheck from '../../../../components/FormInputCheck';

const Card = ({selectedCard}) => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardNumberError, setCardNumberError] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardNameError, setCardNameError] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [expiryDateError, setExpiryDateError] = useState('');
  const [cvv, setCvv] = useState('');
  const [cvvError, setCvvError] = useState('');
  const [isRemember, setIsRemember] = useState(false);

  return (
    <View>
      <ImageBackground
        source={images.card}
        style={{
          height: 200,
          width: '100%',
          marginTop: SIZES.radius,
          borderRadius: SIZES.radius,
          overflow: 'hidden',
        }}>
        <Image
          source={selectedCard?.icon}
          resizeMode="contain"
          style={{
            position: 'absolute',
            top: 20,
            right: 20,
            height: 40,
            width: 80,
          }}
        />
        <View
          style={{
            position: 'absolute',
            bottom: 10,
            left: 0,
            right: 0,
            paddingHorizontal: SIZES.padding,
          }}>
          <Text style={{color: COLORS.white, ...FONTS.h3}}>{cardName}</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{flex: 1, color: COLORS.white, ...FONTS.body3}}>
              {cardNumber}
            </Text>
            <Text style={{color: COLORS.white, ...FONTS.body3}}>
              {expiryDate}
            </Text>
          </View>
        </View>
      </ImageBackground>
      <View style={{marginTop: SIZES.padding * 2}}>
        <FormInput
          label={'Card Number'}
          keyboardType="number-pad"
          maxLength={16}
          value={cardNumber}
          onChange={value => {
            setCardNumber(
              value
                .replace(/\s/g, '')
                .replace(/(\d{4})/g, '$1 ')
                .trim(),
            );
            utils.validateInput(value, 16, setCardNumberError);
          }}
          errorMsg={cardNumberError}
          appendComponent={
            <FormInputCheck value={cardNumber} valueError={cardNumberError} />
          }
        />
        <FormInput
          label={'Cardholder Name'}
          value={cardNumber}
          containerStyle={{
            marginTop: SIZES.radius,
          }}
          onChange={value => {
            utils.validateInput(value, 1, setCardNameError);
            setCardName(value);
          }}
          errorMsg={setCardNameError}
          appendComponent={
            <FormInputCheck value={cardName} valueError={cardNameError} />
          }
        />
        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.radius,
          }}>
          <FormInput
            label={'Expiry Date'}
            value={expiryDate}
            placeholder="MM/yy"
            maxLength={5}
            containerStyle={{
              flex: 1,
            }}
            onChange={value => {
              utils.validateInput(value, 5, setExpiryDateError);
              setExpiryDate(value);
            }}
            appendComponent={
              <FormInputCheck value={expiryDate} valueError={expiryDateError} />
            }
          />
          <FormInput
            label={'CVV'}
            value={cvv}
            maxLength={3}
            containerStyle={{
              flex: 1,
              marginLeft: SIZES.radius,
            }}
            onChange={value => {
              utils.validateInput(value, 3, setCvvError);
              setCvv(value);
            }}
            appendComponent={
              <FormInputCheck value={cvv} valueError={cvvError} />
            }
          />
        </View>
        <View style={{alignItems: 'flex-start', marginTop: SIZES.padding}}>
          <RadioButton
            label={'Remember this card details.'}
            isSelected={isRemember}
            onPress={() => setIsRemember(!isRemember)}
          />
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({});
