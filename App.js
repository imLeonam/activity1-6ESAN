import { Text, StyleSheet, View } from 'react-native';
import React from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Leonam Moreira Ribeiro
      </Text>
      <Text style={styles.text}>
        RA: 2020100143
      </Text>
      <Text style={styles.text}>
        03/10/2022
      </Text>
      <View style={styles.squareContainer}>
        <View style={[styles.redSquare, styles.square]} />
        <View style={[styles.greenSquare, styles.square]} />
        <View style={[styles.blueSquare, styles.square]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 10
  },
  text: {
    fontFamily: ['Helvetica', 'Arial', 'Sans-serif'],
    textAlign: 'center',
    padding: 10,
    fontSize: 22,
    fontWeight: 'bold'
  },
  squareContainer: {
    backgroundColor: '#EEE',
    marginTop: 40,
    height: 800
  },
  square: {
    width: 50,
    height: 50
  },
  redSquare: {
    position: "position",
    backgroundColor: '#A20202',
    top: 150,
    left: 200,
    zIndex: 1
  },
  greenSquare: {
    position: "position",
    backgroundColor: '#02FA2F',
    top: 100,
    left: 190,
    zIndex: 2
  },
  blueSquare: {
    position: "position",
    backgroundColor: '#00AAFF',
    top: 90,
    left: 200
  },
});
