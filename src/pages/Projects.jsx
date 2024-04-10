import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import ParticleProject from "../components/ParticleProject";
import pg from "../assets/projects/pg.png";
import farmersBazaar from "../assets/projects/FarmersBazaar.png";
import lift from "../assets/projects/MyPhone.jpg";
import mailScheduler from "../assets/projects/MailScheduler.png";
import pdfExtractor from "../assets/projects/PdfExtractor.png";


const Projects = () => {
  return (
    <Container fluid className="project-section">
      <ParticleProject />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lift}
              isBlog={false}
              title="MY PHONE"
              description="This is an android application which is useful in finding missing phones by accessing location of the mobile using another mobile through sms services and also have some other interesting features like accessing contacts, ringing the phone and can lock phone by just sending an sms."
              ghLink="https://github.com/MVKarthikReddy/MyPhone"
              dnLink="https://drive.google.com/file/d/1_AVPnq2Y1sq1fib6t1I0vr4vkHID9ZG2/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mailScheduler}
              isBlog={false}
              title="Mail Scheduler"
              description="Welcome to Mail Scheduler, your ultimate solution for efficient email management. Mail Scheduler is a web-based application designed to streamline the process of writing and sending emails, allowing you to schedule emails to be sent at optimal times."
              ghLink="https://github.com/MVKarthikReddy/MailSchedulerFrontend"
              demoLink="https://6538da22de38746eaab585bd--peaceful-hummingbird-61e681.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={farmersBazaar}
              isBlog={false}
              title="Farmers Bazaar"
              description="Welcome to Farmers Bazaar, an e-commerce platform built using the MERN stack for connecting local farmers with customers seeking fresh, high-quality produce. At Farmers Bazaar, we're passionate about supporting local agriculture and promoting sustainable food practices."
              ghLink="https://github.com/MVKarthikReddy/Farmers_Bazaar"
              demoLink="https://farmers-bazaar.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="Sign Language Recognition"
              description="This is a deep learning project aims to bridge communication gaps between the hearing impaired and normal persons. Sign language recognition utilizing MediaPipe with LSTM (Long Short-Term Memory) and GRU (Gated Recurrent Unit) models involves leveraging MediaPipe for hand gesture detection and then employing LSTM and GRU architectures to interpret these gestures."
              ghLink="https://github.com/MVKarthikReddy/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pdfExtractor}
              isBlog={false}
              title="PDF Extractor"
              description="Pdf_Extractor is a web application which is helpful to store pdfs and designed to facilitate the extraction of specific pages from PDF . It utilizes JSON Web Tokens (JWT) for encryption, enabling secure file uploads and downloads. Users can upload PDFs to Wasabi Cloud Storage and select specific pages to download as a separate PDF document."
              ghLink="https://github.com/MVKarthikReddy/Pdf_Extractor_Frontend"
              demoLink="https://pdf-extractor-frontend.vercel.app/"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  )
}

export default Projects