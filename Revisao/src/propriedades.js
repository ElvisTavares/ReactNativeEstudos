import React from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';

const Cat = (props) => {
    return (
        <View>
            <Text>Ola, {props.name}</Text>
        </View>
    )
}

const cafe = () => {
    return (
        <View>
            <Cat name="Lolo"/>
            <Cat name="Lolo"/>
        </View>
    )
}


export default cafe;