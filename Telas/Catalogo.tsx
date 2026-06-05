import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList, TextInput } from 'react-native';
import { Categorias, Produtos } from '../Dados.js';
import { Categoria } from '../components/Categoria.js';
import { Produto } from '../components/Produto.js';
import { Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const screenWidth = Dimensions.get('window').width;

export const Catalogo = ({ navigation }) => {
  const [search, setSearch] = useState('');

  const produtosFiltrados = Produtos.filter(produto =>
    produto.nome.toLowerCase().includes(search.toLowerCase()) ||
    produto.descricao.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>

      {/* Header */}
      <View style={styles.headerGap}>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>iFit</Text>
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
          <Ionicons name="search" size={20} color="#999" />
          <TextInput
            returnKeyType="search"
            style={styles.searchInput}
            placeholder="Pesquisar"
            value={search}
            onChangeText={setSearch}
          />
        </View>
      </View>

      {/* Lista de produtos */}
      <FlatList
        data={produtosFiltrados}
        //renderItem={({ item }) => <Produto item={item} />}
        renderItem={({item}) =>(
          <Produto
            item={item}
            navigation={navigation}
          />
        )}
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
        backgroundColor: '#fff',
    },
    headerGap: {
        gap: 20,
        marginBottom: 20,
        paddingTop: 10
    },
    containerTitle: {
        gap: 5,
    },
    title: {
        fontSize: 20,
        fontWeight: '800',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 18,
        textAlign: 'center',
    },
    horizontalListContent: {
        gap: 12,
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
