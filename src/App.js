import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MovieList from "./Component/MovieList";
import MovieDetails from "./Component/MovieDetails";
import BookingForm from "./Component/BookingForm";  
      function App() {
        const [movies, setMovies] = useState([]);
      
        useEffect(() => {
          // Fetch movie data from API
          fetch("https://api.tvmaze.com/search/shows?q=all")
            .then((response) => response.json())
            .then((data) => {
              setMovies(data);
            })
            .catch((error) => console.log(error));
        }, []);
        // console.log(movies);
        // console.log(typeof movies[0]?.show?.id);
      
        return (
          <div className='container'>
             <Router>
        <Switch>
      
        <Route exact path="/">
          <MovieList items={movies}  />
        </Route>
        <Route exact path="/movie-details/:movieId">
          <MovieDetails items={movies}  />
        </Route>
              
        <Route path="/booking-form" >
          <BookingForm/>
          </Route>
            </Switch>
      </Router>        
          </div>
        );
      }
      
      export default App;
      
