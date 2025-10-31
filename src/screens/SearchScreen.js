import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buscar</Text>
      <Text style={styles.description}>
        Tela de busca do LaVo. Encontre lavadores por localização, avaliação e preço.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    lineHeight: 24,
  },
});

export default SearchScreen;
