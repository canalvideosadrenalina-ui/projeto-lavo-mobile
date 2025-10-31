import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Perfil</Text>
      <Text style={styles.description}>
        Tela de perfil do LaVo. Gerencie suas informações pessoais, configurações e preferências.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
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

export default ProfileScreen;
