import React, { Component } from 'react';
import { Container } from 'reactstrap';
import logo from './logo.svg';
import './App.css';
import NavBar from './Componentes/NavigationBar';
import Footer from './Componentes/Footer';
import Login from './Componentes/Login';
import SignUp from './Componentes/SignUp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <br/>
        {/*<Container style={{borderStyle:'inherit', padding:'150px'}}><Login/></Container>*/}
        <SignUp/>
        <Footer/>
      </div>
    );
  }
}

export default App;
