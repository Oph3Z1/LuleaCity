import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import Main from './Home/Main'
import Account from './Home/Account'
import Beautytown from './Home/Beautytown'
import Svg, { Path } from 'react-native-svg';

const Tab = createBottomTabNavigator()

const HomeIcon = ({ size = 24, color = "#EA6300" }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path d="M8.33636 22.528V18.8587C8.33636 17.9221 9.12597 17.1628 10.1 17.1628H13.6605C14.1283 17.1628 14.5769 17.3414 14.9076 17.6595C15.2383 17.9776 15.4242 18.4089 15.4242 18.8587V22.528C15.4212 22.9174 15.58 23.2918 15.8653 23.5682C16.1506 23.8446 16.5388 24 16.9438 24H19.3729C20.5074 24.0028 21.5965 23.5714 22.3997 22.801C23.203 22.0305 23.6544 20.9844 23.6544 19.8934V9.44023C23.6544 8.55895 23.2482 7.72301 22.5452 7.1576L14.2817 0.811042C12.8442 -0.301726 10.7847 -0.265797 9.3901 0.896374L1.31512 7.1576C0.578939 7.70634 0.138931 8.54476 0.117188 9.44023V19.8827C0.117188 22.1566 2.03409 24 4.3987 24H6.77239C7.61346 24 8.29699 23.3474 8.30309 22.5387L8.33636 22.528Z" fill={color} />
    </Svg>
  )
}

const BeautytownIcon = ({ size = 24, color = "#EA6300" }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 22 20" fill="none">
      <Path d="M18.2609 14.9C18.6609 14.2 18.9609 13.4 18.9609 12.5C18.9609 10 16.9609 8 14.4609 8C11.9609 8 9.96094 10 9.96094 12.5C9.96094 15 11.9609 17 14.4609 17C15.3609 17 16.1609 16.7 16.8609 16.3L20.0609 19.5L21.4609 18.1L18.2609 14.9ZM14.4609 15C13.0609 15 11.9609 13.9 11.9609 12.5C11.9609 11.1 13.0609 10 14.4609 10C15.8609 10 16.9609 11.1 16.9609 12.5C16.9609 13.9 15.8609 15 14.4609 15ZM10.9609 18V20C5.44094 20 0.960938 15.52 0.960938 10C0.960938 4.48 5.44094 0 10.9609 0C15.8009 0 19.8309 3.44 20.7609 8H18.6909C18.0509 5.54 16.2909 3.53 13.9609 2.59V3C13.9609 4.1 13.0609 5 11.9609 5H9.96094V7C9.96094 7.55 9.51094 8 8.96094 8H6.96094V10H8.96094V13H7.96094L3.17094 8.21C3.04094 8.79 2.96094 9.38 2.96094 10C2.96094 14.41 6.55094 18 10.9609 18Z" fill={color}/>
    </Svg>
  )
}

const AccountIcon = ({ size = 24, color = "#EA6300" }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 25 24" fill="none">
      <Path d="M12.6484 15.1739C16.9871 15.1739 20.6484 15.8789 20.6484 18.599C20.6484 21.32 16.9631 22 12.6484 22C8.31081 22 4.64844 21.295 4.64844 18.575C4.64844 15.8539 8.33382 15.1739 12.6484 15.1739ZM12.6484 2C15.5875 2 17.9424 4.35402 17.9424 7.29105C17.9424 10.2281 15.5875 12.5831 12.6484 12.5831C9.71034 12.5831 7.35445 10.2281 7.35445 7.29105C7.35445 4.35402 9.71034 2 12.6484 2Z" fill={color}/>
    </Svg>
  )
}

const Home = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={Main} 
        options={{
          tabBarIcon: ({ focused }) => {
            const iconColor = focused ? "#EA6300" : "gray";
            return <HomeIcon size={20} color={iconColor} />;
          },
          tabBarActiveTintColor: "#EA6300",
          tabBarInactiveTintColor: "gray",
        }} 
      />
      <Tab.Screen name="Beautytown" component={Beautytown}
        options={{
          tabBarIcon: ({ focused }) => {
            const iconColor = focused ? "#EA6300" : "gray";
            return <BeautytownIcon size={20} color={iconColor} />;
          },
          tabBarActiveTintColor: "#EA6300",
          tabBarInactiveTintColor: "gray",
        }} 
      />
      <Tab.Screen name="Account" component={Account} 
        options={{
          tabBarIcon: ({ focused }) => {
            const iconColor = focused ? "#EA6300" : "gray";
            return <AccountIcon size={24} color={iconColor} />;
          },
          tabBarActiveTintColor: "#EA6300",
          tabBarInactiveTintColor: "gray",
        }} 
      />
    </Tab.Navigator>
  )
}

export default Home