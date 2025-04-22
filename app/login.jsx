import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, StatusBar, Alert } from 'react-native';
import { router } from 'expo-router';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Validação básica
    if (email && password) {
      console.log('Usuário logado:', email);
      
      router.replace('/');
    } else {
      // Mostra alerta se campos estiverem vazios
      Alert.alert(
        "Dados incompletos",
        "Por favor, preencha email e senha para continuar.",
        [{ text: "OK" }]
      );
    }
  };

  const handleForgotPassword = () => {
    Alert.alert(
      "Recuperação de Senha",
      "Um email de recuperação será enviado para você.",
      [{ text: "OK" }]
    );
  };

  const handleSocialLogin = (provider) => {
    Alert.alert(
      "Login Social",
      `Login com ${provider} será implementado em breve.`,
      [{ text: "OK" }]
    );
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/img/Logo.png')} style={styles.logo} />
      <View style={styles.bar}></View>
      
      <Text style={styles.title}>THE 20 BRAZILIAN STARS</Text>
      <StatusBar style="auto" />

      <View style={styles.card1}>
        <View style={styles.inputs}>
          <TextInput
            style={styles.text}
            placeholder='Email:'
            placeholderTextColor="#9A9999"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.text}
            placeholder='Senha:'
            placeholderTextColor="#9A9999"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.placeholder}>ENTRAR</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleForgotPassword}>
            <Text style={styles.forgotPassword}>ESQUECEU A SENHA?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.logos}>
          <TouchableOpacity onPress={() => handleSocialLogin('Google')}>
            <Image source={require('../assets/img/googleLogo.png')} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSocialLogin('Facebook')}>
            <Image source={require('../assets/img/facebookLogo.png')} style={styles.image}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSocialLogin('Apple')}>
            <Image source={require('../assets/img/appleLogo.png')} style={styles.image}/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  button: {
    width: 171,
    height: 39,
    display: "flex",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 2,
    justifyContent: "center",
    borderColor: "#25406A",
    fontSize: 20,
    placeholderTextColor: "#25406A"
  },
  placeholder: {
    color: "#25406A",
    fontSize: 15,
  },
  logo: {
    width: 120,
    height: 100,
    marginBottom: 5,
  },
  
  bar: {
    width: 180,
    height: 4,
    backgroundColor: "#25406A",
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#25406A',
  },

  inputs: {
    width: '80%',
    marginBottom: 20,
    margin: 35
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
    fontSize: 10,
    fontWeight: 'bold',
  },

  image: {
    width: 35,
    height: 35, 
  },

  logos: {
    flexDirection: 'row',
    gap: 30,
    marginTop: 20,
    backgroundColor: '#CCCCCC',
    borderRadius: 10,
    justifyContent: 'center',
    margin: 50,
    width: 250,
    height: 50,
    alignItems: 'center'
  },

  card1: {
    borderRadius: 10,
    width: 350,
  }
});

export default Login;