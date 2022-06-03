import React, {useContext} from 'react';
import {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {
  CustomSwitch,
  FormInput,
  TextButton,
  TextIconButton,
} from '../../components';

import {COLORS, FONTS, icons, images, SIZES} from '../../constants';
import AuthLayout from './AuthLayout';
import {utils} from '../../utils';
import {AuthContext} from '../../context/AuthContext';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [saveMe, setSaveMe] = useState(false);
  const {signIn} = useContext(AuthContext);

  const isEnableSignIn = () => {
    return email !== '' && password !== '' && emailError === '';
  };

  // const handleSignIn = async () => {
  //   try {
  //     await auth().signInWithEmailAndPassword(email, password);
  //     navigation.navigate('Home');
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <AuthLayout
      title="Let's Sign You In"
      subtitle="Welcome back, you've been missed">
      <View style={{flex: 1, marginTop: SIZES.padding * 2}}>
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
        <FormInput
          label="Password"
          secureTextEntry={!showPass}
          autoCompleteType="password"
          containerStyle={{marginTop: SIZES.radius}}
          onChange={value => {
            setPassword(value);
          }}
          errorMsg={emailError}
          appendComponent={
            <TouchableOpacity
              style={{
                width: 40,
                alignItems: 'flex-end',
                justifyContent: 'center',
              }}
              onPress={() => setShowPass(!showPass)}>
              <Image
                source={showPass ? icons.eye_close : icons.eye}
                style={{height: 20, width: 20, tintColor: COLORS.gray}}
              />
            </TouchableOpacity>
          }
        />
        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.radius,
            justifyContent: 'space-between',
          }}>
          <CustomSwitch value={saveMe} onChange={value => setSaveMe(value)} />
          <TextButton
            label={'Forgot Password?'}
            buttonContainerStyle={{backgroundColor: null}}
            labelStyle={{color: COLORS.gray, ...FONTS.body4}}
            onPress={() => navigation.navigate('ForgotPassword')}
          />
        </View>
        <TextButton
          label="Sign In"
          disabled={isEnableSignIn() ? false : true}
          buttonContainerStyle={{
            height: 55,
            alignItems: 'center',
            marginTop: SIZES.padding,
            borderRadius: SIZES.radius,
            backgroundColor: isEnableSignIn()
              ? COLORS.primary
              : COLORS.transparentPrimary,
          }}
          onPress={() => signIn(email, password)}
        />
        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.radius,
            justifyContent: 'center',
          }}>
          <Text style={{color: COLORS.darkGray, ...FONTS.body3}}>
            Dont't have an account?
          </Text>
          <TextButton
            label={'Sign Up'}
            buttonContainerStyle={{backgroundColor: null, marginLeft: 3}}
            labelStyle={{color: COLORS.primary, ...FONTS.h3}}
            onPress={() => navigation.navigate('SignUp')}
          />
        </View>
      </View>
      <View>
        <TextIconButton
          containerStyle={{
            height: 50,
            alignItems: 'center',
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.blue,
          }}
          icon={icons.fb}
          iconPosition="LEFT"
          iconStyle={{tintColor: COLORS.white}}
          label="Continue With Facebook"
          labelStyle={{marginLeft: SIZES.radius, color: COLORS.white}}
          onPress={() => console.log('Facebook')}
        />
        <TextIconButton
          containerStyle={{
            height: 50,
            alignItems: 'center',
            marginTop: SIZES.radius,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.lightGray2,
          }}
          icon={icons.google}
          iconPosition="LEFT"
          iconStyle={{tintColor: null}}
          label="Continue With Google"
          labelStyle={{marginLeft: SIZES.radius}}
          onPress={() => console.log('Google')}
        />
      </View>
    </AuthLayout>
  );
};

export default SignIn;
