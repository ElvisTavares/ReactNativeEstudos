import React from 'react';
import { View,Text, StyleSheet} from 'react-native';





const header = (props) => (
    <View style={styles.container}>
        <Text style={styles.title}> {props.title} </Text>
    </View>
);


const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        backgroundColor: 'blue',
        alignItems: 'center'
    },
    title: {
        fontSize: 50,
        color: '#fff'
    }
});


export default header;