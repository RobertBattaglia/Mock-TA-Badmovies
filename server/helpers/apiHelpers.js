const request = require('request');
const axios = require('axios');
const { API_KEY } = require('../../config.js');

const getMovies = () => {
  const config = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.asc&include_adult=false&include_video=false`
  };
  return axios(config);
};

const getGenres = () => {
  const config = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/genre/movie/list?language=en-US&api_key=${API_KEY}`
  };
  return axios(config);
};

module.exports = {
  getMovies,
  getGenres
};
