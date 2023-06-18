import * as React from 'react';
import { View } from 'react-native';
import ListeCocktail from '../../components/cocktailList';

export default function HomeScreen({ navigation }) {
    return (
        <View>
            <ListeCocktail navigation={navigation} />
        </View>
    );
}