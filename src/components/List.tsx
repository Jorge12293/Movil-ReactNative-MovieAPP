import React from 'react';
import { View,Text, FlatList, StyleSheet } from 'react-native';
import { Movie } from '../interfaces/Movie';
import Card from './Card';

const List = (props: { title: string, listMovies: Movie[], navigation: any}) => {
    const {title,listMovies,navigation} = props;
    return (
        <View style={styles.list}>
            <View>
                <Text style={styles.text}>{title}</Text>
            </View>
            <View>
                <FlatList
                data={listMovies}
                horizontal={true}
                renderItem= {({item})=><Card item={item} navigation={navigation}/>}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    list:{
       marginTop:20, 
    },
    text:{
        fontSize:20,
        fontWeight:'bold',
        paddingBottom:5,
    },
    
});

export default List;