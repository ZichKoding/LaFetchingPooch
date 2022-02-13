import React from 'react';
import { Carousel } from 'react-bootstrap';

function Homepage () {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img 
                        className='caro-slide-pics'
                        src={require('../assets/images/IMG_20210411_072537_276.jpg')} 
                        alt="First Slide" 
                    />
                    <Carousel.Caption>
                        <h3>Mobile Pet Grooming Services</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Homepage;