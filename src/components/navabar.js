import React from 'react';
import 'antd/dist/antd.css';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link} from  'react-router-dom';
import Logo from '../images/logo1.png';


class MenuBar extends React.Component {
 
 render() {
    return (
        <Navbar className='menuBar' collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand><div className='logoCover'> <img className='logo1'  alt='Logo' src={Logo}></img></div></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link className='menubarHover'>
      <Link  to='/'>
          HOME
         </Link>
         
        
        </Nav.Link> 
    </Nav>
    <Nav>
      <Nav.Link className='menubarHover' >
      <Link  to='/men'>
      Men's Collection
         </Link>
      </Nav.Link>
      <Nav.Link className='menubarHover' >
      <Link  to='/women'>
          Women's Collection
         </Link>
      </Nav.Link>
      <Nav.Link className='menubarHover' >
      <Link  to='/accessories'>
        Accessories
         </Link>
      </Nav.Link>
      <Nav.Link className='menubarHover' >
      <Link  to='/contact'>
          Contact Us
         </Link>
      </Nav.Link>
   
    </Nav>
  </Navbar.Collapse>
</Navbar>
 
    );
  }
}



export default MenuBar;