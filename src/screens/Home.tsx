import React, { useEffect, useState } from 'react';
import {Text,View,StyleSheet,Dimensions,FlatList,ScrollView, ActivityIndicator} from 'react-native';
import { Movie } from '../interfaces/Movie';
import { getPopularMovies,getUpcomingMovies,getPopularTv,getGenderMovie,apiUrlImage} from '../services/services';
// @ts-ignore
import { SliderBox } from 'react-native-image-slider-box';
import List from '../components/List';
import Error from '../components/Error';

const dimensionsScreen = Dimensions.get('screen');

// @ts-ignore
function Home({ navigation }) {

    const [listPopularMovies,setListPopularMovies]= useState<Movie[]>([]);
    const [listPopularTv,setListPopularTv]= useState<Movie[]>([]);
    const [listGender,setListGender]= useState<Movie[]>([]);
    const [listMoviesImage,setListMoviesImage]= useState<String[]>([]);
    
    const [error,setError]= useState(false);
    const [loaded,setLoaded]= useState(false);

    const getData=()=>{
        return Promise.all([
            getUpcomingMovies(), 
            getPopularMovies(),
            getPopularTv(),
            getGenderMovie(10751),  
        ]);
    };
   

    useEffect(()=>{
        getData().then(
            ([
                upcomingMoviesData, 
                popularMoviesData,
                popularTvData,
                genderMovieData,  
            ])=>{
                const listUrlImages: string[]=[];
                upcomingMoviesData.forEach((movie:Movie) => {
                    listUrlImages.push(`${apiUrlImage}${movie.poster_path}`);
                });
                setListMoviesImage(listUrlImages);
                setListPopularMovies(popularMoviesData);
                setListPopularTv(popularTvData);
                setListGender(genderMovieData);
            }
        ).catch(error=>{
            setError(true);
        }).finally(()=>{
            setLoaded(true);
        });
    },[]);

    return (
        <>
            {loaded && !error && (
                <ScrollView>
                    { listMoviesImage &&(
                        <View style={styles.sliderContainer}>   
                            <SliderBox 
                                images={listMoviesImage}
                                dotStyle={styles.sliderStyle}
                                sliderBoxHeight={dimensionsScreen.height/1.8}
                                autoplay={false}
                                circleLoop={false}/>
                        </View>
                    )}
                    {listPopularMovies &&(
                        <View style={styles.carousel}>
                            <List title="Popular Movies" listMovies={listPopularMovies} navigation={navigation}/>
                        </View>
                    )}                
                    
                    {listPopularTv &&(
                        <View style={styles.carousel}>
                            <List title="Popular TV Shows" listMovies={listPopularTv} navigation={navigation}/>
                        </View>
                    )}
                    
                    {listGender && (
                        <View style={styles.carousel}>
                            <List title="Family Movies" listMovies={listGender} navigation={navigation}/>
                        </View>
                    )}                
                    
                </ScrollView>
            )}
            {!loaded && <ActivityIndicator size="large"/>} 
            {error && (
                <Error 
                    errorText1= 'Oops! Something went wrong.' 
                    errorText2= 'Make sure you are online and restart the App'/>
            )} 
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

export default Home;