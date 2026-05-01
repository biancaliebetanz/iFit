
import { useState } from 'react';
import { MaskedTextInput } from 'react-native-mask-text';
import {Text, View, StyleSheet, TextInput, Pressable,  } from 'react-native';

export const Cadastro = ({ navigation }) => {
  const [nomeCompleto, setNomeCompleto] = useState('Valor inicial');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmacaoSenha, setConfirmacaoSenha] = useState('');

  return (
      <View style={styles.container}>
          <View style={styles.containerTitle}>
            <Text style={styles.title}>iFit</Text>
            <Text style={styles.subtitle}>Crie seu cadastro</Text>
          </View>
          <View style={{ display: "flex", flexDirection: "column", gap: 12}}> 
            <View>
              <Text style={styles.label}>Nome completo:</Text>
              <TextInput
                  style={styles.input}
                  placeholder="Insira seu nome..."
                  placeholderTextColor="#d1d1d1"
                  onChangeText={(text) => setNomeCompleto(text)}
              />
              <Text>{cpf}</Text>
            </View>
            <View>
              <Text style={styles.label}>CPF:</Text>
              <MaskedTextInput
                style={styles.input}
                mask="999.999.999-99" 
                value={cpf}
                onChangeText={(text) => {setCpf(text)}}
                placeholder="000.000.000-00"
                placeholderTextColor="#d1d1d1"
              />
            </View>
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
              <Text style={styles.label}>Telefone:</Text>
              <MaskedTextInput
                  style={styles.input}
                  placeholderTextColor="#d1d1d1"
                  mask="(99) 99999-9999"
                  value={telefone}
                  onChangeText={(text) => {setTelefone(text)}}
                  placeholder="(11) 99999-9999"
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
            <View>
              <Text style={styles.label}>Confirme sua senha:</Text>
              <TextInput
                  style={styles.input}
                  secureTextEntry={true}
                  placeholder="••••••"
                  placeholderTextColor="#d1d1d1"
                  value={confirmacaoSenha}
                  onChangeText={(text) => setConfirmacaoSenha(text)}
              />
            </View>
          </View>
          <Pressable onPress={() => navigation.navigate("Catalogo")} style={styles.button}>
            <Text style={styles.text}>Concluir</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Login")} style={styles.button}>
            <Text style={styles.text}>Já tenho Login</Text>
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
  title: {
    fontSize: 20,
    fontWeight: '800',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
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
