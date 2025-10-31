import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BookingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agendamentos</Text>
      <Text style={styles.description}>
        Tela de agendamentos do LaVo. Veja seus serviços agendados e histórico.
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

export default BookingScreen;
