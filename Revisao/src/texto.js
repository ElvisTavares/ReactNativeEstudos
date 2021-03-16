import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';

//MANIPULAÇÃO DE TEXTOS

const texto = () =>{
    const [text, setText] = useState('');

    return  (
        <View style={{padding: 10}}>
            <TextInput
                style={{height: 40}}
                placeholder="Digite"
                onChangeText={text => setText(text)}
                defaultValue={text}
            />

            <Text style={{padding:10, fontSize: 42}}>
                {text.split(' ').map((word) => word && 'ula' ).join(' ')}
            </Text>


        </View>
    )
}

export default texto;