import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Chart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
      }
      render() {
        return (
            <View style={styles.container}>
            <Chart/>
            <Text>From Chart</Text>
          </View>
        )
        
        
      }
      
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });