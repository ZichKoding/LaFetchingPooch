import React from 'react';
import { Carousel } from 'react-bootstrap';

function Homepage () {
    const photos = [
        {
            pic: 'carousel1.jpg',
            description: 'Lorem Ipsum'
        },
        {
            pic: 'carousel2.jpg',
            description: 'Lorem Ipsum'
        },
        {
            pic: 'carousel3.jpg',
            description: 'Lorem Ipsum'
        },
        {
            pic: 'carousel4.jpg',
            description: 'Lorem Ipsum'
        },
        {
            pic: 'carousel5.jpg',
            description: 'Lorem Ipsum'
        },
        
    ];

    return (
        <>
            <Carousel className='center-items caro-back'>
                {photos.map(photo => (
                    <Carousel.Item key={photo.pic}>
                        <img 
                            className='caro-slide-pics'
                            src={require(`../assets/images/${photo.pic}`)} 
                            alt="First Slide" 
                        />
                        <Carousel.Caption>
                            <h3>
                                <span className='red-letters'>{photo.description}</span>
                            </h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
                
            </Carousel>
        </>
    );
};

export default Homepage;