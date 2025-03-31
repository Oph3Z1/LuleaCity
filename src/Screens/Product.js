import { Text, View, Image, Pressable, ScrollView, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Svg, { Path, G, Defs, Rect, ClipPath } from 'react-native-svg'

const Product = ({ route }) => {
    const navigation = useNavigation()
    const { data } = route.params

    return (
        <View className="flex-1 items-center justify-center">
            <ScrollView className="w-full h-full" horizontal={false} showsVerticalScrollIndicator={false} bounces={false}>
                <View className="w-full h-[22rem] relative">
                    <Image className="w-full h-full absolute" source={data.image}/>
                    <Pressable className="w-[3rem] h-[3rem] flex items-center justify-center rounded-[50%] bg-[#1C1B1F] border-[1px] border-[#323233] top-[5rem] left-[1rem] absolute" onPress={() => navigation.goBack()}>
                        <Image className="w-5 h-5" source={require('../../assets/arrow-left.png')} />
                    </Pressable>
                </View>
                <View className="w-full h-[14rem] flex items-center justify-end">
                    <View className="w-[95%] h-[85%] border-b-[1px] border-[#1c1b1f33] relative">
                        <Text className="text-3xl left-0 top-[-.4rem] absolute">{ data.name }</Text>
                        <View className="w-auto h-6 flex flex-wrap items-center justify-start left-0 top-[2.5rem] absolute">
                            <Svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <G clip-path="url(#clip0_8_40)">
                                    <Path d="M9 12.9525L13.635 15.75L12.405 10.4775L16.5 6.93L11.1075 6.4725L9 1.5L6.8925 6.4725L1.5 6.93L5.595 10.4775L4.365 15.75L9 12.9525Z" fill="black"/>
                                </G>
                                <Defs>
                                    <ClipPath id="clip0_8_40">
                                    <Rect width="18" height="18" fill="black"/>
                                    </ClipPath>
                                </Defs>
                            </Svg>
                            <Text className="text-[14.5px] ml-2">{ data.rating.toFixed(1) }</Text>
                        </View>
                        <Text className="left-0 top-[4.5rem] absolute text-[#000000c9]">{ data.description }</Text>
                        <View className="w-auto h-6 flex flex-wrap items-center justify-start left-0 bottom-[.5rem] absolute">
                            <Svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <G opacity="0.75" clip-path="url(#clip0_9_255)">
                                    <Path d="M8.9925 1.5C4.8525 1.5 1.5 4.86 1.5 9C1.5 13.14 4.8525 16.5 8.9925 16.5C13.14 16.5 16.5 13.14 16.5 9C16.5 4.86 13.14 1.5 8.9925 1.5ZM9 15C5.685 15 3 12.315 3 9C3 5.685 5.685 3 9 3C12.315 3 15 5.685 15 9C15 12.315 12.315 15 9 15Z" fill="black"/>
                                    <Path d="M9.375 5.25H8.25V9.75L12.1875 12.1125L12.75 11.19L9.375 9.1875V5.25Z" fill="black"/>
                                </G>
                                <Defs>
                                    <ClipPath id="clip0_9_255">
                                    <Rect width="18" height="18" fill="black"/>
                                    </ClipPath>
                                </Defs>
                            </Svg>
                            <Text className="text-[14.5px] ml-2">Opening - 10:30</Text>
                        </View>
                    </View>
                </View>
                <View className="w-full h-[14rem] flex items-center justify-end">
                    <View className="w-[95%] h-[85%] flex items-center justify-center border-b-[1px] border-[#1c1b1f33] relative">
                        <Text className="text-2xl left-0 top-[-.4rem] absolute">Betygsätt</Text>
                        <Text className="text-[12px] left-0 top-[1.5rem] absolute text-[#4d4c4c]">Berätta för andra vad du tycker...</Text>
                        <View className="w-full h-[30%] flex-row items-center justify-between">
                            {[...Array(5)].map((v, k) => (
                                <Svg key={k} width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <G clip-path="url(#clip0_9_296)">
                                        <Path d="M29.3332 12.32L19.7465 11.4933L15.9998 2.66667L12.2532 11.5067L2.6665 12.32L9.9465 18.6267L7.75984 28L15.9998 23.0267L24.2398 28L22.0665 18.6267L29.3332 12.32ZM15.9998 20.5333L10.9865 23.56L12.3198 17.8533L7.89317 14.0133L13.7332 13.5067L15.9998 8.13334L18.2798 13.52L24.1198 14.0267L19.6932 17.8667L21.0265 23.5733L15.9998 20.5333Z" fill="black"/>
                                    </G>
                                    <Defs>
                                        <ClipPath id="clip0_9_296">
                                        <Rect width="32" height="32" fill="black"/>
                                        </ClipPath>
                                    </Defs>
                                </Svg>
                            ))}
                        </View>
                        <Text className="text-[16px] left-0 bottom-[.5rem] absolute text-[#EA6300]">Skriv ett omdöme</Text>
                    </View>
                </View>
                <View className="w-full h-[18rem] flex items-center justify-end">
                    <View className="w-[95%] h-[85%] flex items-center justify-center relative mb-6">
                        <Text className="text-2xl left-0 top-[-.4rem] absolute">Kontakta Oss</Text>
                        {data.contact?.website && (
                            <TouchableOpacity className="left-0 top-[1.5rem] absolute" onPress={() => Linking.openURL(data.contact.website)}>
                                <Text className="text-[12px] text-[#EA6300] underline">Klicka för att gå till {data.name}</Text>
                            </TouchableOpacity>
                        )}
                        {data.address && Object.values(data.address).some(value => value) && (
                            <View className="w-auto h-auto left-0 top-[5rem] absolute">
                                <Text className="text-black text-lg font-bold mb-2">Adress</Text>
                                {data.address.company && <Text className="text-black text-sm">{data.address.company}</Text>}
                                {data.address.orgNr && <Text className="text-black text-sm">Org.nr: {data.address.orgNr}</Text>}
                                {data.address.street && <Text className="text-black text-sm">{data.address.street}</Text>}
                                {data.address.box && <Text className="text-black text-sm">{data.address.box}</Text>}
                                {data.address.city && <Text className="text-black text-sm">{data.address.city}</Text>}
                            </View>
                        )}
                        {data.contact && Object.values(data.contact).some(value => value) && (
                            <View className="w-auto h-auto right-0 top-[5rem] absolute">
                                <Text className="text-black text-lg font-bold mb-2">Kontaktinformation</Text>
                                {data.contact.email && <Text className="text-black text-sm">E-post: {data.contact.email}</Text>}
                                {data.contact.phone && <Text className="text-black text-sm">Växel: {data.contact.phone}</Text>}
                            </View>
                        )}
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Product