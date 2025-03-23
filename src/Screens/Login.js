import { StyleSheet, Text, View, Image, TextInput, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, Platform, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { login, autoLogin } from '../Redux/userSlice'

const Login = ({navigation}) => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // Redux states
  const dispatch = useDispatch()

  // Detect auto login
  useEffect(() => {
    dispatch(autoLogin())
  }, [])

  React.useEffect(() => {
    const keyboardWillShowListener = Keyboard.addListener('keyboardWillShow', () => {
      setKeyboardVisible(true);
    });
    
    const keyboardWillHideListener = Keyboard.addListener('keyboardWillHide', () => {
      setKeyboardVisible(false);
    });
  
    return () => {
      keyboardWillShowListener.remove();
      keyboardWillHideListener.remove();
    };
  }, []);

  return (
    <KeyboardAvoidingView className="w-full h-full bg-white">
        <TouchableWithoutFeedback className="w-full h-full" onPress={Keyboard.dismiss}>
            <View className="w-full h-full flex flex-col">
                <View className={`w-full ${isKeyboardVisible ? 'h-[30%]' : 'h-[40%]'} flex items-center justify-center relative`}>
                    <Image className="w-full h-full rounded-b-[1.5rem]" source={require('../../assets/luleaimg.jpg')}/>
                    <Text className={`${Platform.OS == 'android' ? 'text-[2rem]' : 'text-[2.8rem]'} text-white absolute`}>Welcome to Luleå!</Text>
                </View>
                <View className={`w-full ${isKeyboardVisible && Platform.OS != 'ios' ? 'h-[70%]' : 'h-[50%]'} flex flex-col items-center justify-center relative`}>
                    <Text className="text-[#4b4b4b] text-3xl top-3 absolute">Login</Text>
                    <TextInput className={`w-[80%] ${Platform.OS == 'ios' ? 'h-[12%]' : 'h-14'} text-center border-[.1rem] border-[#D1D1D1] rounded-[.9rem] top-[7rem] absolute`} placeholder='Email' onChangeText={(value) => setEmail(value)} value={email}/>
                    <TextInput className={`w-[80%] ${Platform.OS == 'ios' ? 'h-[12%]' : 'h-14'} text-center border-[.1rem] border-[#D1D1D1] rounded-[.9rem] top-[12rem] absolute`} placeholder='Password' secureTextEntry={true} onChangeText={(value) => setPassword(value)} value={password}/>
                    <Pressable className={`w-[80%] ${Platform.OS == 'ios' ? 'h-[12%]' : 'h-14'} flex items-center justify-center text-center bg-[#EA6300] rounded-[.9rem] top-[19rem] absolute`} onPress={() => dispatch(login({email, password}))}>
                        <Text className="text-white">Login</Text>
                    </Pressable>
                    <Pressable className={`w-auto h-auto flex items-center justify-center text-center rounded-[.9rem] top-[23rem] absolute`} onPress={() => navigation.navigate('Signup')}>
                        <Text className="text-[#000000] text-m">Don't have an account? Sign up</Text>
                    </Pressable>
                </View>
            </View>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default Login

const styles = StyleSheet.create({})