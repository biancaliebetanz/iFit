
import { useState } from 'react';
import { MaskedTextInput } from 'react-native-mask-text';
import {Text, View, StyleSheet, TextInput, Pressable, Image } from 'react-native';

export const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
      <View style={styles.container}>
          <View style={styles.containerTitle}>
            <Image style={styles.title} source={require('../assets/images/logo.png')}/>
          </View>
          <View style={{ display: "flex", flexDirection: "column", gap: 12}}> 
            <View>
              <Text style={styles.label}>E-mail:</Text>
              <MaskedTextInput
                  style={styles.input}
                  placeholder="email@email.com"
                  placeholderTextColor="#d1d1d1"
                  value={email}
                  autoCorrect={false}
                  keyboardType="email-address"
                  onChangeText={(text) => {setEmail(text)}}
              />
            </View>
            <View>
              <Text style={styles.label}>Senha:</Text>
              <TextInput
                  style={styles.input}
                  secureTextEntry={true}
                  placeholder="••••••"
                  placeholderTextColor="#d1d1d1"
                  value={senha}
                  onChangeText={(text) => setSenha(text)}
              />
            </View>
          </View>
          <Pressable onPress={() => navigation.navigate("Catalogo")} style={styles.button}>
            <Text style={styles.text}>Concluir</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Cadastro")} style={styles.button}>
            <Text style={styles.text}>Cadastrar-me</Text>
          </Pressable>
          </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: "10%",
    gap: 18
  },
  containerTitle: {
    position: 'absolute',
    top: 76,
    left: 108,
  },
  title: {
    width: 172,
    height: 82,
    resizeMode: 'contain',
  },
  label: {
    fontSize: 14,
    fontWeight: 600,
    marginBottom: 5
  },
  input: {
    width: '100%',
    padding: 10,
    borderRadius: 10,
    backgroundColor: "transparent",
    boxShadow: "2px 2px #e8e8e8"
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignSelf: 'center',
    width: "100%"
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    color: '#ffffff',
  },
});
