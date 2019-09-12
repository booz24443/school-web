import React, {Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import calendar from '../assets/images/calendar.svg';
import ver from '../assets/images/1.png';


import b from '../assets/images/2.jpg';
import c from '../assets/images/3.jpeg';
import d from '../assets/images/4.jpg';
import a from '../assets/images/5.jpg';
import aa from '../assets/images/6.jpg';

class MySlider extends Component {


    render() {
        return (
            <>

                <Carousel showIndicators={true} showThumbs={false} showStatus={false} infiniteLoop={true}>
                    <div>
                        <img src={a} />
                    </div>

                    <div>
                        <img src={aa} />
                    </div>

                </Carousel>

            </>
        );
    }
}

export default MySlider;