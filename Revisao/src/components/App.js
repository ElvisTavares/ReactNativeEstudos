import React, {Component} from 'react';
import { View,Text, StyleSheet} from 'react-native';

import Header from './header';
import PeopleList from './PeopleList';
import axios from 'axios';

class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            peoples: []
        };
    }

     componentDidMount(){
        axios
        .get('https://randomuser.me/api/?nat=br&results=5')
        .then(response => {
            const { results } = response.data;
           this.setState({
               peoples: results
           });
        }

        )
     }
      
   

    render(){
       return (
        <View>
            <Header title="Pessoas"/>
            <PeopleList peoples={this.state.peoples} />
         </View>
       )
    }
}


export default App;