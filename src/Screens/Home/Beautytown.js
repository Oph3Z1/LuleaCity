import { Text, View, ScrollView, Image, TouchableOpacity, Linking } from 'react-native'
import React from 'react'

const Lists = [
    {
      title: 'Besök en kyrkstuga i världsarvet Gammelstad',
      description:
        'Välkommen till ett av Sveriges femton världsarv. Landets största och bäst bevarade kyrkstad, med 404 kyrkstugor.\n\nVi utgår från stenkyrkan från 1300-talet och går ungerfär 175 steg för att besöka en liten\nkyrkstuga.\n\nDär berättar guiden om hur och varför kyrkbyn\nkom till, om traditioner och om människorna som vistades där.',
      place: 'Vi samlas vid stenkykans kyrktorn.',
      time: 'cirka 1-1,5 timme',
      price: '120 kronor per person. Max tio personer per guidning.',
      date: '16 april - 8 augusti',
      bookingLink:
        'https://billetto.se/e/besok-en-kyrkstuga-i-varldsarvet-gammelstad-biljetter-1230182?utm_source=organiser&utm_medium=share&utm_campaign=copy_link&utm_content=2',
      image: require('../../../assets/bt-1.png'),
    },
    {
        title: 'Stadsvandring i Luleå: Arkitektur i centrum',
        description:
          'Följ med på en lärorik stadsvandring med fokus\npå arkitektur: I paketet ingår en timmas stadsvandring med arkitektur i fokus samt en\nliten vätskepaus.\n\n\nKända arkitekter som satt sin prägel på Luleå\när tex Lars-Erik Lallerstedt, Ralph Erskine, Fredrik Olaus Lindström. Jugend, nationalromantik, funkis, klassicism, finsk empire. Allt detta bidrar till stadens historia.',
        place: 'Vetenskapens hus i Luleå, Storgatan 53.',
        time: 'cirka 1-1,5 timme',
        price: '170 kronor per person.',
        date: '19 april -8 augusti',
        bookingLink:
          'https://billetto.se/e/stadsvandring-i-lulea-arkitektur-i-centrum-biljetter-1200893?bref=eyJzIjoiYmlsbGV0dG8iLCJtIjoiYmlsbGV0dG8iLCJjIjoiZmluZCIsImNvIjoiM1NFIiwidCI6MTc0MjE1NzA1MX0%3D',
        image: require('../../../assets/bt-2.jpg'),
    },
];

const Beautytown = () => {
  return (
    <View className="flex-1 items-center justify-center relative">
        <View className="w-full h-full flex justify-between">
            <View className="w-full h-[9rem] flex items-center justify-end">
                <Text className="text-3xl mt-[2rem]">Beautytown</Text>
                <Text className="text-[1rem]">Vi vill visa det vackra i Luleå och Fagersta!</Text>
                <Text className="text-[.7rem]">beautytown.se</Text>
            </View>
            <View className="w-full h-[43rem] flex items-center relative">
                <Text className="text-xl top-[1rem] absolute font-bold">Kommande guidningar</Text>
                <ScrollView className="w-full h-[90%] bottom-0 absolute" horizontal={false} showsVerticalScrollIndicator={false} bounces={false}>
                    {Lists.map((v, k) => (
                        <View key={k} className="w-full h-[65rem] flex items-center mb-[1rem]">
                            <View className="w-[90%] h-full bg-[#e9e9e9] relative">
                                <Image className="w-full h-[19rem] top-0 absolute" source={v.image} />
                                <Text className="text-2xl left-4 top-[20rem] absolute">{v.title}</Text>
                                <Text className="font-bold left-4 top-[25rem] absolute">{v.description}</Text>
                                <Text className="font-bold left-4 top-[40rem] absolute">Plats: <Text className="font-normal">{v.place}</Text> </Text>
                                <Text className="font-bold left-4 top-[41.5rem] absolute">Tid: <Text className="font-normal">{v.time}</Text> </Text>
                                <Text className="font-bold left-4 top-[43rem] absolute">Pris inkl. moms: <Text className="font-normal">{v.price}</Text> </Text>
                                <Text className="font-bold left-4 top-[47rem] absolute">Datum: <Text className="font-normal">{v.date}</Text> </Text>
                                <Text className="font-bold left-4 top-[50.5rem] absolute">Endas förboking:</Text>
                                <TouchableOpacity className="left-[9.8rem] top-[50.5rem] absolute" onPress={() => Linking.openURL(v.bookingLink)}>
                                    <Text className="font-normal color-blue-500">Boka här</Text>
                                </TouchableOpacity>
                                <Text className="font-bold left-4 top-[54rem] absolute">För grupper kan andra tider överenskommas. Kontakta oss via mejl: info@beautytown.se</Text>
                                <Image className="left-4 top-[59rem] absolute" source={require('../../../assets/bt-icon-1.png')} />
                                <Text className="left-[3rem] top-[59.1rem] absolute">{v.place}</Text>
                                <Image className="left-4 top-[62rem] absolute" source={require('../../../assets/bt-icon-2.png')} />
                                <Text className="left-[3rem] top-[62.1rem] absolute">{v.date}</Text>
                            </View>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </View>
    </View>
  )
}

export default Beautytown