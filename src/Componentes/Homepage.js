import React, { Component } from 'react';
import { Container } from 'reactstrap';
import NavBar from './NavigationBar';
import Carousel from './Carousel';
import Footer from './Footer'


class Home extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Container style = {{paddingTop:'60px', }}><Carousel  /></Container>
                <Footer/>
            </div>

        );
    }
}

export default Home;