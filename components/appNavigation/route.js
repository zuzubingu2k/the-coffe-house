import React from 'react'
import { View, Text } from 'react-native'
import Home from '../Home';
import oderList from '../oderList';
import ListHome from '../ListHome';
import accumulatePoints from '../accumulatePoints';
import aboutHome from '../aboutHome';
import cardOderList from '../cardOderList';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
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
                        } else if (route.name === 'San pham') {
                            iconName = focused
                                ? 'cafe' :
                                'cafe-outline';
                        }
                        else if (route.name === 'Giỏ hàng') {
                            iconName = focused
                                ? 'ios-sad-outline' :
                                'ios-sad-sharp';
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
                <Tab.Screen name="San pham" component={oderList} />
                <Tab.Screen name="Giỏ hàng" component={cardOderList} />
                <Tab.Screen name="Cửa hàng" component={ListHome} />
                <Tab.Screen name="Tích điểm" component={accumulatePoints} />
                <Tab.Screen name="Khác" component={aboutHome} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}


