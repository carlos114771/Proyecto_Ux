import  React  from  'react';
import  Carousel  from  'semantic-ui-carousel-react';
import { Image, Button } from  'semantic-ui-react';
import foto1 from '../pictures/carritoprueba1.jpg';
import foto2 from '../pictures/carritoprueba2.jpg';
const  App  = () => {
	let  elements  = [
		{
			render:()=>{
				return <Image  ><img src={foto1}/></Image>
			}
		},
		{
			render:()=>{
				return <Image ><img src={foto2}/></Image>
			}
	    },
	]
	return (
		<div>
			<Carousel
				elements  =  {  elements  }
				duration  ={3000}
				animation  ='slide left'
				showNextPrev  =  {false}
				showIndicators  ={true}
			/>
		</div>
	)

}
export  default  App;