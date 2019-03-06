import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import foto1 from '../pictures/carritoprueba1.jpg';
import foto2 from '../pictures/carritoprueba2.jpg';
import foto3 from '../pictures/carritoprueba2.jpg';
class DemoCarousel extends Component {
    render() {
        return (
				
						<Carousel 
						infiniteLoop ={true} 
						autoPlay={true}
						useKeyboardArrows={true}
						centerSlidePercentage= {90}>
                <div>
                    <img src={foto1} style={{border: 'groove'}}/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={foto2}  style={{border: 'groove'}}/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={foto3}  style={{border: 'groove'}}/>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
					
        );
    }
}
 
export default DemoCarousel;