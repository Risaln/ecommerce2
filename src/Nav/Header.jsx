import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';


function Header() {
  const [openBasic, setOpenBasic] = useState(false);
  
  const [searchQuery, setSearchQuery] = useState('');


  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Perform search operation using searchQuery
    console.log('Search Query:', searchQuery);
  };

  return (
    <div > 
        <MDBNavbar expand='lg' light bgColor='secondary' >
      <MDBContainer fluid className='p-3'>
        <MDBNavbarBrand href='/'>ElysianExchange</MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenBasic(!openBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar open={openBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='/'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/category'>Category</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              {/* <MDBNavbarLink href='/users'>Users</MDBNavbarLink> */}
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                  Dropdown
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                <MDBNavbarLink  href='/users'>Users</MDBNavbarLink>

                  
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            
          </MDBNavbarNav>

          <form className='d-flex input-group w-50' onSubmit={handleSearchSubmit}>
              <input
                type='search'
                className='form-control'
                placeholder='Type...'
                aria-label='Search'
                value={searchQuery}
                onChange={handleSearchInputChange}
              />
              <MDBBtn color='primary' type='submit'>Search</MDBBtn>
            </form>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    </div>
  )
}

export default Header