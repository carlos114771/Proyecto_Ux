import React, { Component } from 'react';
import { Container, Carousel } from 'reactstrap';
import NavBar from './NavigationBar';
import Footer from './Componentes/Footer';
import Login from './Componentes/Login';
import SignUp from './Componentes/SignUp';
import Hp from './Componentes/Homepage';
import Cards from './Cards';

class Main extends Component {
  render() {
    return (
     <div>
         <NavBar></NavBar>
         <Container>
             <Cards/>
         </Container>
         <Footer></Footer>
      </div>
    );
  }
}

export default Main;