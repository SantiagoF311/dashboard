import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import { useState } from 'react';

export const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMouseEnter = () => {
    setShowMenu(true);
  };

  const handleMouseLeave = () => {
    setShowMenu(false);
  };

  const title = (
    <span className='navButtonTitleContainer'>
      <p className='navButtonText'>Menu</p>
      <DensityMediumIcon />
    </span>
  );

  return (
    <Navbar className='bg-body-transparennt customNavbar' expand="md">
      <Container fluid>
        <Navbar.Brand as={Link} to={'/'} className="logo-brand">
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
        <Navbar.Collapse id="basic-navbar-nav" className="navItemsContainer">
          <Nav
            className='navBarButtonContainer'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className='navBarButton'>
              <NavDropdown
                title={title}
                id="basic-nav-dropdown"
                className={`navButton ${showMenu ? 'show' : ''} menuDropdown`}
                show={showMenu}
              >
                <NavDropdown.Item className='navDropDownItem' as={Link} to={'/'}>
                  <span className='dropDownItemText'>Inicio</span>
                </NavDropdown.Item>
              </NavDropdown>
            </div>
          </Nav>
          <Nav className='navLinkContainer'>
            <Nav.Link as={Link} to={'/'}>Inicio</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title="Super admin" id="basic-nav-dropdown" className='userDropDown'>
              <NavDropdown.Item className='userDropDownItem' as={Link} to={'/'}>None</NavDropdown.Item >
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
