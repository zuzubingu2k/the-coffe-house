import React from 'react'
import { View, Text } from 'react-native'
import Home from './components/Home';
import oderList from './components/oderList';
import ListHome from './components/ListHome';
import accumulatePoints from './components/accumulatePoints';
import aboutHome from './components/aboutHome';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


export default function app() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Trang chủ') {
              iconName = focused
                ? 'md-home'
                : 'md-home-outline';
            } else if (route.name === 'Đặt hàng') {
              iconName = focused
                ? 'cafe' :
                'cafe-outline';
            }
            else if (route.name === 'Cửa hàng') {
              iconName = focused
                ? 'md-file-tray' :
                'md-file-tray-full';
            }
            else if (route.name === 'Tích điểm') {
              iconName = focused
                ? 'md-wallet' :
                'md-wallet-outline';
            }
            else if (route.name === 'Khác') {
              iconName = focused
                ? 'menu' :
                'menu-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Trang chủ" component={Home} />
        <Tab.Screen name="Đặt hàng" component={oderList} />
        <Tab.Screen name="Cửa hàng" component={ListHome} />
        <Tab.Screen name="Tích điểm" component={accumulatePoints} />
        <Tab.Screen name="Khác" component={aboutHome} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}


