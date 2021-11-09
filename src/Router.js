import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import SignUp from './pages/SignUp/SignUp';
import Account from './pages/Account/Account';

import List from './pages/List/List';

import ListIcon from './assets/svg/List.svg';
import AccountIcon from './assets/svg/Account.svg';

import FlashMessage from 'react-native-flash-message';

import CartProvider from './context/CartProvider/CartProvider';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AccountStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SignUpPage" component={SignUp} />
      <Stack.Screen name="AccountPage" component={Account} />
    </Stack.Navigator>
  );
};
const Router = () => {
  return (
    <CartProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: {
              backgroundColor: '#FAFAFA',
              justifyContent: 'space-evenly',
              paddingHorizontal: 50,
              minHeight: 70,
              paddingTop: 13,
              paddingBottom: 5,
            },
            tabBarHideOnKeyboard: true,
          }}>
          <Tab.Screen
            name="ListPage"
            component={List}
            options={{
              tabBarIcon: ({focused}) => <ListIcon />,
              tabBarLabel: 'List',
              /*  tabBarActiveTintColor: '#000000', */
              tabBarLabelStyle: {
                color: '#000000',
                fontSize: 12,
                fontWeight: '500',
                paddingTop: 13,
                paddingBottom: 8,
              },
            }}
          />
          <Tab.Screen
            name="SignUp"
            component={AccountStack}
            options={{
              tabBarIcon: ({focused}) => <AccountIcon />,
              tabBarLabel: 'Account',
              /* tabBarActiveTintColor: '#000000', */
              paddingTop: 13,
              tabBarLabelStyle: {
                color: '#000000',
                fontSize: 12,
                fontWeight: '500',
                paddingTop: 13,
                paddingBottom: 8,
              },
            }}
          />
        </Tab.Navigator>
        <FlashMessage position="top" />
      </NavigationContainer>
    </CartProvider>
  );
};

export default Router;
