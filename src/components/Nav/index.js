import React, { useState } from "react";
import logo from '../../images/LadyRedDressWalkingDog.jpg';
import { Container, Row, Col, Dropdown, DropdownButton } from "react-bootstrap";

function Nav() {
    const [state, setState] = useState(0);
    const navcontent = [
        "Home",
        "About Us",
        "Mobile Services",
        "Social Media",
        "Contact Us"
    ];

    // This is the inital screen width from the time the user opens the application
    // to determine what navigation layout it will render
    let screenWidth = window.screen.width;

    // This is to listen if the user changes the size of the browser or screen to render navigation layout accordingly.
    window.addEventListener('resize', async () => {
        try {
            screenWidth = await window.screen.width;
            setState(screenWidth);
        }
        catch (e) {
            console.error(e);
        }
    });

    return (
        <header>
            <Container fluid className="bg-blue">
                <Row>
                    {/* <Col xs={10} sm={4} className="center-title"> */}
                    <Col xs={12} sm={4} md={4} lg={4} className="center-title">
                        <a href="/" className="no-a-style font-white">
                            <h1>
                                La Fetching Pooch, LLC
                            </h1>
                            <p>Mobile Pet Grooming Services</p>
                        </a>
                    </Col>
                    <Col xs={12} sm={4} md={6} lg={6}>
                        {state > 992 || screenWidth > 992 ? (
                            <Container className="font-white font-sm font-b-style">
                                <Row>
                                    {navcontent.map((content) => (
                                        <Col key={content} className="nav-content">
                                            <span className="li-span">
                                                {content}
                                            </span>
                                        </Col>
                                    ))}
                                    <Col className="center-logo">
                                        <a href="/" className="no-a-style font-white">
                                            <img src={logo} alt="logo" className="logo" />
                                        </a>
                                    </Col>
                                </Row>
                            </Container>
                        ) : (
                            <Container>
                                <Row>
                                    <Col xs={4} sm={8}>
                                        <DropdownButton id="dropdown-basic-button" title="&equiv;" className="text-left">
                                            {navcontent.map((content) => (
                                                <Dropdown.Item href={`#${content}`} key={content} className="nav-drop-center">
                                                    <span className="li-span">
                                                        {content}
                                                    </span>
                                                </Dropdown.Item>
                                            ))}
                                        </DropdownButton> 
                                    </Col>
                                    <Col xs={8} sm={4} className="center-logo">
                                        <a href="/" className="no-a-style font-white">
                                            <img src={logo} alt="logo" className="logo" />
                                        </a>
                                    </Col>
                                </Row>
                            </Container> 
                        )}
                        
                    </Col>

                </Row>
            </Container>
        </header>
    );
};

export default Nav;