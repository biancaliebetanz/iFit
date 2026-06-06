import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList, TextInput, Image, Keyboard } from 'react-native';
import { Categorias, Produtos, ProdutosQueNaoSaoFavoritos } from '../Dados.js';
import { Categoria } from '../components/Categoria.js';
import { Produto } from '../components/Produto.js';
import { Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const screenWidth = Dimensions.get('window').width;

export const Catalogo = ({ navigation }) => {
  const [search, setSearch] = useState('');
  const [produtos, setProdutos] = useState(Produtos.filter(produto => produto.maisPedido == true));

  const [legenda, setLegenda] = useState('Mais pedidos');

  const filtrar = () => {
    let resultadosPesquisa = [];
    if (search == '') {
      setLegenda('Mais pedidos');
      resultadosPesquisa = Produtos.filter(produto => produto.maisPedido == true)
    } else {
      resultadosPesquisa = Produtos.filter(produto =>
      produto.nome.toLowerCase().includes(search.toLowerCase()) ||
      produto.descricao.toLowerCase().includes(search.toLowerCase()))
      setLegenda('Resultado da pesquisa');
    }
    setProdutos(resultadosPesquisa);
    Keyboard.dismiss();
  }

  return (
    <SafeAreaView style={styles.container}>

      {/* Header */}
      <View style={styles.headerGap}>
        <View style={styles.containerTitle}>
          <Image style={styles.title} source={require('../assets/images/logo.png')}/>
          <Text style={styles.subtitle}>Encontre a opção ideal para você</Text>
        </View>
        <FlatList
          data={Categorias}
          renderItem={({ item }) => <Categoria item={item} />}
          keyExtractor={item => item.id.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalListContent}
        />
      </View>

      {/* Barra de pesquisa */}
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            returnKeyType="search"
            style={styles.searchInput}
            placeholder="Pesquisar"
            value={search}
            onChangeText={setSearch}
            onSubmitEditing={filtrar}
          />
          <Ionicons name="search" size={20} color="#999" onPress={filtrar}/>
        </View>
      </View>

      {/* Lista de produtos */}
      <FlatList
        data={produtos}
        //renderItem={({ item }) => <Produto item={item} />}
        renderItem={({item}) =>(
          <Produto
            item={item}
            navigation={navigation}
          />
        )}
        ListHeaderComponent={<Text style={{fontWeight: 600, color: "grey", textAlign: "center"}}>{legenda}</Text>}
        keyExtractor={item => item.id.toString()}
        numColumns={2} 
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{ justifyContent: 'space-between' }} 
        contentContainerStyle={{ paddingHorizontal: 20, gap: 12, paddingBottom: 20}}
      />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      position: 'relative',
      backgroundColor: '#fff',
  },
  headerGap: {
      gap: 20,
      marginBottom: 20,
      paddingTop: 10,
  },
  containerTitle: {
    display: "flex",
    flexDirection: "row",
    alignItems: 'center',
    width: "100%",
    gap: 5,
    marginBottom: 4,
  },
  title: {
      width: 100,
      height: 50,
      resizeMode: 'contain',
  },
  subtitle: {
      fontSize: 18,
      textAlign: 'center',
      fontWeight: 600,
      color: "#ff9f7f"
  },
  horizontalListContent: {
      gap: 12,
      marginHorizontal: 12
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 12,
  },
  searchInput: {
    flex: 1,
    height: 50,
    fontSize: 16,
    marginLeft: 8,
  },
});
