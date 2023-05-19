import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
import Chats from './src/BottomTab/Chats';
import Calls from './src/BottomTab/Calls';
import Status from './src/BottomTab/Status';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createMaterialTopTabNavigator();
const BottomTab = createBottomTabNavigator();

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
      <Stack.Screen
        name="BottomTab"
        component={MyBottomTab}
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

function MyTab(): JSX.Element {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {fontSize: 12},
        tabBarItemStyle: {width: 100},
        tabBarStyle: {backgroundColor: '#ffff'},
      }}>
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({focused}) =>
            focused ? (
              <Icon name="shopping-cart" size={24} color="blue" />
            ) : (
              <Icon name="shopping-cart" size={24} color="gray" />
            ),
        }}
      />
      <Tab.Screen
        name="Category"
        component={Category}
        options={{
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({focused}) =>
            focused ? (
              <Icon name="category" size={24} color="blue" />
            ) : (
              <Icon name="category" size={24} color="gray" />
            ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({focused}) =>
            focused ? (
              <Icon name="search" size={24} color="blue" />
            ) : (
              <Icon name="search" size={24} color="gray" />
            ),
        }}
      />
      <Tab.Screen
        name="Order"
        component={Order}
        options={{
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({focused}) =>
            focused ? (
              <Icon name="shopping-bag" size={24} color="blue" />
            ) : (
              <Icon name="shopping-bag" size={24} color="gray" />
            ),
        }}
      />
    </Tab.Navigator>
  );
}

function MyBottomTab() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarLabelStyle: {fontSize: 12},
        tabBarItemStyle: {width: 100},
        tabBarStyle: {backgroundColor: '#fff'},
      }}>
      <BottomTab.Screen
        name="Calls"
        component={Calls}
        options={{
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({focused}) =>
            focused ? (
              <Icon name="call" size={24} color="green" />
            ) : (
              <Icon name="call" size={24} color="gray" />
            ),
        }}
      />
      <BottomTab.Screen
        name="Chats"
        component={Chats}
        options={{
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({focused}) =>
            focused ? (
              <Icon name="chat" size={24} color="green" />
            ) : (
              <Icon name="chat" size={24} color="gray" />
            ),
        }}
      />
      <BottomTab.Screen
        name="Status"
        component={Status}
        options={{
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({focused}) =>
            focused ? (
              <Icon name="cached" size={24} color="green" />
            ) : (
              <Icon name="cached" size={24} color="gray" />
            ),
        }}
      />
    </BottomTab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
