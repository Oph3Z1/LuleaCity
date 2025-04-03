import { Text, View, StatusBar, Pressable, Image } from 'react-native'
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
      <View className="w-full h-full flex items-center relative">
        <Text className="text-4xl font-bold left-[1.5rem] top-[7rem] absolute">Profil</Text>
        <View className="w-[90%] h-[7rem] flex-row items-start justify-start top-[12rem] border-b-[1px] border-[#D6D6D6]">
          <View className="w-[24%] h-[85%] flex items-center justify-center rounded-[50%] bg-[#e4e4e4]">
            <Image source={require('../../../assets/pp.png')} className="w-[85%] h-[85%]" />
          </View>
          <Text className="text-3xl ml-[1.1rem] mt-[1.8rem]">{ username }</Text>
        </View>
        <View className="w-[90%] h-[5rem] flex items-start justify-center top-[14rem] border-b-[1px] border-[#D6D6D6]">
          <Pressable className="w-[28%] h-[80%] flex-row items-center justify-start" onPress={() => dispatch(logout())}>
            <Image className="w-[28px] h-[28px]" source={require('../../../assets/logout-icon-red.png')} />
            <Text className="text-lg ml-[.8rem]">Logga ut</Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

export default Account