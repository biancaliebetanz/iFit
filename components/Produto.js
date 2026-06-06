import {Text, View, StyleSheet, Pressable, Image } from 'react-native';
import { Dimensions } from 'react-native';
const screenWidth = Dimensions.get('window').width;

import { Categorias } from '../Dados'

export const Produto = ({ item, navigation }) => {
  const categoriaInfo = Categorias.find(cat => cat.id === item.idCategoria);

  return (
    <Pressable onPress={() => //alert(item.descricao === "" ? "Produto sem descrição" : item.descricao)}>
      navigation.navigate('DetalhesProduto', {
        produto:item
      })
    }>
      <View style={styles.containerProduto}>
        <Text 
          style={[
            styles.etiqueta, 
            { backgroundColor: categoriaInfo ? categoriaInfo.cor : 'green' }
          ]}
        >
          {categoriaInfo ? categoriaInfo.etiqueta : "Geral"}
        </Text>
        <Image style={styles.tinyLogo} source={item.imagem} />
        <Text style={styles.paragraph}>{item.nome}</Text>
        <Text style={[styles.paragraph, {color: "green"}]}>{item.preco ?? "Preço a definir"}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  containerProduto: {
    backgroundColor: '#fff',
    alignItems: 'center',
    borderRadius: 10,
    overflow: "hidden",
    borderColor: 'white',
    width: 180,
    height: 240,
    boxShadow: "0 2px 2px #e8e8e8"
  },
  paragraph: {
      padding: 5,
      width: "100%",
      fontSize: 14,
      color: '#000',
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: 'transparent',
  },
  etiqueta: {
      padding: 5,
      width: "100%",
      fontSize: 10,
      color: '#fff',
      fontWeight: 'bold',
      textAlign: 'center',
  },
  tinyLogo: {
      width: 180,
      height: 160,
      objectFit: "cover"
}
  })