import React from "react";
import { Link } from "react-router-dom";

function MovieList({ items }) {
  return (
    <div className="flex flex-col gap-5">
      {items &&
        items?.map((movie, index) => (
      
            <li key={index} className="flex flex-row gap-5 hover:bg-slate-300 bg-slate-200 w-full " >
              <Link to='/movie-Details'>
                <div className='images'>
                  <img src={movie?.show?.image?.medium } alt='image not found' />
                </div>
              </Link>
              <div className="flex flex-col justify-center align-middle ">
              <span>
              Name: {`${movie?.show?.name}`}
              </span>
              <span>
              Language: {`${movie?.show?.language}`}
              </span>
              <span>
              Rating: {`${movie?.show?.rating.average}`}
              </span>
              </div>
            </li>
          
        ))}
    </div>
  );
}

export default MovieList;
