import React from 'react';
import { Carousel, Container } from 'react-bootstrap';

function Homepage () {
    return (
        <>
            <Container fluid>
                <Carousel className='center-items'>
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
                    <Carousel.Item>
                        <img 
                            className='caro-slide-pics'
                            src={require('../assets/images/20210513_120344.jpg')} 
                            alt="First Slide" 
                        />
                        <Carousel.Caption>
                            <h3>Mobile Pet Grooming Services</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </>
    );
};

export default Homepage;