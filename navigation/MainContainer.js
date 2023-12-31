import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/HomeScreen';
import AccountScreen from './screens/AccountScreen';
import DetailsScreen from './screens/DetailsScreen';

const homeName = 'Home';
const accountName = 'Account';
const detailsName = 'Details';

const Tab = createBottomTabNavigator();

function MainTabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === homeName) {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === accountName) {
                        iconName = focused ? 'person' : 'person-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
        >
            <Tab.Screen name={homeName} component={HomeScreen} />
            <Tab.Screen name={accountName} component={AccountScreen} />
        </Tab.Navigator>
    );
}

const Stack = createNativeStackNavigator();

export default function MainContainer() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="home">
                <Stack.Screen name="home" component={MainTabNavigator} options={{ headerShown: false }} />
                <Stack.Screen name={detailsName} component={DetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}