import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-datepicker';
import TimePicker from "react-native-24h-timepicker";
import {createStackNavigator,createAppContainer} from 'react-navigation';
import MapView,{Marker} from 'react-native-maps';

export default class addname extends Component {
  
  constructor(props) {
    super(props)

    this.state = {

      date_in: '2016-05-01',
      date_out: '2016-05-01',
      Name: 'Name',
      time: "HH:MM",
      x: {
        latitude : 16.98,
        longitude : 82.24
      }

    };
  }
  
  onCancel() {
    this.TimePicker.close();
  }

  onConfirm(hour, minute) {
    this.setState({ time: `${hour}:${minute}` });
    this.TimePicker.close();
  }

  onProjectSelect = (e) => {
    this.setState({
      project: e.target.value
    });
  }
  
  render() {
  
    return (
      <View style={styles.container}>
        
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