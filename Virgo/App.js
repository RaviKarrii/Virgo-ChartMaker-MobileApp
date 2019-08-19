import React,{ Component}  from 'react';
import { StyleSheet, Text ,TextInput , View } from 'react-native';
import  Chart  from './chart/chart';
import DatePicker from 'react-native-datepicker';

export default class Test extends Component{

  constructor(props) {
    super(props)

    this.state = {

      date_in: '2016-05-01',
      date_out: '2016-05-01',
      Name : 'Name',
    
     };
  }

  onProjectSelect = (e) => {
    this.setState({
      project: e.target.value
    });
  }

  render(){
    return (
      <View style={styles.container}>
      <Text>Name </Text>
      <TextInput name={this.state.Name}
      onChangeText={(Name) => {this.setState({Name: Name});}}/>
      <DatePicker
      style ={{padding:10}}
      date={this.state.date_in}
      mode="date"
      format="YYYY-MM-DD"
      minDate="2016-05-01"
      maxDate="2020-06-01"
      showIcon={false}
      customStyles={{
       dateInput: {
          alignItems : 'flex-start',
          padding:5
      },
     }}
    onDateChange={(date_in) => {this.setState({date_in: date_in});}}/>
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
