import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/about.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";



const About = () => {
    return (
        <Container fluid className="home-about-section" id="about">
          <Container className="container-fluid g-0">
            <Row className="bg-white bg-opacity-10 rounded-4">
              <Col md={12} className="p-5 d-flex flex-column justify-content-center">
                <h1 style={{ fontSize: "2.6em" }} className="text-white">
                  My Story
                </h1>
                <div md={12} className="d-flex justify-content-center mt-3">
                  <Tilt className="w-75">
                    <img src={LaptopImg} className="img-fluid rounded-circle img-thumbnail w-25" alt="avatar" />
                  </Tilt>
                </div>
                <div md={12} className="d-flex justify-content-center mt-4 text-white p-3 ">
                  I'm a final year Computer Science student at Vasireddy Venkatadri Institute of Technology, where I have gained<br /> a solid foundation in various areas of computer science, including data structures and algorithms, object-oriented programming, operating systems, and computer networks.

                  I'm always learning new things and looking for ways to stay on top of the latest tech and what's happening in the field.
                  Beyond my studies, I've been building my skills as a web developer. I'm particularly interested in the MERN stack, which helps create user-friendly websites and powerful applications.
                  My goal is to further enhance my skills and contribute to innovative projects that make a difference in the world. I am motivated and enthusiastic about computer science and engineering, and I value collaboration, creativity, and impact.

                  <br />
                  <br />
                  Apart from academics I love to draw pictures and listening to music.
                </div>
                
              </Col>
            </Row>
          </Container>
        </Container>
      );
    
}

export default About