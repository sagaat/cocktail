import * as React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

export default function DetailsScreen({ route, navigation }) {
    const { itemId } = route.params;

    return (
        <View>
            <Text>Details Screen</Text>
            <Text>Item ID: {itemId}</Text>
        </View>
    );
    
}