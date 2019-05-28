import React, {Component} from "react";
import Movie from './Movie.js';

class MovieList extends Component {
  render() {
    const movieNodes = this.props.data.map(movie => {
      return(
        <Movie name={movie.name} url={movie.url} key={movie.id}> {movie.text}</Movie>
      );
    });

    return(
      <div className="movie-list">
        {movieNodes}
      </div>
    );
  }
}

export default MovieList;
