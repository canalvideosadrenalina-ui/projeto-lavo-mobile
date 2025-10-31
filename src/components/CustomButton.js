import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({ title, onPress, variant = 'primary' }) => {
  return (
    <TouchableOpacity
      style={[styles.button, variant === 'secondary' && styles.buttonSecondary]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={[styles.buttonText, variant === 'secondary' && styles.buttonTextSecondary]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonSecondary: {
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#007AFF',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonTextSecondary: {
    color: '#007AFF',
  },
});

export default CustomButton;
