import React, { Component } from 'react';
//import pages
import SearchBar from '../containers/search-bar'
import WeatherList from '../containers/weather-list'

export default class App extends Component {
  render() {
    return (
      <div>
        <div className='container'>
          <div className="row text-center">
            <div className='col-sm-12 text-center'>
              <SearchBar/>
              <WeatherList/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
