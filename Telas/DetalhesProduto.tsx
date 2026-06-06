import React from 'react';
import { View, Text, Image, StyleSheet, Pressable, Alert , FlatList } from 'react-native';
import { Produtos } from '../Dados.js';
import { Recomendacao } from '../components/Recomendacao.js';
import { Ionicons } from '@expo/vector-icons';

export const DetalhesProduto = ({ route, navigation }) => {
  const { produto } = route.params;

  return (
    <View style={styles.container}>
      <Image source={produto.imagem} style={styles.imagem} />
      <Text style={styles.nome}>{produto.nome}</Text>
      <View style={styles.descricaoContainer}>
        <Text style={styles.descricao}>{produto.descricao}</Text>
        <Text style={styles.ingredientes}>Ingredientes: {produto.ingredientes.length == 0 ? "Não informado" : produto.ingredientes}</Text>
      </View>
      <View style={styles.containerBotao}>
        <Text style={styles.preco}>{produto.preco ? "R$ " + produto.preco : "Preço a definir"}</Text>
        <Pressable style={styles.botaoCarrinho}
        onPress={() => Alert.alert('Adicionado ao carrinho com sucesso!')}>
          <Text style={styles.botaoTexto}> Adicionar ao carrinho</Text>
          <Ionicons name="cart" size={20} color="#fff"/>
        </Pressable>
      </View>
      <Text style={{fontWeight: 600, color: "grey", textAlign: "center"}}>Produtos similares</Text>
      <FlatList
        contentContainerStyle={{ gap: 16, width: "100%" }}
        data={Produtos.filter(
          recomendacao => recomendacao.idCategoria == produto.idCategoria && recomendacao.id != produto.id
        )}
        renderItem={({ item }) => 
          <Recomendacao 
            item={item} 
            navigation={navigation} 
          />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 12
  },
  imagem: {
    width: '100%',
    height: 250,
    borderRadius: 10,
  },
  nome: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 15,
    textAlign: "center"
  },
  preco: {
    backgroundColor: 'green',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    fontSize: 20,
    color: '#fff',
    fontWeight: 600,
  },
  descricao: {
    fontSize: 16,
    textAlign: "justify"
  },
  ingredientes: {
    fontSize: 14,
    color: "grey",
    fontWeight: 500,
    textTransform: "capitalize"
  },
  descricaoContainer:{
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    gap: 12
  },
  containerBotao:{ 
    display: "flex",
    flexDirection: "row",
    gap: 12
  },
  botaoCarrinho:{
    flexGrow: 1,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "center",
    gap: 5,
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#000000',
  },
  botaoTexto:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  }
});