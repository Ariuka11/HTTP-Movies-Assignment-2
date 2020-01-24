import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import UpdateMovie from "./Movies/UpdateMovie";
import AddMovie from "./Movies/AddMovie";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <>
      <nav>
          <Link to = '/'>Home</Link>
          <Link to = '/savedList'>Saved List</Link>
          <Link to = '/addMovie'>Add Movie</Link>
      </nav>
      {/* <SavedList list={savedList} /> */}
      <Route 
        path = '/savedList'
        render = {props => {
          return <SavedList list = {savedList} />
        }} />
      <Route exact path="/" component={MovieList} />
      <Route
        path="/movies/:id"
        render={props => {
          return <Movie {...props} addToSavedList={addToSavedList} />;
        }}
      />
      <Route exact path = '/update-movie/:id' component = {UpdateMovie} />
      <Route exact path = '/addMovie' component = {AddMovie}/>
    </>
  );
};

export default App;
