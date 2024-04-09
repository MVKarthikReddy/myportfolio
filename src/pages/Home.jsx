import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from '../assets/about.png'
import Particle from '../components/Particle';
import About from '../components/Home/About';
import Type from '../components/Home/Type';

const Home = () => {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header pt-5">
              <h2 style={{ paddingBottom: 5 }} className="heading">
                Hello!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h2>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Karthik Reddy</strong>
              </h1>

              <div style={{ paddingLeft: 50, textAlign: "left", fontSize:"11px"}}>
                <Type />
              </div>
              <div style={{ paddingLeft: 50, textAlign: "left", fontSize:"20px"}} className='mt-5'>
                
                  Step into my digital realm! I'm motivated by the ambition to design captivating and flawless digital experiences. As a fervent <span className='text-primary fw-bolder'>full-stack</span> developer, I merge innovative technology with creative flair to transform ideas into reality.
                
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              
            </Col>
          </Row>
        </Container>
      </Container>
      <About />
    </section>
  );
}

export default Home