import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MailChimpForm } from "./MailChimpForm";
import logo from "../assets/img/logo2.png"
import navIcon1 from "../assets/img/nav-icon1.svg"
import githubIcon from "../assets/img/github.png"
import whatsappIcon from "../assets/img/whatsapp.png"


export const Footer = () => {
  return <footer className="footer">
    <Container>
       <Row className="align-item-center">
          <MailChimpForm/>
          <Col sm={6}>
             <img src={logo} alt="logo"/>
          </Col>
          <Col sm={6} className="text-center text-sm-end">
             <div className="social-icon">
               <a href="https://www.linkedin.com/in/aymane-abidane-20a36523b/" target="_blank"><img src={navIcon1} alt="icon" /></a>
               <a href="https://github.com/AymaneAbidane" target="_blank"><img src={githubIcon} alt="icon" /></a>
               <a href="https://wa.me/212625608123" target="_blank"><img src={whatsappIcon} alt="icon" /></a>
             </div>
             <p>CopyRight 2023. All Right Reserved </p>
          </Col>
       </Row>
    </Container>
  </footer>
};
