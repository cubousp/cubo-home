import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar'
import Banner from './components/Banner/Banner'
import Activities from './components/Activities/Activities'
import Sponsors from './components/Sponsors/Sponsors'
import CuboAccess from './components/CuboAccess/CuboAccess'
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <NavBar/>
                <Banner/>
                <Activities/>
                <CuboAccess/>
                <Sponsors/>
            </div>
    );
  }
}

export default App;
