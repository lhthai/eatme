import React, {useState, useContext} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';
import {SIZES, icons, COLORS, images, FONTS} from '../../constants';
import AuthLayout from './AuthLayout';
import {FormInput, TextButton} from '../../components';
import {utils} from '../../utils';
import {AuthContext} from '../../context/AuthContext';

const SignUp = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);

  const [emailError, setEmailError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const {signUp} = useContext(AuthContext);

  const isEnableSignUp = () => {
    return (
      email != '' &&
      username != '' &&
      password != '' &&
      emailError == '' &&
      usernameError == '' &&
      passwordError == ''
    );
  };

  // const handleSignUp = async () => {
  //   try {
  //     await auth().createUserWithEmailAndPassword(email, password);
  //     await auth().onAuthStateChanged(user => {
  //       if (user) {
  //         user.updateProfile({displayName: username});
  //       }
  //     });
  //     navigation.navigate('Home');
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <AuthLayout
      title="Getting Started"
      subtitle="Create an account to continue!"
      titleContainerStyle={{marginTop: SIZES.radius}}>
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
        <FormInput
          label="Username"
          containerStyle={{marginTop: SIZES.radius}}
          onChange={value => {
            setUsername(value);
          }}
          errorMsg={usernameError}
          appendComponent={
            <View style={{justifyContent: 'center'}}>
              <Image
                source={
                  username == '' || (username != '' && usernameError == '')
                    ? icons.correct
                    : icons.cross
                }
                style={{
                  width: 20,
                  height: 20,
                  tintColor:
                    username == ''
                      ? COLORS.gray
                      : username != '' && usernameError == ''
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
            utils.validatePassword(value, setPasswordError);
            setPassword(value);
          }}
          errorMsg={passwordError}
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
        <TextButton
          label="Sign Up"
          disabled={isEnableSignUp() ? false : true}
          buttonContainerStyle={{
            height: 55,
            alignItems: 'center',
            marginTop: SIZES.padding,
            borderRadius: SIZES.radius,
            backgroundColor: isEnableSignUp()
              ? COLORS.primary
              : COLORS.transparentPrimary,
          }}
          onPress={() => signUp(email, password, username)}
        />
        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.radius,
            justifyContent: 'center',
          }}>
          <Text style={{color: COLORS.darkGray, ...FONTS.body3}}>
            Already have an account?
          </Text>
          <TextButton
            label={'Sign In'}
            buttonContainerStyle={{
              backgroundColor: null,
              marginLeft: 3,
            }}
            labelStyle={{
              color: COLORS.primary,
              ...FONTS.h3,
            }}
            onPress={() => navigation.goBack()}
          />
        </View>
      </View>
    </AuthLayout>
  );
};

export default SignUp;
