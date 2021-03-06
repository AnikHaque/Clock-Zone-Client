import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
 import useAuth from '../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const {user,logout,admin} = useAuth();
    return (
        <div>
           <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home"><b className='fw-bold fs-3'>Clock-Zone</b></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto navigation-menu">
      <Nav.Link as={Link} to="/home" className='mx-2 fw-bold'>Home</Nav.Link>
      <Nav.Link as={Link} to="/about" className='mx-2 fw-bold'>About</Nav.Link>
      <Nav.Link as={Link} to="/watches" className='mx-2 fw-bold'>Watches</Nav.Link>
      <Nav.Link as={Link} to="/blogs" className='mx-2 fw-bold'>Blogs</Nav.Link>
      <Nav.Link as={Link} to="/contact" className='fw-bold'>Contact</Nav.Link>
      
      
    </Nav>
    <Nav>
    
    {
      admin &&  <Nav.Link as={Link} to="/dashboard" className='fw-bold pt-3'>Admin Dashboard</Nav.Link>
    }
       
        

     {
      !admin && user.email &&
      <Nav.Link as={Link} to="/dashboard" className='fw-bold pt-3'>User Dashboard</Nav.Link>
        } 
    
      { 
!user.email ?
     <Nav.Link as={Link} to="/login">
          <Button className='btn btn-light text-dark fw-bold px-4 pe-4'><i class="fa-solid fa-user pe-2"></i>Login</Button>
          </Nav.Link>
          :
          <Nav.Link as={Link} to="/login">
          <Button onClick={logout} className='btn btn-light text-dark fw-bold px-4 pe-4'><i class="fa-solid fa-user pe-2"></i>LogOut</Button>
          </Nav.Link>

          } 
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
           
        </div>
    );
};

export default Header;