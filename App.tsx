import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import LoginScreen from './src/LoginScreen';

const App = () => {
  return (
    <PaperProvider>
      <LoginScreen />
    </PaperProvider>
  );
};

export default App;
