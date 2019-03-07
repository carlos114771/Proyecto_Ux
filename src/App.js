import React, { Component } from 'react';
import { Container, Carousel } from 'reactstrap';
import logo from './logo.svg';
import './App.css';
import NavBar from './Componentes/NavigationBar';
import Footer from './Componentes/Footer';
import Login from './Componentes/Login';
import SignUp from './Componentes/SignUp';
import Hp from './Componentes/Homepage';
import PropTypes from 'prop-types';
import Content from './Componentes/Content';

class App extends Component {
  static propType={
    children: PropTypes.object.isRequired
  };
  render() {
    const {children} =this.props;
    return (
      <div className ="App">
        <Content body = {children}/>  
      </div>
    );
  }
}

export default App;
