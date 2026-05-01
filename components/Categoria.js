
import {Text, View, StyleSheet, Pressable, Image } from 'react-native';
import { Dimensions } from 'react-native';
const screenWidth = Dimensions.get('window').width;

export const Categoria = ({ item }) => (
        <Pressable onPress={() => alert(item.descricao === "" ? "Categoria sem descrição" : item.descricao)}>
            <View style={{...styles.containerCategoria, backgroundColor: item.cor ?? '#ffde9c'}}>
                <Image
                    style={styles.tinyLogo}
                    source={item.imagem}
                />
                <Text style={styles.paragraph}>{item.nome}</Text>
            </View>
        </Pressable>
    );

const styles = StyleSheet.create({
  containerCategoria: {
    padding: 0,
    alignItems: 'flex-start',
    gap: 12,
    borderRadius: 10,
    overflow: "hidden",
    borderColor: 'white',
    width: screenWidth * 0.9,
    height: 200,
    boxShadow: "2px 2px #e8e8e8"
  },
  paragraph: {
      padding: 5,
      width: "100%",
      fontSize: 14,
      color: '#fff',
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: 'transparent',
  },
  tinyLogo: {
      width: "100%",
      height: 150,
      objectFit: "cover"
}
  })