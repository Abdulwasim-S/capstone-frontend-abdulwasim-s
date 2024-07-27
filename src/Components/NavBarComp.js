import React, { useContext } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { AppContext } from '../App'
import { Switch } from '@mui/material';

const NavBarComp = () => {
  const {mode,setMode,textMode,setTextMode}=useContext(AppContext);
  return (
    <Navbar expand="lg" className='p-3' style={{borderBottom:"2px solid black"}} bg={mode==="dark"?"dark":""}>
      <Container>
        <Navbar.Brand className={'pl-6 pr-10 text-'+textMode} href="#home"><h2>Abdulwasim S</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" ><i class={"fa-solid fa-bars text-"+textMode}/></Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-end">
            <Nav.Link className={'active mx-3 text-'+textMode} href="#about">About</Nav.Link>
            <Nav.Link className={'active mx-3 text-'+textMode} href="#skills">Skills</Nav.Link>
            <Nav.Link className={'active mx-3 text-'+textMode} href="#projects">Projects</Nav.Link>
            <Nav.Link className={'active mx-3 text-'+textMode} href="#contact">Contact</Nav.Link>
            <Nav.Link className={'active mx-3 text-'+textMode} href="https://github.com/Abdulwasim-S" target='_blank'><i class="fa-brands fa-github fa-xl"/> GitHub</Nav.Link>
          </Nav>
          <sapn className={"mx-3 text-"+textMode}>Dark Mode<Switch color='default' onChange={() => {setMode(mode === "dark" ? "light" : "dark");setTextMode(textMode === "dark" ? "light" : "dark")}} /></sapn>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBarComp