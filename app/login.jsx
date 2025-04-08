import React from 'react';
import { View, Text, Image, StyleSheet, TextInput,  TouchableOpacity, StatusBar } from 'react-native';

const Login = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/img/Logo.png')} style={styles.logo} />
      <View style={styles.bar}></View>
      
      <Text style={styles.title}>THE 20 BRAZILIAN STARS</Text>
      <StatusBar style="auto" />

<View style={styles.card1}>
      <View style={styles.inputs}>
        <TextInput style={styles.text} placeholder='Email:' placeholderTextColor="#9A9999" />
        <TextInput style={styles.text} placeholder='Senha:' placeholderTextColor="#9A9999" secureTextEntry />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.placeholder}>ENTRAR</Text>
        </TouchableOpacity>
        <Text style={styles.forgotPassword}>ESQUECEU A SENHA?</Text>
      </View>

      <View style={styles.logos}>
      <Image source={require('../assets/img/googleLogo.png')} style={styles.image} />
      <Image source={require('../assets/img/facebookLogo.png')} style={styles.image}/>
      <Image source={require('../assets/img/appleLogo.png')} style={styles.image}/>
      </View>
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
