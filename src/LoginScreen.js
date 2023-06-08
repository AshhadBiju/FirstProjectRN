/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Image} from 'react-native';
import {StyleSheet} from 'react-native';
import {TextInput, Button} from 'react-native-paper';

const LoginScreen = () => {
  const [phoneNumber, setPhoneNumber] = React.useState('');

  const handleLogin = () => {
    // Implement your login logic here
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/inmakesLogo.png')}
        style={styles.logo}
      />
      <TextInput
        label="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        mode="outlined"
        keyboardType="phone-pad"
      />
      <Button mode="contained" onPress={handleLogin}>
        Login
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  logo: {
    width: 150,
    height: 25,
    marginBottom: 19,
  },
});

export default LoginScreen;
