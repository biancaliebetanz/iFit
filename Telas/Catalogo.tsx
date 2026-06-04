import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
} from 'react-native';

import { Categorias, Produtos } from '../Dados.js';
import { Categoria } from '../components/Categoria.js';
import { Produto } from '../components/Produto.js';

export const Catalogo = () => {
  const [search, setSearch] = useState('');

  const produtosFiltrados = Produtos.filter(produto =>
    produto.nome.toLowerCase().includes(search.toLowerCase()) ||
    produto.descricao.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.headerGap}>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>iFit</Text>

          <Text style={styles.subtitle}>
            Encontre a opção ideal para você
          </Text>
        </View>

        <FlatList
          data={Categorias}
          renderItem={({ item }) => <Categoria item={item} />}
          keyExtractor={item => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalListContent}
        />
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          returnKeyType="search"
          style={styles.searchInput}
          placeholder="🔍"
          value={search}
          onChangeText={setSearch}
        />
      </View>

      <FlatList
        data={produtosFiltrados}
        renderItem={({ item }) => <Produto item={item} />}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}
        contentContainerStyle={{
          gap: 12,
          paddingBottom: 20,
        }}
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
    paddingTop: 10,
    paddingHorizontal: 20,
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

  searchInput: {
    height: 50,
    backgroundColor: '#f2f2f2',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },

  searchContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
  },
});
