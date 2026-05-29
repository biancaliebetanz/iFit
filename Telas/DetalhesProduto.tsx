import React from 'react';
import { View, Text, Image, StyleSheet, Pressable, Alert } from 'react-native';

export const DetalhesProduto = ({ route }) => {
  const { produto } = route.params;

  return (
    <View style={styles.container}>
      <Image source={produto.imagem} style={styles.imagem} />

      <Text style={styles.nome}>{produto.nome}</Text>

      <Text style={styles.preco}>
        R$ {produto.preco ?? "Preço a definir"}
      </Text>
      
      <View style={styles.descricaoContainer}>
        <Text style={styles.descricao}>
        {produto.descricao}
      </Text>
      </View>
      
      <Pressable style={styles.botaoCarrinho}
      onPress={() => Alert.alert('Adicionado ao carrinho com sucesso!')}>
        <Text style={styles.botaoTexto}> Adicionar ao carrinho</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  imagem: {
    width: '100%',
    height: 250,
    borderRadius: 10,
  },
  nome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 15,
    
  },
  preco: {
    fontSize: 20,
    color: 'green',
    marginTop: 10,
  },
  descricao: {
    fontSize: 16,

  },
  descricaoContainer:{
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginTop: 16,
  },
  botaoCarrinho:{
    backgroundColor: '#4CAF50',
    padding: '16',
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 24,
  },
  botaoTexto:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  }
});