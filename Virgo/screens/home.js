import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  AsyncStorage,
  ScrollView,
} from 'react-native'
//import {swe_calc_ut} from ".././chart/chart"
import swisseph,{swe_julday} from 'react-native-swisseph';

export default class addname extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
        message:""
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
        <Text onPress = {this.displaydata}>{swe_julday(2019,9,16,12,2)}</Text>
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