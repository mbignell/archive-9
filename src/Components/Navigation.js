import React from 'react';
import {
  Route,
  NavLink,
  Redirect
} from 'react-router-dom';
import OpenSearch from './OpenSearch';

const Navigation = () => {
  return(
    <ul className="main-nav">
      <li><NavLink to={`/search/cats`}>Cats</NavLink></li>
      <li><NavLink to={`/search/dogs`}>Dogs</NavLink></li>
      <li><NavLink to={`/search/potatoes`}>Potatoes</NavLink></li>
      <li><NavLink to={`/search/castle`}>Castle</NavLink></li>
      <Route exact path={'/'} component={OpenSearch} />
    </ul>
  );
}

export default Navigation;
