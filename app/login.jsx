import React from 'react';
import { View, Text, Image, StyleSheet, TextInput, Button, StatusBar } from 'react-native';

const Login = () => {
  return (
    <View style={styles.container}>
      <Image source={require('./img/LogoDark.png')} style={styles.logo} />
      
      <Text style={styles.title}>The 20 Brazilian Stars</Text>
      <StatusBar style="auto" />

      <View style={styles.inputs}>
        <TextInput style={styles.text} placeholder='Email:' placeholderTextColor="#9A9999" />
        <TextInput style={styles.text} placeholder='Senha:' placeholderTextColor="#9A9999" secureTextEntry />
      </View>

      <View style={styles.buttonContainer}>
        <Button title='Entrar' color='#25406A' />
        <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D0D0D0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputs: {
    width: '100%',
    marginBottom: 20,
  },
  text: {
    backgroundColor: '#B7B8BA',
    borderRadius: 5,
    width: '100%',
    height: 40,
    paddingLeft: 10,
    fontSize: 18,
    marginBottom: 10,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  forgotPassword: {
    marginTop: 10,
    color: '#25406A',
    textDecorationLine: 'underline',
  },
});

export default Login;
