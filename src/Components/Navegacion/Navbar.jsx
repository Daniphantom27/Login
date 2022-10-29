import React from 'react'
import { useState } from 'react';
import {Link} from 'react-router-dom';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
} from 'mdb-react-ui-kit';


const Navbar = () => {
    const [showBasic, setShowBasic] = useState(false);
  return (
    <MDBNavbar expand='lg' dark  bgColor='dark'>
      <MDBContainer fluid>
        <MDBNavbarBrand >
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/250px-Rick_and_Morty.svg.png"
                style={{width: '100px'}} alt="logo" />
              <h4 className="mt-1 mb-5 pb-1"></h4>
            
            </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <Link to='/'><MDBNavbarLink active aria-current='page' href='#'>
            Inicio
              </MDBNavbarLink></Link>

            </MDBNavbarItem>
            
            <MDBNavbarItem>
            <Link to='/Registro'><MDBNavbarLink>Registro</MDBNavbarLink></Link>
            </MDBNavbarItem>

            <MDBNavbarItem>
            <Link to='/Login'><MDBNavbarLink>Login</MDBNavbarLink></Link>
            </MDBNavbarItem>

          </MDBNavbarNav>

        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default Navbar