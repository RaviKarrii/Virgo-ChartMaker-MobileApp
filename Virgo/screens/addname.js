import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, AsyncStorage } from 'react-native';
import DatePicker from 'react-native-datepicker';
import TimePicker from "react-native-24h-timepicker";
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
        longitude : 82.24,
      }

    };
  }
  Processthis(name,date,time,lat) //for horoscope storage
  {
      let obj = {
          Name:name,
          Date:date,
          Time:time,
          latlon:lat

      }
      AsyncStorage.setItem('OBJ',JSON.stringify(obj))
      console.log(JSON.stringify(obj));
      
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
    // declare this outside of render
  var region = {
    latitude: 16.98,
    longitude: 82.24,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
    return (
      <View style={styles.container}>
        <Text style={{height:'10%'}}></Text>
        {/* <Text style={styles.header}>VIRGO</Text>
        <View style={{height:'5%'}}></View> */}
        <View style={styles.inputcontainer}>
          <TextInput name={this.state.Name}
            placeholder="Name"
            onChangeText={(Name) => { this.setState({ Name: Name }); }}
            style={styles.textInput}
          />
        </View>
        <Text style={{height:'2%'}}></Text>
        <Text style={{textAlign:'center'}}>Birth Detils</Text>
        <View style={styles.rowContainer}>
          <DatePicker
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            style={{ padding: 10 }}
            date={this.state.date_in}
            mode="date"
            format="YYYY-MM-DD"
            minDate="1930-01-01"
            maxDate="2040-01-01"
            showIcon={false}
            customStyles={{
              dateInput: {
                alignItems: 'flex-start',
                padding: 5
              },
            }}
            onDateChange={(date_in) => { this.setState({ date_in: date_in }); }} />
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

        <MapView style={{flex: 1}} initialRegion={region}>
        <Marker draggable
    coordinate={this.state.x}
    onDragEnd={(e) => this.setState({ x: e.nativeEvent.coordinate })}
  />
        </MapView>
        <View style={styles.inputContainer}>
          <TouchableOpacity style={styles.saveButton} 
          onPress={() => this.Processthis(this.state.Name,this.state.date_in,this.state.time,this.state.x)}>
            <Text style={styles.saveButtonText}>Generate</Text>
          </TouchableOpacity>
        </View>
        
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

  },
  inputContainer: {
    paddingTop: 15
  },
  textInput: {
    borderColor: '#CCCCCC',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 50,
    fontSize: 25,
    paddingLeft: 20,
    paddingRight: 20
  },
  saveButton: {
    borderWidth: 1,
    borderColor: '#007BFF',
    backgroundColor: '#007BFF',
    padding: 15,
    margin: 5
  },
  buttonText: {
    color: '#000',
    fontSize: 20,
    textAlign: 'center'
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center'
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }, header: {
    fontSize: 32,
    fontWeight: 'bold',
    fontFamily: 'Cochin',
    textAlign: 'center'
  }
});
