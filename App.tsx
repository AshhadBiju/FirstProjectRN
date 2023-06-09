import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import LoginScreen from './src/LoginScreen';
import Verification from './src/Verification';

const App = () => {
  return (
    <PaperProvider>
      <Verification />
    </PaperProvider>
  );
};

export default App;
