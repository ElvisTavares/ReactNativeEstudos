import React, { Component } from 'react';
import { View, Text, Image, ScrollView, Button } from 'react-native';

class Estado extends Component {
    state = {isFome: true};

    render(){
        return(
            <View>
                <Text>
                    Eu sou {this.props.name}, e estou 
                    {this.props.isFome ? " faminto" : " satisfeito" } 
                </Text>

                <Button 
                onPress={ () => {
                    this.setState({ isFome: false})
                  }} 
                  
                  disabled={!this.state.isFome}
                  title={
                      this.state.isFome ? "Por favor me alimente" : "Obrigado"
                  }
                  
                   />
            </View>
        )
                }

}

class Cafe extends Component{
    render(){
        return(
            <>
                <Estado name="lolo" />
                <Estado name="k" />
            </>
        )
    }
}

export default Cafe;