import React from 'react'
import { Home, Product } from '../Screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const UserStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Home'>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Product' component={Product} />
    </Stack.Navigator>
  )
}

export default UserStack