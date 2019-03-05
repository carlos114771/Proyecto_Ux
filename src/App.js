import React, { Component } from 'react';
import { Container, Carousel } from 'reactstrap';
import logo from './logo.svg';
import './App.css';
import NavBar from './Componentes/NavigationBar';
import Footer from './Componentes/Footer';
import Login from './Componentes/Login';
import SignUp from './Componentes/SignUp';
import Hp from './Componentes/Homepage';

class App extends Component {
  render() {
    return (
     <div className="App">
     <Hp/>
      {/*<NavBar/>
        <br />
        <Container>
          <Hp />

        </Container>
        <Container style={{ borderStyle: 'inherit', padding: '150px' }}><SignUp /></Container>
      <Footer />*/}
      </div>
    );
  }
}

export default App;
