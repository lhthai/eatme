import React, {useState} from 'react';
import {View, Image} from 'react-native';
import AuthLayout from './AuthLayout';
import {FormInput, TextButton} from '../../components';
import {COLORS, SIZES, icons} from '../../constants';
import {utils} from '../../utils';

const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const isEnableSendEmail = () => {
    return email != '' && emailError == '';
  };

  return (
    <AuthLayout
      title={'Password Recovery'}
      subtitle={'Please enter your email address to recover your password'}
      titleContainerStyle={{marginTop: SIZES.padding * 2}}>
      <View style={{flex: 1, marginTop: SIZES.padding}}>
        <FormInput
          label="Email"
          keyboardType="email-address"
          autoCompleteType="email"
          onChange={value => {
            utils.validateEmail(value, setEmailError);
            setEmail(value);
          }}
          errorMsg={emailError}
          appendComponent={
            <View style={{justifyContent: 'center'}}>
              <Image
                source={
                  email == '' || (email != '' && emailError == '')
                    ? icons.correct
                    : icons.cross
                }
                style={{
                  width: 20,
                  height: 20,
                  tintColor:
                    email == ''
                      ? COLORS.gray
                      : email != '' && emailError == ''
                      ? COLORS.green
                      : COLORS.red,
                }}
              />
            </View>
          }
        />
        <TextButton
          label={'Send Email'}
          disabled={isEnableSendEmail() ? false : true}
          buttonContainerStyle={{
            height: 55,
            alignItems: 'center',
            marginTop: SIZES.padding,
            borderRadius: SIZES.radius,
            backgroundColor: isEnableSendEmail()
              ? COLORS.primary
              : COLORS.transparentPrimary,
          }}
          onPress={() => navigation.goBack()}
        />
      </View>
    </AuthLayout>
  );
};

export default ForgotPassword;
