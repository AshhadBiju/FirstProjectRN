import 'react-native-gesture-handler';
import React from 'react';
//import {Provider as PaperProvider} from 'react-native-paper';

import {NavigationContainer} from '@react-navigation/native';
import {Text} from 'react-native-paper';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './components/Home';
import colors from './assets/colors/colors';
import Icon from 'react-native-vector-icons/Ionicons';
//import LoginScreen from './src/LoginScreen';
//import Verification from './src/Verification';
//import Details from './src/Details';
//import SchoolBoard from './src/SchoolBoard';
//import Carousel1 from './src/Tab/Carousel1';
//import Carousel2 from './src/Tab/Carousel2';
//import Carousel3 from './src/Tab/Carousel3';
//import Carousel4 from './src/Tab/Carousel4';
/*const App = () => {
  return (
    <PaperProvider>
      <Details />
    </PaperProvider>
  );
};*/
/*const App = () => {
  return (
    <PaperProvider>
      <SchoolBoard />
    </PaperProvider>
  );
};*/
/*const App = () => {
  return (
    <PaperProvider>
      <Carousel4 />
    </PaperProvider>
  );
};*/
Icon.loadFont();
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
