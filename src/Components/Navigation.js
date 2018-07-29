import React from 'react';
import {
  Route,
  NavLink
} from 'react-router-dom';
import OpenSearch from './OpenSearch';

const Navigation = props => {
  return(
    <ul className="main-nav">
      <li><NavLink to={`/search/cats`} onClick={() => props.performSearch("Cats")}>Cats</NavLink></li>
      <li><NavLink to={`/search/dogs`} onClick={() => props.performSearch("Dogs")}>Dogs</NavLink></li>
      <li><NavLink to={`/search/potatoes`} onClick={() => props.performSearch("Potatoes")}>Potatoes</NavLink></li>
      <li><NavLink to={`/search/castle`} onClick={() => props.performSearch("Castle")}>Castle</NavLink></li>
      <Route exact path={'/'} component={OpenSearch} />
    </ul>
  );
}

export default Navigation;
