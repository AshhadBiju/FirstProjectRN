import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Login from './src/Login';
import Flexbox from './src/Flexbox';
import Home from './src/Drawer/Home';
import Profile from './src/Drawer/Profile';
import DrawerContent from './src/Drawer/DrawerContent';
import AboutUs from './src/Drawer/AboutUs';
import Settings from './src/Drawer/Settings';
import Cart from './src/Tab/Cart';
import Category from './src/Tab/Category';
import Search from './src/Tab/Search';
import Order from './src/Tab/Order';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createMaterialTopTabNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Flexbox"
        component={Flexbox}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Drawer"
        component={MyDrawer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Tab"
        component={MyTab}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="AboutUs" component={AboutUs} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
}

function MyTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Category" component={Category} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Order" component={Order} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
