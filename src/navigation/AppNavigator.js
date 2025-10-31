// src/navigation/AppNavigator.js

import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

// Importando TODAS as suas telas da pasta screens
// (Baseado no seu screenshot image_014985.png)
import SplashScreen from '../screens/SplashScreen'
import OnboardingScreen from '../screens/OnboardingScreen'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import HomeScreen from '../screens/HomeScreen'
import SearchScreen from '../screens/SearchScreen'
import BookingScreen from '../screens/BookingScreen'
import ProfileScreen from '../screens/ProfileScreen'

const Stack = createStackNavigator()

// Este é o "mapa" principal do seu app
function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // Começamos pela SplashScreen
        initialRouteName="Splash"
        // Remove o cabeçalho branco padrão de todas as telas
        screenOptions={{ headerShown: false }}
      >
        {/* Telas do fluxo inicial */}
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />

        {/* Telas de Autenticação */}
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />

        {/* Telas principais do App (após o login) */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Booking" component={BookingScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />

        {/* Faltou a "RegisterScreen" no seu screenshot, mas adicionei aqui caso precise */}
        {/* Se o nome do arquivo for diferente (ex: RegisterScreen.js), ajuste o 'import' acima */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator