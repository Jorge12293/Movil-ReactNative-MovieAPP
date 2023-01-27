import React from "react";
import { Movie } from '../interfaces/Movie';
import { StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import { apiUrlImage } from "../services/services";

const placeHolderImage = require('../../assets/images/placeholder.png');

const Card = (props: { item: Movie,navigation:any}) => {

    const {item,navigation} = props;
    
    return (
        <TouchableOpacity 
            style={styles.container}
            onPress={() => navigation.navigate('Detail')}>
            <Image 
                resizeMode="cover"
                style={styles.image} 
                source={
                    (item.poster_path)
                    ? {uri:`${apiUrlImage}${item.poster_path}`}
                    : placeHolderImage
                }/>
            {!item.poster_path && 
                (<Text style={styles.movieName}> {item.title} </Text>)}
        </TouchableOpacity>
    );

}


const styles = StyleSheet.create({
    container:{
        padding:5,
        position:'relative',
        alignItems:'center',
        height:180,
    },
    image:{
        height: 180,
        width:120,
        borderRadius:20
    },
    movieName:{
        position:'absolute',
        width:100,
        top:10,
        textAlign:'center'
    }
});

export default Card;