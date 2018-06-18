import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar'
import Banner from './components/Banner/Banner'
import Activities from './components/Activities/Activities'
import Sponsors from './components/Sponsors/Sponsors'
import Expo from './components/Expo/Expo'
import CuboAccess from './components/CuboAccess/CuboAccess'
import About from './components/About/About'
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <NavBar/>
                <Banner/>
                <Activities/>
                <Expo/>
                <CuboAccess/>
                <Sponsors/>
                <About/>
            </div>
    );
  }
}

export default App;
