import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import CustomDrawer from './navigation/CustomDrawer/CustomDrawer';
import OnBoarding from './screens/OnBoarding/OnBoarding';
import SignIn from './screens/Authentication/SignIn';
import ForgotPassword from './screens/Authentication/ForgotPassword';
import SignUp from './screens/Authentication/SignUp';
import Otp from './screens/Authentication/Otp';
// import FoodDetail from './screens/Food/FoodDetail';
// import MyCart from './screens/Cart/MyCart/MyCartScreen';
// import MyCardScreen from './screens/Card/MyCardScreen';
// import AddCardScreen from './screens/Card/AddCard/AddCardScreen';
// import CheckoutScreen from './screens/Cart/Checkout/CheckoutScreen';
// import SuccessScreen from './screens/Cart/SuccessScreen';
// import DeliveryStatusScreen from './screens/Delivery/DeliveryStatus/DeliveryStatusScreen';
// import MapScreen from './screens/Delivery/Map/MapScreen';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './store/rootReducer';
import {AuthProvider} from './context/AuthContext';
import Routes from './navigation/Routes';

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
  return (
    <AuthProvider>
      <Provider store={store}>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </Provider>
    </AuthProvider>
  );
};

export default App;
