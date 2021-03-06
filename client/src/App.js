import React, { useState } from 'react';
import { Route } from "react-router-dom";
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const App = () => {
const [savedList, setSavedList] = useState( [] );

const addToSavedList = movie => {
      setSavedList( [...savedList, movie] );
  };

  return (

    <div>
      <SavedList list={savedList} />
      <div>
        {/* <Route exact path="/" render={() => <MovieList/>}/> */}
        <Route exact path="/" component={MovieList}/>
          {/* <MovieList/>
        </Route> */}
        <Route path="/movies/:id">
          <Movie addToSavedList={addToSavedList}/>
        </Route>
      </div>
    </div>
  );
};

export default App;
