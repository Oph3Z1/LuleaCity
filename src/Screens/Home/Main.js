import { ImageBackground, Text, View, ScrollView, StatusBar, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Svg, { Path } from 'react-native-svg';
import { useIsFocused } from '@react-navigation/native';
import HomeLists from '../../Components/HomeLists';

const Restaurant = [
  {
    name: "Kebabhuset",
    rating: 5.0,
    image: require("../../../assets/kebabhuset.jpeg"),
    description: "Kebabhuset Luleå är en populär restaurang som erbjuder utsökt kebab, pizzor och andra snabbmatsfavoriter.",
    address: {
      company: "Kebabhuset i Luleå AB",
      orgNr: "559140-2168",
      street: "Skeppsbrogatan 26",
      box: "",
      city: "SE-972 32 Luleå, Sverige"
    },
    contact: {
      email: "Besök hemsidan!",
      phone: "+46 (0)920-104 29",
      website: "https://www.kebab-huset.se/platser/luleastad/"
    }
  },
  {
    name: "Max Burgers",
    rating: 5.0,
    image: require("../../../assets/max-lulea.png"),
    description: "Långt innan appar och mobiltelefoner präglade matupplevelsen, startade vår resa i det natursköna Norrland",
    address: {
      company: "MAX Burgers AB",
      orgNr: "556188-7562",
      street: "Hummergatan 1A",
      box: "Box 814",
      city: "SE-973 34 Luleå, Sverige"
    },
    contact: {
      email: "info@max.se",
      phone: "+46 (0)920-890 00",
      website: "https://www.max.se/om-max/kontakt-oss/"
    }
  },
  {
    name: "McDonald's Luleå",
    rating: 5.0,
    image: require("../../../assets/donken.jpeg"),
    description: "McDonald’s startade 1954 när Ray Kroc upptäckte bröderna McDonalds restaurang i San Bernadino. Bröderna Dick och Mac serverade högkvalitativa hamburgare – och det gick snabbt.",
    address: {
      company: "McDonald's Luleå",
      orgNr: "",
      street: "Banvägen 1",
      box: "",
      city: "SE-973 46 Luleå, Sverige"
    },
    contact: {
      email: "Besök hemsidan!",
      phone: "+46 (0)920-690 45",
      website: "https://kontakt.mcdonalds.se/se/sv-se/contact-us?openOutsideMcd=true"
    }
  },
]

const Hotels = [
  {
    name: "Clarion Hotel Sense",
    rating: 5.0,
    price: 180,
    image: require("../../../assets/hotelbg.webp"),
    description: "Clarion Hotel Sense bjuder på en avslappnad kontinental atmosfär, där det norrländskt solida möter sofistikerad elegans med modern attityd - mitt i Luleå.",
    address: {
      company: "Clarion Hotel Sense",
      orgNr: "556923-9899",
      street: "Skeppsbrogatan 34",
      box: "",
      city: "SE-972 32 Luleå, Sverige"
    },
    contact: {
      email: "cl.sense@strawberry.se",
      phone: "+46 (0)920 450 450",
      website: ""
    }
  },
]

const Cafeteria = [
  {
    name: "Espresso House",
    rating: 5.0,
    image: require("../../../assets/cafeteria-lulea.jpeg"),
    description: "Vi finns här när du behöver oss - en plats där varje kopp kaffe och varje tugga lever upp till sitt löfte, att förgylla din dag.",
    address: {
      company: "Espresso House Smedjan Luleå",
      orgNr: "",
      street: "Storgatan 36",
      box: "",
      city: "SE-972 31 Luleå, Sverige"
    },
    contact: {
      email: "",
      phone: "+46 (0)76-521 93 22",
      website: ""
    }
  },
]

const ShoppingMall = [
  {
    name: "Shopping Galleria",
    rating: 5.0,
    image: require("../../../assets/shopping.jpg"),
    description: "Shopping är en fastighet som på många sätt alltid varit före sin tid – i mitten av 1950-talet som Sveriges första galleria.",
    address: {
      company: "Shopping galleria Luleå",
      orgNr: "",
      street: "Storgatan 51",
      box: "",
      city: "SE-972 31 Luleå, Sverige"
    },
    contact: {
      email: "",
      phone: "+46 (0)77-033 22 00",
      website: ""
    }
  },
]

const Barbers = [
  {
    name: "Luleå Hair Style",
    rating: 5.0,
    image: require("../../../assets/barbers.jpg"),
    description: "Luleå Hair Style är en professionell frisörsalong i Luleå som erbjuder klippning, styling och skäggtrimning för både män och kvinnor.",
    address: {
      company: "Luleå Hair Style",
      orgNr: "",
      street: "Kungsgatan 14",
      box: "",
      city: "SE-972 34 Luleå, Sverige"
    },
    contact: {
      email: "",
      phone: "+46 (0)72-466 66 63",
      website: ""
    }
  },
]

const Stays = [
  {
    name: "Luleå Village Cabin",
    rating: 5.0,
    price: 150,
    image: require("../../../assets/stuga.jpg"),
    description: "Boka nu, ändra senare — Lågpriser på Stugor i Sverige. Bästa pris-garanti.",
    address: {
      company: "Booking.com",
      orgNr: "",
      street: "Bäckvägen 1",
      box: "",
      city: "SE-975 61 Luleå, Sverige"
    },
    contact: {
      email: "Besök booking.com!",
      phone: "",
      website: "https://www.booking.com/hotel/se/lulea-village-cabin.sv.html?label=se-lulea-*rgAveSSEIbDgUlJOygZbgS506508386583%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-404252355102%3Alp1012265%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9Ye8F2ouj63ytZ9amXY91ZM0&sid=5825efae4f5ca784ae7e1482078e5f01&gclid=CjwKCAjw-qi_BhBxEiwAkxvbkCJYlBmz0xasYU1fP9sx6gLy3tYgilEZaeX877-8DhoHG_x6U2gbyhoCgOAQAvD_BwE&aid=1810669"
    }
  },
]

const Main = () => {
  const isFocused = useIsFocused();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryPress = (category) => {
    setSelectedCategory(prev => prev === category ? null : category); 
  };

  return (
    <View className="flex-1 relative">
      {isFocused && <StatusBar barStyle="light-content" backgroundColor="black" />}
      <ImageBackground className="w-full h-[26%] top-0 absolute" source={require('../../../assets/luleaimg.jpg')} resizeMode='cover'>
        <View className="w-full h-full bg-black opacity-40 top-0 left-0 absolute"></View>
        <View className="w-full h-full flex items-center justify-center">
          <Text className="text-9xl text-white mt-[3rem] italic opacity-40">Luleå</Text>
        </View>
      </ImageBackground>
      <View className="w-full h-[75.5%] flex items-center justify-center rounded-t-[1rem] bottom-0 absolute bg-white">
        <ScrollView className="w-full h-full" showsVerticalScrollIndicator={false}>
          <View className="w-full h-[17rem] flex items-center relative">
            <View className="w-[89%] h-[75%] flex flex-wrap justify-between top-[6.5%] absolute">
              <View className="w-full h-[47.5%] flex flex-row justify-between">
                <TouchableOpacity className={`w-[27.5%] h-full flex flex-col items-center justify-center rounded-[.5rem] border-[.1rem] ${selectedCategory === "Restaurant" ? 'border-[#EA6300]' : 'border-[#E8E8E8]'}`} onPress={() => handleCategoryPress('Restaurant')}>
                  <Svg xmlns="http://www.w3.org/2000/svg" height="27px" viewBox="0 -960 960 960" width="27px" fill="none">
                    <Path d="M280-80v-366q-51-14-85.5-56T160-600v-280h80v280h40v-280h80v280h40v-280h80v280q0 56-34.5 98T360-446v366h-80Zm400 0v-320H560v-280q0-83 58.5-141.5T760-880v800h-80Z" fill="#EA6300"/>
                  </Svg>
                  <Text className="text-[.9rem] text-[#494949] mt-[.7rem]">Restaurang</Text>
                </TouchableOpacity>
                <TouchableOpacity className={`w-[27.5%] h-full flex flex-col items-center justify-center rounded-[.5rem] border-[.1rem] ${selectedCategory === "Hotels" ? 'border-[#EA6300]' : 'border-[#E8E8E8]'}`} onPress={() => handleCategoryPress('Hotels')}>
                  <Svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                    <Path d="M29.8334 25.8333H3.16675V23.463H4.50008V5.68519C4.50008 5.37085 4.64056 5.0694 4.89061 4.84713C5.14065 4.62487 5.47979 4.5 5.83341 4.5H24.5001C24.8537 4.5 25.1928 4.62487 25.4429 4.84713C25.6929 5.0694 25.8334 5.37085 25.8334 5.68519V11.6111H28.5001V23.463H29.8334V25.8333ZM23.1667 23.463H25.8334V13.9815H17.8334V23.463H20.5001V16.3519H23.1667V23.463ZM23.1667 11.6111V6.87037H7.16675V23.463H15.1667V11.6111H23.1667ZM9.83341 13.9815H12.5001V16.3519H9.83341V13.9815ZM9.83341 18.7222H12.5001V21.0926H9.83341V18.7222ZM9.83341 9.24074H12.5001V11.6111H9.83341V9.24074Z" fill="#EA6300"/>
                  </Svg>
                  <Text className="text-[.9rem] text-[#494949] mt-[.7rem]">Hotell</Text>
                </TouchableOpacity>
                <TouchableOpacity className={`w-[27.5%] h-full flex flex-col items-center justify-center rounded-[.5rem] border-[.1rem] ${selectedCategory === "Cafeteria" ? 'border-[#EA6300]' : 'border-[#E8E8E8]'}`} onPress={() => handleCategoryPress('Cafeteria')}>
                  <Svg xmlns="http://www.w3.org/2000/svg" height="29px" viewBox="0 -960 960 960" width="29px" fill="none">
                    <Path d="M160-120v-80h640v80H160Zm160-160q-66 0-113-47t-47-113v-400h640q33 0 56.5 23.5T880-760v120q0 33-23.5 56.5T800-560h-80v120q0 66-47 113t-113 47H320Zm0-80h240q33 0 56.5-23.5T640-440v-320H240v320q0 33 23.5 56.5T320-360Zm400-280h80v-120h-80v120ZM320-360h-80 400-320Z" fill="#EA6300"/>
                  </Svg>
                  <Text className="text-[.9rem] text-[#494949] mt-[.7rem]">Kafeteria</Text>
                </TouchableOpacity>
              </View>
              <View className="w-full h-[47.5%] flex flex-row justify-between">
                <TouchableOpacity className={`w-[27.5%] h-full flex flex-col items-center justify-center rounded-[.5rem] border-[.1rem] ${selectedCategory === "ShoppingMall" ? 'border-[#EA6300]' : 'border-[#E8E8E8]'}`} onPress={() => handleCategoryPress('ShoppingMall')}>
                  <Svg xmlns="http://www.w3.org/2000/svg" height="27px" viewBox="0 -960 960 960" width="27px" fill="none">
                    <Path d="M200-80q-33 0-56.5-23.5T120-160v-480q0-33 23.5-56.5T200-720h80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720h80q33 0 56.5 23.5T840-640v480q0 33-23.5 56.5T760-80H200Zm0-80h560v-480H200v480Zm280-240q83 0 141.5-58.5T680-600h-80q0 50-35 85t-85 35q-50 0-85-35t-35-85h-80q0 83 58.5 141.5T480-400ZM360-720h240q0-50-35-85t-85-35q-50 0-85 35t-35 85ZM200-160v-480 480Z" fill="#EA6300"/>
                  </Svg>
                  <Text className="text-[.9rem] text-[#494949] mt-[.7rem]">Köpcentrum</Text>
                </TouchableOpacity>
                <TouchableOpacity className={`w-[27.5%] h-full flex flex-col items-center justify-center rounded-[.5rem] border-[.1rem] ${selectedCategory === "Barbers" ? 'border-[#EA6300]' : 'border-[#E8E8E8]'}`} onPress={() => handleCategoryPress('Barbers')}>
                  <Svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="none">
                    <Path d="M760-120 480-400l-94 94q8 15 11 32t3 34q0 66-47 113T240-80q-66 0-113-47T80-240q0-66 47-113t113-47q17 0 34 3t32 11l94-94-94-94q-15 8-32 11t-34 3q-66 0-113-47T80-720q0-66 47-113t113-47q66 0 113 47t47 113q0 17-3 34t-11 32l494 494v40H760ZM600-520l-80-80 240-240h120v40L600-520ZM240-640q33 0 56.5-23.5T320-720q0-33-23.5-56.5T240-800q-33 0-56.5 23.5T160-720q0 33 23.5 56.5T240-640Zm240 180q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6ZM240-160q33 0 56.5-23.5T320-240q0-33-23.5-56.5T240-320q-33 0-56.5 23.5T160-240q0 33 23.5 56.5T240-160Z" fill="#EA6300"/>
                  </Svg>
                  <Text className="text-[.9rem] text-[#494949] mt-[.7rem]">Frisörer</Text>
                </TouchableOpacity>
                <TouchableOpacity className={`w-[27.5%] h-full flex flex-col items-center justify-center rounded-[.5rem] border-[.1rem] ${selectedCategory === "Stays" ? 'border-[#EA6300]' : 'border-[#E8E8E8]'}`} onPress={() => handleCategoryPress('Stays')}>
                  <Svg xmlns="http://www.w3.org/2000/svg" width="26" height="21" viewBox="0 0 26 21" fill="none">
                    <Path d="M13.8394 0.268527C13.7369 0.20181 13.6202 0.16663 13.5014 0.16663C13.3825 0.16663 13.2658 0.20181 13.1634 0.268527L1.25537 8.02369L1.93137 9.29617L13.5014 1.76096L25.0714 9.29691L25.7474 8.02443L21.5014 5.25953V1.64286C21.5014 1.44711 21.4311 1.25937 21.3061 1.12095C21.1811 0.982529 21.0115 0.904765 20.8347 0.904765H18.8347C18.6579 0.904765 18.4883 0.982529 18.3633 1.12095C18.2383 1.25937 18.168 1.44711 18.168 1.64286V3.08731L13.8394 0.268527Z" fill="#EA6300"/>
                    <Path fill-rule="evenodd" clip-rule="evenodd" d="M13.5001 3.11896L4.16675 9.02372V19.3571H0.833415C0.656604 19.3571 0.487035 19.4348 0.36201 19.5732C0.236986 19.7117 0.166748 19.8994 0.166748 20.0952C0.166748 20.2909 0.236986 20.4786 0.36201 20.6171C0.487035 20.7555 0.656604 20.8332 0.833415 20.8332H24.8334C25.0102 20.8332 25.1798 20.7555 25.3048 20.6171C25.4298 20.4786 25.5001 20.2909 25.5001 20.0952C25.5001 19.8994 25.4298 19.7117 25.3048 19.5732C25.1798 19.4348 25.0102 19.3571 24.8334 19.3571H22.8334V9.02372L13.5001 3.11896ZM16.1667 19.3571V11.238H20.1667V19.3571H16.1667ZM14.1667 11.238H6.83342V15.6666H14.1667V11.238Z" fill="#EA6300"/>
                  </Svg>
                  <Text className="text-[.9rem] text-[#494949] mt-[.7rem]">Stugor</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {selectedCategory === null || selectedCategory === "Restaurant" ? (
            <HomeLists HeaderText="Restaurang" ArrayCall={Restaurant} Price={false} />
          ) : null}

          {selectedCategory === null || selectedCategory === "Hotels" ? (
            <HomeLists HeaderText="Hotell" ArrayCall={Hotels} Price={true} />
          ) : null}

          {selectedCategory === null || selectedCategory === "Cafeteria" ? (
            <HomeLists HeaderText="Kafeteria" ArrayCall={Cafeteria} Price={false} />
          ) : null}

          {selectedCategory === null || selectedCategory === "ShoppingMall" ? (
            <HomeLists HeaderText="Köpcentrum" ArrayCall={ShoppingMall} Price={false} />
          ) : null}

          {selectedCategory === null || selectedCategory === "Barbers" ? (
            <HomeLists HeaderText="Frisörer" ArrayCall={Barbers} Price={false} />
          ) : null}

          {selectedCategory === null || selectedCategory === "Stays" ? (
            <HomeLists HeaderText="Stugor" ArrayCall={Stays} Price={true} />
          ) : null}
        </ScrollView>
      </View>
    </View>
  )
}

export default Main