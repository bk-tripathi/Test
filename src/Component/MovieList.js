import React from "react";
import { Link } from "react-router-dom";

function MovieList({ items }) {
  console.log(items)
  return (
    <div className="flex flex-col gap-5">
      {items &&
        items?.map((movie, index) => (
          
          <Link to={`/movie-Details/${index}`}>
            <li key={index} className="flex flex-row gap-5  hover:bg-slate-300 bg-slate-200 w-full" >
                <div className='images'>
                  <img src={movie?.show?.image?.medium } alt='image not found' />
                </div>
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
              </Link>
          
        ))}
    </div>
  );
}

export default MovieList;
