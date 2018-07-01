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
import './App.css'
import { Element , scrollSpy } from 'react-scroll'

class App extends Component {
    componentDidMount() {
        scrollSpy.update();
    }

    render() {
        return (
            <div className="App">
                <NavBar/>
                <Element name={"banner"}><Banner/></Element>
                <Element name={"activities"}><Activities/></Element>
                <Element name={"expo"}><Expo/></Element>
                <Element name={"cubo-access"}><CuboAccess/></Element>
                <Element name={"sponsors"}><Sponsors/></Element>
                <Element name={"about"}><About/></Element>
                <Element name={"location"}><Location/></Element>
                <Element name={"contact"}><Contact/></Element>
                <Element name={"footer"}><Footer/></Element>
            </div>
    );
  }
}

export default App;
