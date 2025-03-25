import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import UserStack from './UserStack';
import { useSelector } from 'react-redux';

const RootStack = () => {
  const { isAuth } = useSelector((state) => state.user)

  return (
    <NavigationContainer>
        { !isAuth ? <AuthStack/> : <UserStack/> }
    </NavigationContainer>
  )
}

export default RootStack