import React, { useState } from "react";
import logo from '../../images/LadyRedDressWalkingDog.jpg';
import { Container, Row, Col, Dropdown, DropdownButton } from "react-bootstrap";

function Footer() {
    const [state, setState] = useState(0);

    function fullYear() {
        const yearFormat = new Date();
        return yearFormat.getFullYear();
    }

    // This is the inital screen width from the time the user opens the application
    // to determine what navigation layout it will render
    let screenWidth = window.innerWidth;

    // This is to listen if the user changes the size of the browser or screen to render navigation layout accordingly.
    window.addEventListener('resize', async () => {
        try {
            screenWidth = await window.innerWidth;
            setState(screenWidth);
        }
        catch (e) {
            console.error(e);
        }
    });

    return (
        <footer className="bg-blue footer-lg font-white">
            <Container fluid>
                <Row>
                    <Col sm={6} md={6} lg={6}>
                        <div  className="arr">
                            <img src={logo} alt="logo" className="logo footer-logo" />
                            <div className="arr-mini">
                                <h2 className="font-b-style footer-font"><a className="no-a-style font-white" href='/'>
                                    &copy; 
                                    <span>{fullYear()} </span> 
                                    <span className="footer-title">La Fetching Pooch, LLC</span> 
                                    <br />
                                    Mobile Pet Grooming Services
                                </a></h2>
                                <p className="font-b-style footer-font aRR">All Rights Reserved</p>
                            </div>
                        </div>
                    </Col>
                    {state > 1195 || screenWidth > 1195 ? (
                        <>
                            <Col className="phone">
                                <a className="footer-font no-a-style font-white" href="tel:9312501080">
                                    {/* 📞(931)250-1080 */}
                                    <i class="fa fa-phone" aria-hidden="true">
                                        <span className="font-b-style">(931)250-1080</span>
                                    </i>
                                </a>
                            </Col>
                            <Col className="phone">
                                <a className="footer-font no-a-style font-white" href="mailto:lafetchingpooch@gmail.com">
                                    <i class="fa fa-envelope-open-o" aria-hidden="true">
                                    <span className="font-b-style">lafetchingpooch@gmail.com</span>
                                    </i>
                                </a>
                            </Col>
                            <Col className="phone">
                                <p className="footer-font no-a-style font-white">
                                    <i class="fa fa-map-marker" aria-hidden="true">
                                        <span className="font-b-style">Surrounding areas of Crossville & Knoxville, TN</span>
                                    </i>
                                </p>
                            </Col>
                        </>
                    ): (<></>)}
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;