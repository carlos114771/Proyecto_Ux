import React, { Component } from 'react';
import { Container } from 'reactstrap';
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
      <Container style={{borderStyle:'inherit', padding:'150px'}}><Login/></Container>
      <Footer/>

      </div>
    );
  }
}

export default App;
