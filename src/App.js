import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Header from './Components/Header';
import EmptyState from './Components/EmptyState';
import Gallery from './Components/Gallery';
import NotFound from './Components/NotFound';

import apiKey from './config';

class App extends Component {
    constructor() {
      super();
      this.state = {
        images: [],
        pagetitle: "",
        loading: true
      };
    }

    componentDidMount() {
      if (window.location.href.indexOf('/search/') > 0) {
        var pathArray = window.location.pathname.split( '/' );
        this.performSearch(pathArray[2]);
      } else {
        this.performSearch();
      }
    }

    performSearch = (query = '') => {
      axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=20&format=json&nojsoncallback=1`)
        .then(response => {
          this.setState({
            images: response.data.photos.photo,
            pagetitle: query,
            loading: false
          });
        })
        .catch(error => {
          console.log('Error fetching and parsing data', error);
        });
    }

    render() {
      return (
        <BrowserRouter>
          <div className="container">

            <Header
              performSearch={this.performSearch} />

            <Switch>
              <Route exact path="/" component={EmptyState}/>
              <Route exact path="/search" component={null}/>
              <Route path="/search/:query" component={ (props) => <Gallery {...props} data={this.state.images}  title={this.state.pagetitle} loading={this.state.loading} /> } />
              <Route component={NotFound}/>
            </Switch>

          </div>
        </BrowserRouter>
      );
    }
}

export default App;
