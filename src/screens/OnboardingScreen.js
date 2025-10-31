import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton';

const OnboardingScreen = ({ navigation }) => {
  const handleStart = () => {
    navigation.replace('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao LaVo</Text>
      <Text style={styles.description}>
        Encontre lavadores profissionais perto de você ou ofereça seus serviços de lavagem
      </Text>
      <View style={styles.buttonContainer}>
        <CustomButton title="Começar" onPress={handleStart} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#111',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 24,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 20,
  },
});

export default OnboardingScreen;
