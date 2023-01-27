import React from 'react';
import {Text,View,StyleSheet,Dimensions,FlatList,ScrollView, ActivityIndicator} from 'react-native';


const dimensionsScreen = Dimensions.get('screen');

const Detail=()=>{
    
    return (
        <>
            <View style={styles.sliderContainer}>   
               <Text>Hola</Text>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    sliderContainer:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    },
    sliderStyle:{
      height:0
    },
    carousel:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});

export default Detail;