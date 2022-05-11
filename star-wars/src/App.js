import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PeoplesNames from './PeoplesNames';
import FilmsApi from './FilmsApi';


function App() {
  //useState hook
  const [results, getResults] = useState('');

  //get data from the API 
  const url = 'https://swapi.dev/api/people/?format=json';

  //useEffect hook
  useEffect(() => {
    getAllPeople();
  }, []);


  //get data from the API 
  const getAllPeople = () => {
    axios.get(`${url}`)
      .then((response) => {
        const characters = response.data.results;
        //  console.log (response.data);
        // console.log("results", characters)

        // forEach method 
        characters.forEach(element => {
          const filmNames = [];
          const films = element.films
          films.forEach(movie => axios.get(`${movie}`).then((responseTwo) => {
            const movieTitle = responseTwo.data.title;

            filmNames.push(movieTitle);
          }))
          element.films = filmNames;
        }
        );
        // console.log(characters); 

        //add our data to state object
        getResults(characters);
      })
      .catch(error => console.error(`Error: ${error}`));


  }

  // Return for characters function 
  return (
    <>
      <PeoplesNames results={results} />
      {/* <FilmsApi results={results} />  */}
    </>
  );
}


export default App;
