import React from "react";
import { View, Text, StyleSheet } from 'react-native';


const Error = (props: { errorText1: string,errorText2: string }) => {
    const {errorText1,errorText2}= props;
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{errorText1}</Text>
            <Text style={styles.text}>{errorText2}</Text>
        </View> 
    );
}

const styles = StyleSheet.create({
    container:{
     flex:1,
     justifyContent: 'center',
     alignItems:'center',   
    },
    text:{
        fontWeight:'bold',
    }
});

export default Error;