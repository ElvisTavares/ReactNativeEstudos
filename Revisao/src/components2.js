import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';

class components2 extends Component{
    render(){
        return(
            <View>
                <Text>Ola</Text>
                <Image
                   source= {{
                    uri: 'https://i.pinimg.com/originals/84/52/58/8452583599e103860ec1be4109ff6fbc.png',
                    
                   }}
                   style={{ width: 200, height: 200}}

                />
            </View>
        );
    }
}


export default components2;