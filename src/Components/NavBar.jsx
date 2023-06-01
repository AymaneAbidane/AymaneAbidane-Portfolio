import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import logo from "../assets/img/logo2.png"
import navIcon1 from "../assets/img/nav-icon1.svg"
import githubIcon from "../assets/img/github.png"
import whatsappIcon from "../assets/img/whatsapp.png"


export const NavBar = () => {

 
    const [activelink,setActiveLink]= useState('home');
    const [scrolled,setScrolled]=useState(false);

    useEffect(()=>{
        const onScroll=()=>{
            if(window.scrollY > 50){
                setScrolled(true);
            }
            else{
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return ()=> window.removeEventListener("scroll",onScroll)
    },[])

    const onUpdateActiveLink=(value)=>{
        setActiveLink(value);
    }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
    <Container>
      <Navbar.Brand href="#home">
          <img src={logo} alt='LOGG'/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className='navbar-toggler-icon'></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home" className={activelink === "home" ? "active navbar-link" : "navbar-link"} onClick={()=>onUpdateActiveLink('home')}>Home</Nav.Link>
          <Nav.Link href="#skills" className={activelink === "skills" ? "active navbar-link" : "navbar-link"} onClick={()=>onUpdateActiveLink('skills')}>Skills</Nav.Link>
          <Nav.Link href="#projects" className={activelink === "projects" ? "active navbar-link" : "navbar-link"} onClick={()=>onUpdateActiveLink('projects')}>Projects</Nav.Link>
        </Nav>
        <span className="navbar-text">
            <div className='social-icon'>
                <a href="https://www.linkedin.com/in/aymane-abidane-20a36523b/" target='_blank'><img src={navIcon1} alt='icon1'/></a>
                <a href="https://github.com/AymaneAbidane" target='_blank'><img src={githubIcon} alt='icon2'/></a>
                <a href="https://wa.me/212625608123" target='_blank'><img src={whatsappIcon} alt='icon3'/></a>
            </div>
            <button className='vvd' onClick={()=>onUpdateActiveLink('connect')} >
                <span>Contact Me</span>
            </button>
        </span>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
