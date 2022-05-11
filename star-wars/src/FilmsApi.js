import axios from 'axios';
import React, { useEffect, useState } from 'react';


function FilmsApi() {


  //useState hook
  const [results, getResults] = useState('');

  //get data from the API 
  const urlTwo = 'https://swapi.dev/api/films/?format=json';

  //useEffect hook
  useEffect(() => {
  function getAllFilms (){
  } 
  getAllFilms()
}, [])


  //get data from the API 
  const getAllFilms = () => {
    axios.get(`${urlTwo}`)
      .then((response) => {
        const movieTiltes = response.data.results.title;
console.log(movieTiltes)
       
//adding state to my project
        getResults(movieTiltes);

      })
      .catch(error => console.error(`Error: ${error}`));


    return (
      <FilmsApi results={results} />
    )
  }
}

export default FilmsApi; 