import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js';
import movieData from './data.js';
<<<<<<< HEAD
=======



class List extends React.Component{
  render(){
    return <li>{this.props.content}</li>;
  }
}

>>>>>>> 13a634afb48810420cf360cd2562775109bcd942

export default class MovieShowcase extends Component {
	generateMovieCards = () => {
		return movieData.map((movie, index) => <MovieCard
		      key={index}
		      title={movie.title}
		      IMDBRating={movie.IMDBRating}
		      genres={movie.genres}
		      poster={movie.poster}
		    />)
	};

<<<<<<< HEAD
	render() {
		return <div id="movie-showcase">{this.generateMovieCards()}</div>;
	}
=======
  generateMovieCards = () => {
    // map over your movieData array and return an array of the correct JSX
    return movieData.map(item=> <List content={item}/>)
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
>>>>>>> 13a634afb48810420cf360cd2562775109bcd942
}
