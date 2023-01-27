import axios from 'axios';
// @ts-ignore
import {API_KEY} from '@env';

const apiUrl:string ='https://api.themoviedb.org/3';
export const apiUrlImage:string ='https://image.tmdb.org/t/p/w500';

const urLComplement:string =`api_key=${API_KEY}&language=en-US&page=1`;

// Get Popular Movies
export const getPopularMovies = async()=>{
  const urlGetPopularMovies:string=`${apiUrl}/movie/popular?${urLComplement}`;
  console.log(urlGetPopularMovies);
  const resp = await axios.get(urlGetPopularMovies);
  return resp.data.results;
};

export const getUpcomingMovies = async()=>{
  const urlGetUpcomingMovies:string=`${apiUrl}/movie/upcoming?${urLComplement}`;
  console.log(urlGetUpcomingMovies);
  const resp = await axios.get(urlGetUpcomingMovies);
  return resp.data.results;
};


export const getPopularTv = async()=>{
  const urlGetPopularTv:string=`${apiUrl}/tv/popular?${urLComplement}`;
  console.log(urlGetPopularTv);
  const resp = await axios.get(urlGetPopularTv);
  return resp.data.results;
};

export const getListGander = async()=>{
  const urlGetListGander:string=`${apiUrl}/genre/movie/list?${urLComplement}`;
  console.log(urlGetListGander);
  const resp = await axios.get(urlGetListGander);
  return resp.data.results;
};

export const getGenderMovie = async(id:number)=>{
  const urlGetGenderMovie:string=`${apiUrl}/discover/movie?${urLComplement}&with_genres=${id}`;
  console.log(urlGetGenderMovie);
  const resp = await axios.get(urlGetGenderMovie);
  return resp.data.results;
};
