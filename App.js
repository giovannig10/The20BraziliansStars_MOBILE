import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: './img/LogoDark'}}/>
      <Text>The 20 brazilian Stars</Text>
      <StatusBar style="auto" />

    <View style={styles.inputs}>
      <TextInput style={styles.text} placeholder='Email:'></TextInput>
      <TextInput style={styles.text} placeholder='Senha:'></TextInput>
    </View>
    <View>
      <Button title='Entrar' color='#B7B8BA'></Button>

    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputs: {
    display: 'flex',
    alignItems: 'left',

     
  },

  text: {
    color: '#9A9999',
    backgroundColor: '#B7B8BA',
    borderRadius: 5,
    width: 348,
    height: 33,
    display: 'flex',
    textAlign: 'left',
    margin: 7,
  },

});
