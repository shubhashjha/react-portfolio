import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiSwagger,
  SiAzuredevops,
  SiSonarqube,
} from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import { FaBitbucket,FaJenkins,FaGit,FaSourcetree,FaTrello,FaJira } from "react-icons/fa";




function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaBitbucket />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaJenkins />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaSourcetree />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaTrello />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaJira />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiVisualstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAzuredevops />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSonarqube />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSwagger />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
    </Row>
  );
}

export default Toolstack;
