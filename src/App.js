import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar'
import Banner from './components/Banner/Banner'
import Activities from './components/Activities/Activities'
import Sponsors from './components/Sponsors/Sponsors'
import Expo from './components/Expo/Expo'
import CuboAccess from './components/CuboAccess/CuboAccess'
import About from './components/About/About'
import Location from './components/Location/Location'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
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
                <Location/>
                <Contact/>
                <Footer/>
            </div>
    );
  }
}

export default App;
