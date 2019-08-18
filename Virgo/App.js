import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  Chart  from './chart/chart';

export default function App() {
  return (
    <View style={styles.container}>

      <Chart/>
      <Text>Virgo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
