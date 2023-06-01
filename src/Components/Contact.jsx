import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg"

export const Contact = () => {

    // const actionUrl=`${process.env.REACT_APP_WHOLURL}`;
    // console.log(actionUrl);
  return (
    <section className='contact' id='connect' >
        <Container>
             <Row className='align-item-center' >
                 <Col md={6}>
                     <img src={contactImg} alt="Conatct US" />
                 </Col>
                 <Col md={6}>
                     <h2>get In Touch</h2>
                     <form action="https://formsubmit.co/aymane.abidane@gmail.com" method="POST">
                        <Row>
                            <Col sm={6} className='px-1'>
                                <input type="text"  name='FullName' placeholder='Full Name' />

                            </Col>
                            <Col sm={6} className='px-1'>
                                <input type="email"  name='EmailAddress' placeholder='Email Address' 
                                />
                                
                            </Col>
                           
                            <Col sm={6} className='px-1'>
                                <input type="tel" name='phoneno' placeholder='Phone no' 
                                />                               
                            </Col>
                            <Col sm={6} className='px-1'>
                                <input type="text" name='subject' placeholder='Subject' 
                                />                               
                            </Col>
                            <Col sm={6} className='px-1'>
                                <textarea rows={6}  name='Message' placeholder='Message' 
                                 />    
                                <button type='submit'><span>Send</span></button>                     
                            </Col>
                        </Row>
                     </form>
                 </Col>
             </Row>
        </Container>
    </section>
  )
}
