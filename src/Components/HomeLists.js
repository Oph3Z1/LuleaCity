import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import Svg, { Path } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

const HomeLists = ({HeaderText, ArrayCall, Price}) => {
  const navigation = useNavigation()

  return (
    <View className="w-full h-[17.4rem] flex items-center justify-center relative">
      <Text className=" left-[1.7rem] top-0 absolute font-semibold">{ HeaderText }</Text>
      <View className="w-[95%] h-[75%] ml-[1.4rem] mt-[.8rem]">
        <ScrollView className="w-full h-full" horizontal={true} showsHorizontalScrollIndicator={false}>
          { ArrayCall.map((v, k) => (
            <TouchableOpacity key={k} className="w-[12rem] h-full flex flex-col mr-[1.1rem] border-[1px] border-[#E8E8E8] rounded-[.6rem]" onPress={() => navigation.navigate('Product', { data: v })}>
              <View className="w-full h-[67%] rounded-t-[.6rem] relative">
                <Image className="w-full h-full rounded-t-[.55rem]" source={v.image} resizeMode='cover' />
              </View>
              <View className="w-full h-[33%] flex items-center justify-center relative">
                <View className="w-[29%] h-[16%] flex flex-row justify-between left-[.7rem] top-[1.1rem] absolute">
                  {[...Array(v.rating)].map((v, k) => (
                    <Svg key={k} xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <Path d="M1.53492 7.75794C1.68263 7.8696 1.86994 7.82998 2.09328 7.66789L3.9989 6.27019L5.90812 7.66789C6.13146 7.82998 6.31517 7.8696 6.46647 7.75794C6.61416 7.64626 6.64659 7.46255 6.55652 7.19958L5.80363 4.95895L7.72726 3.57566C7.95064 3.41717 8.04065 3.25147 7.98302 3.07135C7.9254 2.89844 7.75609 2.81199 7.4787 2.81558L5.1192 2.83L4.40236 0.578556C4.3159 0.311982 4.18621 0.178711 3.9989 0.178711C3.81518 0.178711 3.68549 0.311982 3.59904 0.578556L2.88218 2.83L0.522683 2.81558C0.245305 2.81199 0.0759912 2.89844 0.0183545 3.07135C-0.0428787 3.25147 0.0507848 3.41717 0.274123 3.57566L2.19774 4.95895L1.44487 7.19958C1.3548 7.46255 1.38723 7.64626 1.53492 7.75794Z" fill="#494949"/>
                    </Svg>
                  ))}
                </View>
                <Text className="text-[.75rem] font-semibold left-[4.4rem] top-[1rem] absolute">{ v.rating.toFixed(1) }</Text>
                <Text className="text-[.75rem] font-semibold left-[.7rem] top-[2.3rem] absolute">{ v.name }</Text>
                { Price && (<Text className="text-[.75rem] font-semibold right-[.6rem] top-[2.3rem] absolute">${ v.price }/N</Text>) }
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  )
}

export default HomeLists