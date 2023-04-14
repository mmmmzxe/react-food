import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import './nav.css'
const Navs = () => {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="#home"><span className="span">Shop</span><span className="span2">Food</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about us">About us</Nav.Link>
                        <Nav.Link href="#explor food">Explor Food</Nav.Link>
                        <Nav.Link href="#reviwes">Reviwes</Nav.Link>
                        <Nav.Link href="#faq">Faq</Nav.Link>
                    </Nav>
                    <Nav>
                    <Nav.Link id="navlist" href="#faq">201548235</Nav.Link></Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default Navs;