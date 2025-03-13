import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: './img/LogoDark'}}/>
      <View>      </View>
      <Text>The 20 brazilian Stars</Text>
      <StatusBar style="auto" />


    <View style={styles.inputs}>
      <TextInput style={styles.text} placeholder='Email:'></TextInput>
      <TextInput style={styles.text} placeholder='Senha:'></TextInput>
    </View>
    <View>
      <Button style={styles.botao} title='Entrar' color='#25406A'></Button>
      <Text>Esqueceu a senha?</Text>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D0D0D0',
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
    paddingLeft: 4,
    fontSize: 25
  },

  botao: {
    width: 171,
    height: 39,
    color: '#25406A',
  }

});
