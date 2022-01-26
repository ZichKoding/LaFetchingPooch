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

    let screenWidth;

    window.addEventListener('resize', async () => {
        try {
            screenWidth = await window.screen.width;
            setState(screenWidth);
        }
        catch (e) {
            console.error(e);
        }
    })

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
                            <p>Mobile Dog Grooming Services</p>
                        </a>
                    </Col>
                    <Col xs={9} sm={4} md={6} lg={6}>
                        {state <= 1250 ? (
                            <Container>
                                <Row>
                                    <Col xs={6} sm={6}>
                                        <DropdownButton id="dropdown-basic-button" title="&equiv;" className="text-right">
                                            {navcontent.map((content) => (
                                                <Dropdown.Item href={`#${content}`} key={content} className="nav-drop-center">
                                                    <span className="li-span">
                                                        {content}
                                                    </span>
                                                </Dropdown.Item>
                                            ))}
                                        </DropdownButton> 
                                    </Col>
                                    <Col xs={6} sm={6} className="center-logo">
                                        <a href="/" className="no-a-style font-white">
                                            <img src={logo} alt="logo" className="logo" />
                                        </a>
                                    </Col>
                                </Row>
                            </Container> 
                        ) : (
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
                        )}
                        
                    </Col>

                </Row>
            </Container>
        </header>
    );
};

export default Nav;