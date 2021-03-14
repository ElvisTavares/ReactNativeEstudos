import React from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';

const components1 = () =>{
    return(
        <ScrollView>
            <Text> Ola</Text>
            <View>
                    <Image
                    source={{
                        uri:'https://i.pinimg.com/originals/84/52/58/8452583599e103860ec1be4109ff6fbc.png',
                    }}
                    style={{ width: 200, height: 200}}
            />
            </View>
        </ScrollView>
    )
}


export default components1;