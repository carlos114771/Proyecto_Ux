import React, { Component } from 'react';
import { Container } from 'reactstrap';
import NavBar from './NavigationBar';
import Carousel from './Carousel';

class Home extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Container style = {{paddingTop:'50px'}}><Carousel /></Container>
            </div>

        );
    }
}

export default Home;