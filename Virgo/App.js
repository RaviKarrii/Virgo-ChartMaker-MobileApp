import React,{ Component}  from 'react';
import { StyleSheet, Text ,TextInput , View, TouchableOpacity } from 'react-native';
import  Chart  from './chart/chart';
import DatePicker from 'react-native-datepicker';
import TimePicker from "react-native-24h-timepicker";

export default class Test extends Component{

  constructor(props) {
    super(props)

    this.state = {

      date_in: '2016-05-01',
      date_out: '2016-05-01',
      Name : 'Name',
      time: "00:00",
    
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

  render(){
    return (
      <View style={styles.container}>
      <Text >Name</Text>
      <TextInput name={this.state.Name}
      onChangeText={(Name) => {this.setState({Name: Name});}}
      style={{backgroundColor:'blue',color:'white'}}
      >           </TextInput>
      <Text>DoB </Text>
      <DatePicker
      confirmBtnText="Confirm"
      cancelBtnText="Cancel"
      style ={{padding:10}}
      date={this.state.date_in}
      mode="date"
      format="YYYY-MM-DD"
      minDate="1930-01-01"
      maxDate="2040-01-01"
      showIcon={false}
      customStyles={{
       dateInput: {
          alignItems : 'flex-start',
          padding:5
      },
     }}
    onDateChange={(date_in) => {this.setState({date_in: date_in});}}/>
    <TouchableOpacity
          onPress={() => this.TimePicker.open()}
          style={styles.button}>
          <Text style={styles.buttonText}>{this.state.time}</Text>
        </TouchableOpacity>
        
        <TimePicker
          ref={ref => {
            this.TimePicker = ref;
          }}
          onCancel={() => this.onCancel()}
          onConfirm={(hour, minute) => this.onConfirm(hour, minute)}
        />
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
