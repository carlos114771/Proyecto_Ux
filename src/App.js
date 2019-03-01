import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Componentes/NavigationBar';
import Footer from './Componentes/Footer';
import Login from './Componentes/Login'
class App extends Component {
  render() {
    return (
      <div className="App">
      
      <NavBar/>
      <br/>
      <Login/>
      <Footer/>

      </div>
    );
  }
}

export default App;
