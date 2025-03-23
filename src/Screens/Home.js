import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import Main from './Home/Main'
import Account from './Home/Account'
import Svg, { Path } from 'react-native-svg';

const Tab = createBottomTabNavigator()

const HomeIcon = ({ size = 24, color = "#EA6300" }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path d="M8.33636 22.528V18.8587C8.33636 17.9221 9.12597 17.1628 10.1 17.1628H13.6605C14.1283 17.1628 14.5769 17.3414 14.9076 17.6595C15.2383 17.9776 15.4242 18.4089 15.4242 18.8587V22.528C15.4212 22.9174 15.58 23.2918 15.8653 23.5682C16.1506 23.8446 16.5388 24 16.9438 24H19.3729C20.5074 24.0028 21.5965 23.5714 22.3997 22.801C23.203 22.0305 23.6544 20.9844 23.6544 19.8934V9.44023C23.6544 8.55895 23.2482 7.72301 22.5452 7.1576L14.2817 0.811042C12.8442 -0.301726 10.7847 -0.265797 9.3901 0.896374L1.31512 7.1576C0.578939 7.70634 0.138931 8.54476 0.117188 9.44023V19.8827C0.117188 22.1566 2.03409 24 4.3987 24H6.77239C7.61346 24 8.29699 23.3474 8.30309 22.5387L8.33636 22.528Z" fill={color} />
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