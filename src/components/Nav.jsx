import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';

export const NavBar = () => {

 const title = (
    <span className='navButtonTitleContainer'>
      <p className='navButtonText'>Menu</p>
      <DensityMediumIcon/>
    </span>
  );


  return (
    <Navbar className='bg-body-transparennt customNavbar' expand="md">
      <Container fluid>
        <Navbar.Brand href="#home" className="logo-brand">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          EVAHIS
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
          <Nav className='navBarButtonContainer'>
            <NavDropdown title={title} id="basic-nav-dropdown" className='navButton'>
              <NavDropdown.Item className='dropdownItem' as={Link} to={'/'}>None</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="mx-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title="Super admin" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to={'/'}>None</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
