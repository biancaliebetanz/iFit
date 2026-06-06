import { Text, View, StyleSheet, Pressable, Image } from 'react-native';
import { Categorias } from '../Dados';

export const Recomendacao = ({ item, navigation }) => {
  const categoriaInfo = Categorias.find(cat => cat.id === item.idCategoria);
  const corCategoria = categoriaInfo ? categoriaInfo.cor : '#4CAF50';

  return (
    <Pressable
      onPress={() => navigation.navigate('DetalhesProduto', { produto: item })}
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
    >
      <View style={[styles.imagemMoldura, { backgroundColor: corCategoria }]}>
        <Image
          style={styles.imagem}
          source={item.imagem}
          resizeMode="contain"
        />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.nome} numberOfLines={2}>{item.nome}</Text>
        {item.descricao ? (
          <Text style={styles.descricao} numberOfLines={3}>{item.descricao}</Text>
        ) : null}
      </View>
      <View style={styles.precoContainer}>
        <Text style={styles.preco}>
          {item.preco != null
            ? `R$ ${item.preco.toFixed(2).replace('.', ',')}`
            : 'A definir'}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#FFFFFF',
    width: '100%',
    borderRadius: 10,
    height: 100,
    gap: 12,
    overflow: 'hidden',
  },
  pressed: {
    opacity: 0.50,
  },
  imagemMoldura: {
    width: 100,
    height: 100,
    overflow: 'hidden',
    flexShrink: 0,
    padding: 10,
  },
  imagem: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  infoContainer: {
    width: "45%",
    flexDirection: 'column',
    gap: 2,
    padding: 5
  },
  nome: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1a1a1a',
    lineHeight: 18,
  },
  descricao: {
    fontSize: 12,
    color: '#666',
    lineHeight: 16,
  },
  precoContainer: {
    alignItems: 'flex-end',
    padding: 5,
    flex: 1
  },
  preco: {
    fontSize: 14,
    fontFamily: 'Inter',
    fontWeight: '500',
    color: 'green',
    textAlign: 'right',
    lineHeight: 20,
  },
});
