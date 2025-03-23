import { StyleSheet, Text, View, StatusBar, Pressable } from 'react-native'
import React from 'react'
import { useIsFocused } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Redux/userSlice';

const Account = () => {
  const isFocused = useIsFocused()
  const dispatch = useDispatch()
  const username = useSelector(state => state.user.username)

  return (
    <View className="flex-1 items-center justify-center">
      {isFocused && <StatusBar barStyle="dark-content" backgroundColor="white" />}
      <Text>Logged in as { username }</Text>
      <Pressable className="w-[14%] h-[14%] flex items-center justify-center" onPress={() => dispatch(logout())}>
         <Text>Logout</Text>
      </Pressable>
    </View>
  )
}

export default Account

const styles = StyleSheet.create({})