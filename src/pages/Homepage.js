import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';

function Homepage () {
    const photos = [
        {
            key: 1,
            pic: 'carousel1.jpg',
            description: 'Lorem Ipsum'
        },
        {
            key: 2,
            pic: 'carousel2.jpg',
            description: 'Lorem Ipsum'
        },
        {
            key: 3,
            pic: 'carousel3.jpg',
            description: 'Lorem Ipsum'
        },
        {
            key: 4,
            pic: 'carousel4.jpg',
            description: 'Lorem Ipsum'
        },
        {
            key: 5,
            pic: 'carousel5.jpg',
            description: 'Lorem Ipsum'
        },
        
    ];

    return (
        <>
            <Carousel className='center-items caro-back'>
                {photos.map(photo => (
                    <Carousel.Item key={photo.key}>
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

            {photos.map(photo => (
                <>
                {photo.key === 1 || photo.key === 3 || photo.key === 5 ? (
                    <section key={photo.key}>
                        <Container className='bg-blue sep-content'>
                            <Row>
                                <Col>
                                    <img
                                        src={require(`../assets/images/${photo.pic}`)}
                                        alt={photo.description}
                                        className='home-imgs'
                                    /> 
                                </Col>
                                <Col>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna 
                                        aliqua. Molestie at elementum eu facilisis sed odio morbi 
                                        quis. Lectus mauris ultrices eros in cursus turpis massa tincidunt. 
                                        Eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum. 
                                        Facilisi nullam vehicula ipsum a arcu. Aliquet bibendum enim facilisis 
                                        gravida neque convallis a. Egestas tellus rutrum tellus pellentesque eu 
                                        tincidunt tortor aliquam nulla. Accumsan sit amet nulla facilisi morbi 
                                        tempus. Vitae aliquet nec ullamcorper sit amet risus. Id neque aliquam 
                                        vestibulum morbi blandit cursus risus at. Tristique nulla aliquet enim 
                                        tortor at auctor.
                                    </p>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    ) : (
                    <section key={photo.key}>
                        <Container className='bg-red sep-content'>
                            <Row>
                                <Col md={8}>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna 
                                        aliqua. Molestie at elementum eu facilisis sed odio morbi 
                                        quis. Lectus mauris ultrices eros in cursus turpis massa tincidunt. 
                                        Eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum. 
                                        Facilisi nullam vehicula ipsum a arcu. Aliquet bibendum enim facilisis 
                                        gravida neque convallis a. Egestas tellus rutrum tellus pellentesque eu 
                                        tincidunt tortor aliquam nulla. Accumsan sit amet nulla facilisi morbi 
                                        tempus. Vitae aliquet nec ullamcorper sit amet risus. Id neque aliquam 
                                        vestibulum morbi blandit cursus risus at. Tristique nulla aliquet enim 
                                        tortor at auctor.
                                    </p>
                                </Col>
                                <Col>
                                    <img
                                        src={require(`../assets/images/${photo.pic}`)}
                                        alt={photo.description}
                                        className='home-imgs'
                                    />
                                </Col>
                            </Row>
                        </Container>
                    </section>
                )}
                </>
            ))}

        </>
    );
};

export default Homepage;