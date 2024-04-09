import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram
} from "react-icons/ai";
import { 
  FaLinkedinIn,
  FaTelegramPlane
 } from "react-icons/fa";
import './Social.css'

const Social = () => {
  return (
    <Container style={{padding: '30px'}}>
    <Row>
              <Col md={12} className="contact-social">
                <div className='contact-text'>
                <h1>FIND ME ON</h1>
                
                </div>
                <ul className="contact-social-links">
                  <li className="contact-icons">
                    <a
                      href="https://github.com/MVKarthikReddy/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-color  contact-social-icons"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  
                  <li className="contact-icons">
                    <a
                      href="https://www.linkedin.com/in/karthik-reddy-medagam/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-color  contact-social-icons"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="contact-icons">
                    <a
                      href="https://www.instagram.com/karthik__medagam/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-color contact-social-icons"
                    >
                      <AiFillInstagram />
                    </a>
                  </li>
                  <li className="contact-icons">
                    <a
                      href="https://t.me/Karthik_Reddy_Medagam"
                      className="icon-color contact-social-icons"
                      target="_blank" 
                      rel="noreferrer"
                    >
                      <FaTelegramPlane />
                    </a>
                  </li>
                </ul>
                <p className="text-white">
                  Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
                </p>
              </Col>
            </Row>
          </Container>
  )
}

export default Social