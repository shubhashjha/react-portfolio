import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiGit,
  DiMsqlServer,
  DiJqueryLogo
} from "react-icons/di";
import { IoLogoAngular } from "react-icons/io";
import { RiAngularjsLine } from "react-icons/ri";
import { SiMicrosoftazure,SiTypescript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { MdOutlineCss } from "react-icons/md";
import { BsFiletypeScss } from "react-icons/bs";



function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
        .NET
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        C#
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        EF
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        LINQ
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftazure />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <MdOutlineCss />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BsFiletypeScss />
      </Col>    
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJqueryLogo />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <RiAngularjsLine />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <IoLogoAngular />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMsqlServer />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
    </Row>
  );
}

export default Techstack;
