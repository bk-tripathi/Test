import React from "react";
import { Link, useParams } from "react-router-dom";
import './MovieDetails.css';  
import Container from "./Container";

function MovieDetails({items}) {
   const {movieId}= useParams();
     console.log("movie", movieId);
   const movie = items[movieId] ;
  
  return (
    <div className='flex flex-col gap-5'>
                  <div className="m-auto  ">
                    <img src={movie?.show?.image?.medium} />
                  </div>
                  {/* <span className="details">
                      title:{movie?.show?.name}
                      Type:{movie?.show?.type}
                      Genres:{movie?.show?.genres}
                      Language:{movie?.show?.language}
                      Runtime:{movie?.show?.runtime}minute 
                      Rating:{movie?.show?.rating?.average}
                     <p> Summary:{movie?.show?.summary}</p>

                  </span> */}
                  

                  <Container title={"title"} content={movie?.show?.name}> </Container>
                  <Container title={"Type"} content={movie?.show?.type}> </Container>
                  <Container title={"Genres"} content={movie?.show?.genres}> </Container>
                  <Container title={"Language"} content={movie?.show?.language}> </Container>
                  <Container title={"Runtime"} content={movie?.show?.runtime}minutes> </Container>
                  <Container title={"Rating"} content={movie?.show?.rating?.average}> </Container>
                  <Container title={"summary"} content={movie?.show?.summary}> </Container>
             

                    <Link to="/booking-form" className="m-auto rounded-md">
                      <button className=" rounded-md">Book Ticket </button>
                    </Link>
    </div>
  );
}

export default MovieDetails;
