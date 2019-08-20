import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity , AsyncStorage  } from 'react-native';
import chart from "./chart/chart"

export default class addname extends Component {
  
  constructor(props) {
    super(props)

    this.state = {

    };
  }
  componentWillMount(){
    this.displaydata()
}
  
  displaydata = async () =>{
      try{
       let out = await AsyncStorage.getItem('OBJ')
       let parsed = JSON.parse(out)
       console.log(parsed.Name)
      }
      catch(error) {
        console.log(error);
        
      }
  }
  render() {
  
    return (
      <View style={styles.container}>
        <Text onPress = {this.displaydata}>Home</Text>
      </View>

    )

  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding : 10

  }
});