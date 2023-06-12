import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons  from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/HomeScreen';
import AccountScreen from './screens/AccountScreen';
import DetailsScreen from './screens/DetailsScreen';

const homeName = 'Home';
const accountName = 'Account';
const detailsName = 'Details';

const Tab = createBottomTabNavigator();

export default function MainContainer(){
    return(
        <Tab.Navigator
            initialRouteName={homeName}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === homeName) {
                    iconName = focused ? 'home' : 'home-outline';
                } else if (route.name === accountName) {
                    iconName = focused ? 'person' : 'person-outline';
                } else if (route.name === detailsName) {
                    iconName = focused ? 'information-circle' : 'information-circle-outline';
                }
                return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
        >
            <Tab.Screen name={homeName} component={HomeScreen} />
            <Tab.Screen name={accountName} component={AccountScreen} />
            <Tab.Screen name={detailsName} component={DetailsScreen} />
        </Tab.Navigator>
    );
}