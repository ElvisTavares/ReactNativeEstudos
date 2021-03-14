import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  StatusBar,
} from 'react-native';

class calc extends Component{



	render(){
		return(
				<View style={styles.container}>

					<TouchableOpacity style={styles.button} ><Text style={styles.buttonText}>1</Text></TouchableOpacity>

				</View>

			);
	}
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#F0FFFF',
    


  },

  button:{
    backgroundColor: '#87CEFA',
   
   
    
  },



  buttonText:{
    alignSelf: 'center',
    padding: 30,
    fontSize: 25,
    color:"#0000EE",
    fontWeight: 'bold'

  }

});





export default calc;