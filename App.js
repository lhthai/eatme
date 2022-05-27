import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import CustomDrawer from './navigation/CustomDrawer/CustomDrawer';
import OnBoarding from './screens/OnBoarding/OnBoarding';
import SignIn from './screens/Authentication/SignIn';
import ForgotPassword from './screens/Authentication/ForgotPassword';
import SignUp from './screens/Authentication/SignUp';
import Otp from './screens/Authentication/Otp';
import FoodDetail from './screens/Food/FoodDetail';
import MyCart from './screens/Cart/MyCart/MyCartScreen';
import MyCardScreen from './screens/Card/MyCardScreen';
import AddCardScreen from './screens/Card/AddCard/AddCardScreen';
import CheckoutScreen from './screens/Cart/Checkout/CheckoutScreen';
import SuccessScreen from './screens/Cart/SuccessScreen';
import DeliveryStatusScreen from './screens/Delivery/DeliveryStatus/DeliveryStatusScreen';
import MapScreen from './screens/Delivery/Map/MapScreen';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './store/rootReducer';

const Stack = createStackNavigator();

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="Home">
          {/* <Stack.Screen name="Home" component={OnBoarding} /> */}

          <Stack.Screen name="Home" component={OnBoarding} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Otp" component={Otp} />
          <Stack.Screen name="MyCart" component={MyCart} />
          <Stack.Screen name="MyCard" component={MyCardScreen} />
          <Stack.Screen name="AddCard" component={AddCardScreen} />
          <Stack.Screen name="CheckOut" component={CheckoutScreen} />
          <Stack.Screen name="Map" component={MapScreen} />
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
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
