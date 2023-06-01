import React from 'react'
import { Container, Row, Col, Tab } from "react-bootstrap";
import {ProjectCard} from "./ProjectCard"
import Nav from 'react-bootstrap/Nav';
import colorSharp2 from "../assets/img/color-sharp2.png"
import projImg1 from "../assets/img/netflix.png"
import commingSoon from "../assets/img/soon.png"
import notavailable from "../assets/img/404-error.png"

export const Projects= () => {

    const projects=[
        {
            title:"Netflixe clone",
            description:"Netflixe clone made by React,Firebase and Stripe",
            imgUrl: projImg1,
            demoUrl:"https://netflixe-clone-1d013.web.app/",
            codeUrl:"https://github.com/AymaneAbidane/Netflixclone-AymaneAbidane",

        },
        {
            title:"Ecomerce Cloth",
            description:"Ecomerce Cloth web site made by React,Strapi and Stripe ",
            imgUrl: commingSoon,
            demoUrl:"#",
            codeUrl:"#",
        },
        {
            title:"Ecomerce Electronices",
            description:"Ecomerce Electronices web site made by React,nodejs and Mongodb",
            imgUrl: commingSoon,
            demoUrl:"#",
            codeUrl:"#",
        },
        {
            title:"Not Available",
            description:"##################",
            imgUrl: notavailable,
            demoUrl:"#",
            codeUrl:"#",
        },
        {
            title:"Not Available",
            description:"##################",
            imgUrl: notavailable,
            demoUrl:"#",
            codeUrl:"#",
        },
        {
            title:"Not Available",
            description:"##################",
            imgUrl: notavailable,
            demoUrl:"#",
            codeUrl:"#",
        },
    ];

  return (
    <section className='project' id="projects">
        <Container>
              <Row>
                 <Col>
                     <h2>Personal Projects</h2>
                     <p>These personal web development projects embody my creative vision and technical prowess, serving as a testament to my dedication and growth in the field</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-item-center' id='pills-tab'>
                           <Nav.Item>
                               <Nav.Link eventKey="first">Tab one</Nav.Link>
                           </Nav.Item>
                           <Nav.Item>
                                 <Nav.Link eventKey="second">Tab Tow</Nav.Link>
                            </Nav.Item>
                           <Nav.Item>
                                 <Nav.Link eventKey="third">
                                       Tab three
                                  </Nav.Link>
                           </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project, index)=> {
                                              return(
                                                <ProjectCard key={index}{...project}/>
                                              )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                loren ipsum
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                loren ipsum
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                 </Col>
              </Row>
        </Container>
        <img className='background-image-right' src={colorSharp2} alt="" />
    </section>
  )
}
