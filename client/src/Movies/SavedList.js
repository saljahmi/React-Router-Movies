import React from 'react';
import { useHistory } from 'react-router-dom';
import {Link} from "react-router-dom";

const SavedList = props => {

  // const history = useHistory()
  // const routeToHome = () => {
  //   history.push('/')
  // }

  return(
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <Link to={`/movies/${movie.id}`} key={movie.id}>
          <span className="saved-movie" key={movie.id}>{movie.title} </span>
        </Link>
      ))}
      {/* <div className="home-button" onClick={routeToHome}>Home</div> */}
      <Link to= '/'> <div className="home-button">Home</div> </Link>
    </div>
  )
};

export default SavedList;
