import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { makeWallet } from '../../src/client';

export default function App() {
  const phrase = [
    'sun',
    'current',
    'mango',
    'evolve',
    'elite',
    'evolve',
    'slow',
    'inch',
    'used',
    'shoot',
    'dog',
    'soldier',
  ];

  const dothis = async () => {
    const test = await makeWallet(phrase);
    console.log(test);
  };

  return (
    <View style={styles.container}>
      <Text onPress={dothis}>Result: </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
