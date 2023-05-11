import React from "react";
import { Link } from "react-router-dom";
import './MovieDetails.css';  

function MovieDetails({items}) {
     console.log(items);
  
  return (
    <div className='flex flex-col gap-5'>
     {items &&
              items?.map((movie, index) => (
                <li key={index} className="flex flex-col gap-5 ">
                  <div className="image ">
                    <img src={movie?.show?.image?.medium} />
                  </div>
                  <span className="details">
                      title:{movie?.show?.name}
                      Type:{movie?.show?.type}
                      Genres:{movie?.show?.genres}
                      Language:{movie?.show?.language}
                      Runtime:{movie?.show?.runtime}minute 
                      Rating:{movie?.show?.rating?.average}
                     <p> Summary:{movie?.show?.summary}</p>

                    <Link to="/booking-form">
                      <button>Book Ticket </button>
                    </Link>
                  </span>
                </li>
               ))} 
    </div>
  );
}

export default MovieDetails;
