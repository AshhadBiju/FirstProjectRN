import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
//import LoginScreen from './src/LoginScreen';
//import Verification from './src/Verification';
//import Details from './src/Details';
//import SchoolBoard from './src/SchoolBoard';
import Carousel1 from './src/Tab/Carousel1';

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
const App = () => {
  return (
    <PaperProvider>
      <Carousel1 />
    </PaperProvider>
  );
};
export default App;
