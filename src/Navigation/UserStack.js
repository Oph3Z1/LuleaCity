import React from 'react'
import { Home } from '../Screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const UserStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Home'>
      <Stack.Screen name='Home' component={Home} />
    </Stack.Navigator>
  )
}

export default UserStack