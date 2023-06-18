import * as React from 'react';
import { View, Text, Image, StyleSheet, } from 'react-native';

const img = 'https://www.asiamediajournal.com/wp-content/uploads/2022/11/One-Piece-Roronoa-Zoro-PFP.jpg';

export default function AccountScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Image source={{ uri: img }} style={styles.profilPicture} />
            <Text style={styles.name}>Roronoa Zoro</Text>
            <Text style={styles.age}>21 ans</Text>
            <Text style={styles.titre} >Boisson préférée :</Text>
            <Text style={styles.preferred}>Frappé</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FEC8D8',
    },
    profilPicture: {
        width: 200,
        height: 200,
        borderRadius: 100,
        alignSelf: 'center',
        marginTop: 50,
    },
    name: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
    },
    age: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10,
    },
    titre: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20,
    },
    preferred: {
        fontSize: 20,
        fontStyle: 'italic',
        textAlign: 'center',
        marginTop: 10,
    },
});