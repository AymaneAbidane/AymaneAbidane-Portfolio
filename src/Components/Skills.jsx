import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import javascript from "../assets/img/java-script.png"
import react from "../assets/img/react.png"
import nodejs from "../assets/img/nodejs.png"
import html from "../assets/img/html-5.png"
import css from "../assets/img/css-3.png"
import tailwind from "../assets/img/tailwindcss.png"
import sass from "../assets/img/sass.png"
import mongodb from "../assets/img/mongodb.png"
import mysql from "../assets/img/mysql.png"
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  return (
     <section className='skill' id='skills'>
         <Container>
                <Row>
                    <Col>
                        <div className='skill-bx'>
                              <h2>
                                Skills/knowledge
                              </h2>
                              <p>those are the tecnologies that i use to develope web sites</p>
                                <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                                      <div className='item'>
                                          <img src={javascript} alt="Image" />
                                          <h5>Java Script</h5>
                                      </div>
                                      <div className='item'>
                                          <img src={react} alt="Image" />
                                          <h5>React Redux</h5>
                                      </div>
                                      <div className='item'>
                                          <img src={nodejs} alt="Image" />
                                          <h5>Node JS</h5>
                                      </div>
                                      <div className='item'>
                                          <img src={html} alt="Image" />
                                          <h5>HTML 5</h5>
                                      </div>
                                      <div className='item'>
                                          <img src={css} alt="Image" />
                                          <h5>CSS</h5>
                                      </div>
                                      <div className='item'>
                                          <img src={tailwind} alt="Image" />
                                          <h5>TailWind CSS</h5>
                                      </div>
                                      <div className='item'>
                                          <img src={sass} alt="Image" />
                                          <h5>SASS</h5>
                                      </div>
                                      <div className='item'>
                                          <img src={mongodb} alt="Image" />
                                          <h5>MongoDB</h5>
                                      </div>
                                      <div className='item'>
                                          <img src={mysql} alt="Image" />
                                          <h5>MySQl</h5>
                                      </div>

                                </Carousel>
                        </div>
                    </Col>
                </Row>
         </Container>
         <img className='background-image-left' src={colorSharp} alt="" />
     </section>
  )
}
