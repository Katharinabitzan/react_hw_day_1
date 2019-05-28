import React, {Component} from 'react';

class Movie extends Component {
render() {
return(
  <div className="movie">
  <h4>{this.props.children}</h4>
  <p>{this.props.name}</p>
  <p>{this.props.url}</p>
  </div>
);
}
}

export default Movie;
