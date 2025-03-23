import { StyleSheet, Text, View, Image, TextInput, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, Platform, Pressable } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { signup } from '../Redux/userSlice';

const Signup = ({navigation}) => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")

  // Redux states
  const dispatch = useDispatch()
  
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
                    <Text className="text-[#4b4b4b] text-3xl top-3 absolute">Signup</Text>
                    <TextInput className={`w-[80%] ${Platform.OS == 'ios' ? 'h-[12%]' : 'h-14'} text-center border-[.1rem] border-[#D1D1D1] rounded-[.9rem] ${isKeyboardVisible ? 'top-[5rem]' : 'top-[7rem]'} absolute`} placeholder='Username' onChangeText={(value) => setUsername(value)} value={username}/>
                    <TextInput className={`w-[80%] ${Platform.OS == 'ios' ? 'h-[12%]' : 'h-14'} text-center border-[.1rem] border-[#D1D1D1] rounded-[.9rem] ${isKeyboardVisible ? 'top-[10rem]' : 'top-[12rem]'} absolute`} placeholder='Email' onChangeText={(value) => setEmail(value)} value={email}/>
                    <TextInput className={`w-[80%] ${Platform.OS == 'ios' ? 'h-[12%]' : 'h-14'} text-center border-[.1rem] border-[#D1D1D1] rounded-[.9rem] ${isKeyboardVisible ? 'top-[15rem]' : 'top-[17rem]'} absolute`} placeholder='Password' secureTextEntry={true} onChangeText={(value) => setPassword(value)} value={password}/>
                    <Pressable className={`w-[80%] ${Platform.OS == 'ios' ? 'h-[12%]' : 'h-14'} flex items-center justify-center text-center bg-[#EA6300] rounded-[.9rem] ${isKeyboardVisible ? 'top-[22rem]' : 'top-[24rem]'} absolute`} onPress={() => dispatch(signup({email, password, username}))}>
                        <Text className="text-white">Signup</Text>
                    </Pressable>
                    <Pressable className={`w-auto h-auto flex items-center justify-center text-center rounded-[.9rem] top-[28rem] absolute`} onPress={() => navigation.goBack()}>
                        <Text className="text-[#000000] text-m">Already have an account? Log in</Text>
                    </Pressable>
                </View>
            </View>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default Signup

const styles = StyleSheet.create({})