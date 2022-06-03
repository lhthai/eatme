import React, {useContext, useState, useEffect} from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';
import {AuthContext} from '../context/AuthContext';
import CustomDrawer from './CustomDrawer/CustomDrawer';
import MyCart from '../screens/Cart/MyCart/MyCartScreen';
import MyCardScreen from '../screens/Card/MyCardScreen';
import AddCardScreen from '../screens/Card/AddCard/AddCardScreen';
import CheckoutScreen from '../screens/Cart/Checkout/CheckoutScreen';
import MapScreen from '../screens/Delivery/Map/MapScreen';
import FoodDetail from '../screens/Food/FoodDetail';
import DeliveryStatusScreen from '../screens/Delivery/DeliveryStatus/DeliveryStatusScreen';
import SuccessScreen from '../screens/Cart/SuccessScreen';
import SignIn from '../screens/Authentication/SignIn';
import ForgotPassword from '../screens/Authentication/ForgotPassword';
import SignUp from '../screens/Authentication/SignUp';
import OnBoarding from '../screens/OnBoarding/OnBoarding';
import Loading from '../components/Loading';

const Stack = createStackNavigator();

export default function Routes() {
  const {currentUser, setCurrentUser} = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  function onAuthStateChanged(user) {
    setLoading(true);
    if (user) {
      console.log(user);
      setCurrentUser(user);
    } else {
      setCurrentUser(null);
    }
    setLoading(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="OnBoarding">
      {currentUser ? (
        <>
          <Stack.Screen name="Home" component={CustomDrawer} />
          <Stack.Screen name="MyCart" component={MyCart} />
          <Stack.Screen name="MyCard" component={MyCardScreen} />
          <Stack.Screen name="AddCard" component={AddCardScreen} />
          <Stack.Screen name="CheckOut" component={CheckoutScreen} />
          <Stack.Screen name="Map" component={MapScreen} />
          <Stack.Screen name="FoodDetail" component={FoodDetail} />
          <Stack.Screen
            name="DeliveryStatus"
            component={DeliveryStatusScreen}
            options={{gestureEnabled: false}}
          />
          <Stack.Screen
            name="Success"
            component={SuccessScreen}
            options={{gestureEnabled: false}}
          />
        </>
      ) : (
        <>
          <Stack.Screen name="OnBoarding" component={OnBoarding} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </>
      )}
    </Stack.Navigator>
  );
}
