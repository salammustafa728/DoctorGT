import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import "./Header.css";
import Dropdown from 'react-bootstrap/Dropdown'
import NavLink from 'react-bootstrap/NavLink'
import Image from 'react-bootstrap/Image'
import Data from "../Data.json";

export class Header extends Component {
  render() {
    let ActiveSatus=Data.filter((status)=>status.title==='Active')
    let InActiveStatus=Data.filter((status)=>status.title==='InActive')
    let InShopStatus=Data.filter((status)=>status.description==='InShop')
    return (
     <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand >  Dashboard</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav"> 
              <Nav style={{marginLeft:"60%"}} className="me-auto">
                <Dropdown>
                <Dropdown.Toggle style={{background:"white",color:"black"}} id="dropdown-basic">
                  Vehicle Status:
                </Dropdown.Toggle>
                    <Dropdown.Menu>Details
                      <Dropdown.Item href="#/action-1"><NavLink activeClassName="active" >  <NavLink
                      activeClassName="active" 
                    >Active <Image className="img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX/AAAZ4gk3AAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC" 
                    style={{width:"30px",height:"30px"}} roundedCircle /><p className="pactive">{ActiveSatus.length}</p></NavLink>
                   </NavLink></Dropdown.Item>
                      <Dropdown.Item href="#/action-2" >In Shop
                      <Image className="img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Solid_blue.svg/2048px-Solid_blue.svg.png" 
                style={{width:"30px",height:"30px"}} roundedCircle /><p  className="pactive2"><p></p>{InActiveStatus.length}</p></Dropdown.Item>
                      <Dropdown.Item href="#/action-3">In Active    <Image className="img" src="https://5.imimg.com/data5/XK/MS/IA/SELLER-3526182/sunset-yellow-colour-500x500.png" 
                style={{width:"30px",height:"30px"}} roundedCircle /><p className="pactive3"> <p></p>{InShopStatus.length}</p> </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Header;