import * as React from 'react';
import MainContainer from './navigation/MainContainer';
import { NavigationContainer } from '@react-navigation/native'
import { View, StyleSheet } from 'react-native';

export default function App() {
    return (
      <View style={styles.container}>
        <NavigationContainer>
          <MainContainer/>
        </NavigationContainer>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});