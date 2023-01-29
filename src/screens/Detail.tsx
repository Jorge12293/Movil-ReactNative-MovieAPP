import React, { useEffect, useState } from 'react';
import {Text,View,StyleSheet,Dimensions,FlatList,ScrollView, ActivityIndicator, Image, Modal, Pressable} from 'react-native';
import { Movie,MovieDetail } from '../interfaces/Movie';
import { apiUrlImage, getMovie } from '../services/services';
// @ts-ignore
import { Rating } from 'react-native-stock-star-rating'
import Icon from 'react-native-vector-icons/FontAwesome';
// @ts-ignore
import VideoPlayer from 'react-native-video-controls';
const placeHolderImage = require('../../assets/images/placeholder.png');
const dimensionsScreen = Dimensions.get('screen');

// @ts-ignore
const Detail = ({route,navigation}) => {

    const id = route.params.movieId as number;

    const [movieDetail,setMovieDetail]= useState<MovieDetail>();
    const [loaded,setLoaded]= useState(false);
    const [modalVisible,setModalVisible] = useState(false);
    
    useEffect(()=>{
        getMovie(id).
        then((movieData:MovieDetail)=>{
            setMovieDetail(movieData);
        }).finally(()=>{
            setLoaded(true);
        });
    },[id]);

    
    function videoShown () {
        setModalVisible(!modalVisible);
    }


    return (
        <>
            {!loaded && <ActivityIndicator size="large"/>}
            { loaded &&(
                <View>
                    <ScrollView>
                        <Image 
                            resizeMode="cover"
                            style={styles.image} 
                            source={
                                (movieDetail?.poster_path)
                                ? {uri:`${apiUrlImage}${movieDetail.poster_path}`}
                                : placeHolderImage
                            }
                        />
                        <View style={styles.container}>
                            <View style={styles.playButton}>
                                <Pressable
                                    onPress={()=>videoShown()} 
                                    style={styles.button}>
                                    <Icon name="play-circle" size={35} color={'white'} />
                                </Pressable>
                            </View>
                            <Text style={styles.movieTitle}>{movieDetail?.original_title} </Text>
                            <ScrollView horizontal={true}>
                                {movieDetail?.genres && (
                                    <View style={styles.genresContainer}>
                                        {movieDetail.genres.map(genre=>{
                                            return <Text style={styles.genre} key={genre.id}>{genre.name}</Text>
                                        })}
                                    </View>
                                )}
                            </ScrollView>
                            <Rating stars={movieDetail?.vote_average!  / 2} maxStars={5} size={40}  color={'green'}/>
                            <Text style={styles.overview}>{movieDetail?.overview} </Text>
                            <Text style={styles.release}>Release Date: {movieDetail?.release_date} </Text>
                            <Text > {movieDetail?.video} </Text>

                        </View>
                    </ScrollView>
                    <Modal
                        animationType='slide'
                        visible={modalVisible}>
                        <View style={styles.videoModal}>
                            <VideoPlayer
                                onBack={()=>videoShown()}
                                navigator={navigation}
                                source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}/>
    
                        </View>                
                    </Modal>                         
                </View>
                
            )} 
        </>
    );
};



const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        margin:10,
    },
    movieTitle:{
        fontSize:24,
        fontWeight:'bold',
        marginTop:30,
        marginBottom:10,
    },
    image:{
        height: dimensionsScreen.height/2.5
    },
    genresContainer:{
        flexDirection:'row',
        alignContent: 'center',
        marginTop:5,
    },
    genre:{
        marginRight:10,
        fontWeight:'bold'
    },
    overview:{
        padding:15,
        marginBottom:15,
        marginTop:15,
    },
    release:{
        fontWeight:'bold'        
    },
    playButton:{
        position:'absolute',
        top:-30,
        right:20,
    },
    videoModal:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    button:{
        alignContent:'center',
        borderRadius:50,
        width:55,
        padding:10,
        backgroundColor:'#4481FC',
    },
});

export default Detail;