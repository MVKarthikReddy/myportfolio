import React from "react";
import { Container } from "react-bootstrap";

import ParticleSkill from '../components/Particleskill'
import Techstack from "../components/Skillset/Techstack";
import Toolstack from "../components/Skillset/Toolstack";
import Github from "../components/Skillset/Github";

const Skillset = () => {
  return (
    <Container fluid className="about-section">
      <ParticleSkill />
      <Container>
        <h1 className="project-heading">
          Professional <strong className="yellow">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="yellow">Tools</strong> I use
        </h1>
        <Toolstack />

        {/* <Leetcode /> */}
        <Github />
      </Container>
    </Container>
  )
}

export default Skillset