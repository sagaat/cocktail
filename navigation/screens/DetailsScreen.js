import * as React from 'react';
import { SafeAreaView, Text, Image, StyleSheet, ScrollView, } from 'react-native';

export default function DetailsScreen({ route }) {
    const { item } = route.params;

    const listIngredients = [];
    for (let i = 1; i <= 15; i++) {
        if (item[`strIngredient${i}`] !== null) {
            listIngredients.push(
                <Text style={styles.text} >
                    <Image
                        source={{ uri: `https://www.thecocktaildb.com/images/ingredients/${item[`strIngredient${i}`]}-Small.png` }}
                        style={styles.ingredientImage}
                    />
                    {item[`strIngredient${i}`]} - {item[`strMeasure${i}`]}
                </Text>);
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Image
                source={{ uri: item.strDrinkThumb }}
                style={styles.cocktailImage}
            />
            <Text style={styles.title}>{item.strDrink}</Text>
            <ScrollView style={styles.list}>
                <Text style={styles.text}>Alcoolisée : {item.strAlcoholic}</Text>
                <Text style={styles.text}>Verre : {item.strGlass}</Text>
                <Text style={styles.text}>Instructions : {item.strInstructions}</Text>
                <Text style={styles.text}>Ingrédients : </Text>
                {listIngredients}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FEC8D8',
        flex: 1,
    },
    cocktailImage: {
        width: '100%',
        height: '50%',
        alignSelf: 'center',
        marginBottom: 10,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginBottom: 10,
    },
    list: {
        paddingBottom: 15,
        height: '43.5%',
    },
    text: {
        fontSize: 20,
        marginBottom: 10,
        marginLeft: 30,
    },
    ingredientImage: {
        width: 40,
        height: 40,
        borderRadius: 10,
    },
});