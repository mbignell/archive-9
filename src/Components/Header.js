import React from 'react';
import PropTypes from 'prop-types';
import {
  Route
} from 'react-router-dom';
import Navigation from './Navigation';
import Form from './Form';

const Header = props => {
  return(
    <header>
      <Route path={'/search'} component={ () => <Form performSearch={props.performSearch} /> } />
      <Navigation performSearch={props.performSearch} />
    </header>
  );
}
Header.propTypes = {
  performSearch: PropTypes.func.isRequired,
}
export default Header;
