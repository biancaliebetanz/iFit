import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList } from 'react-native';
import { Categorias, Produtos } from '../Dados.js';
import { Categoria } from '../components/Categoria.js';
import { Produto } from '../components/Produto.js';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export const Catalogo = ({ navigation }) => {
  const Header = () => (
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
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={Produtos}
        renderItem={({ item }) => <Produto item={item} />}
        keyExtractor={item => item.id.toString()}
        ListHeaderComponent={Header}
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
});