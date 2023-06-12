import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const ListeCocktail = () => {
    const [cocktails, setCocktails] = useState(['']);

  useEffect(() => {
    const fetchCocktails = async () => {
        try {
            const response = await fetch(
            'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic'
            );
            const data = await response.json();
            setCocktails(data.drinks);
        } catch (error) {
            console.log(error);
        }
    };

    fetchCocktails();
  }, []);

  const renderCocktail = ({ item }) => (
    <TouchableOpacity key={item.idDrink} style={styles.cocktailContainer} >
      <Image
        source={{ uri: item.strDrinkThumb }}
        style={styles.cocktailImage}
      />
      <Text style={styles.cocktailName}>{item.strDrink}</Text>
    </TouchableOpacity>
  );
  
  return (
    <View>
      <FlatList
        data={cocktails}
        renderItem={renderCocktail}
        keyExtractor={(item) => item.idDrink}
        numColumns={2}
        contentContainerStyle={styles.container}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#FFDAB9',
      padding: 10,
    },
    cocktailContainer: {
      flex: 1,
      margin: 10,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F2F2F2',
      borderRadius: 10,
      padding: 10,
    },
    cocktailImage: {
      width: 150,
      height: 150,
      borderRadius: 10,
    },
    cocktailName: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
    },
});

export default ListeCocktail;