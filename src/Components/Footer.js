import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Navbar'
class Footer extends React.Component { 
    render(){
        const name = 'Salam Mustafa';
        return(
            <footer>
            <Navbar bg="primary" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Author: {name}</Navbar.Brand>
            <Nav className="me-auto">
            </Nav>
            </Container>
             </Navbar>   
            </footer>
        )
    }
}
export default Footer;
