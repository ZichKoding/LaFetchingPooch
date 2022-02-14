import React from 'react';
import { Carousel, Container } from 'react-bootstrap';

function Homepage () {
    const photos = [
        {
            pic: 'carousel1.jpg',
            description: 'Lorem Ipsum moufh laksdnf lkajsdf;ljc hasdfh asdfn, huiysdf fksjh qcyut ancyt  adhhcyh asdflkj.'
        },
        {
            pic: 'carousel2.jpg',
            description: 'Lorem Ipsum moufh laksdnf lkajsdf;ljc hasdfh asdfn, huiysdf fksjh qcyut ancyt  adhhcyh asdflkj.'
        },
        {
            pic: 'carousel3.jpg',
            description: 'Lorem Ipsum moufh laksdnf lkajsdf;ljc hasdfh asdfn, huiysdf fksjh qcyut ancyt  adhhcyh asdflkj.'
        },
        {
            pic: 'carousel4.jpg',
            description: 'Lorem Ipsum moufh laksdnf lkajsdf;ljc hasdfh asdfn, huiysdf fksjh qcyut ancyt  adhhcyh asdflkj.'
        },
        {
            pic: 'carousel5.jpg',
            description: 'Lorem Ipsum moufh laksdnf lkajsdf;ljc hasdfh asdfn, huiysdf fksjh qcyut ancyt  adhhcyh asdflkj.'
        },
        
    ];

    return (
        <>
            <Container fluid>
                <Carousel className='center-items'>
                    {photos.map(photo => (
                        <Carousel.Item>
                            <img 
                                className='caro-slide-pics'
                                src={require(`../assets/images/${photo.pic}`)} 
                                alt="First Slide" 
                            />
                            <Carousel.Caption>
                                <h3>{photo.description}</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                    
                </Carousel>
            </Container>
        </>
    );
};

export default Homepage;