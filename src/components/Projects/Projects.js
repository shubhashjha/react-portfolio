import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import MemberPortal from "../../Assets/Projects/MemberPortal.png";
import CRM from "../../Assets/Projects/CRM.png";
import Auxcon from "../../Assets/Projects/Auxcon.png";
import iqacademy from "../../Assets/Projects/iqacademy.png";
import abacus from "../../Assets/Projects/abacus.png";
import jaychemical from "../../Assets/Projects/jaychemical.png";
import hmis from "../../Assets/Projects/hmis.png";
import chatify from "../../Assets/Projects/chatify.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MemberPortal}
              isBlog={false}
              title="Member Portal TAG"
              description="Responsible for Member's Details in Web Applications for TAG. In That Members Can Manage their Suppliers, Can Check Price List's, Can Refere another members, Subscribe themselfs using this Portal."
              technologyUsed="ASP.NET MVC,C#,ANGULARJS,SQL Server , C#,.NET, SQL Server, Angular Js"
              demoLink="https://member.tradealliance.com.au/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CRM}
              isBlog={false}
              title="CRM Portal TAG"
              description="Admin Portal for TAG. Responsible for Manage Payments, Supliers,Members, Orders with their details"
              technologyUsed="ASP.NET MVC,C#,ANGULARJS,SQL Server ,C#,.NET, SQL Server, Angular Js,Azure Tables"
              demoLink="https://crm.tradealliance.com.au/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Order Portal TAG"
              description="Managing Order's for TAG"
              technologyUsed="ASP.NET MVC,C#,ANGULARJS,SQL Server ,C#,.NET, SQL Server, Angular Js,Azure Tables"
              demoLink="https://order.tradealliance.com.au/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Auxcon}
              isBlog={false}
              title="Auxcon"
              description="Used for Invoicing and matter management,Reconciliation of payments,Blue-chip debtor management,Expenses and accounting,Practice awareness for Advocate"
              technologyUsed=".NET Core, Angular, SQL Server, Azure Serverless,Radis Caching,Azure 360 Logic Apps,Azure Function Applications"
              demoLink="https://www.auxcon.co.za/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iqacademy}
              isBlog={false}
              title="IQ Academy"
              description="Build Background Process as per requirement."
              technologyUsed="Azure 360 Logic Apps"
              demoLink="https://www.iqacademy.ac.za/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={abacus}
              isBlog={false}
              title="Abacus Insurance"
              description="Implemented Logic Apps and Azure functions based on client requirements for validate claims/ Policies.Give support in Front end Implementation."
              technologyUsed="Azure Function, .Net Core,C#, React"
              demoLink="https://www.abacus-insurance.co.za/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jaychemical}
              isBlog={false}
              title="CRM Portal - Reporting Tool"
              description="Implemented Reporting Plateform from when Users can see all Financial Reports"
              technologyUsed=".Net Core,C#, Angular,Sql Server"
              demoLink="https://jaychemical.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hmis}
              isBlog={false}
              title="HMIS"
              description="eCLinicalWoks Product - A unified hospital management solution to
              help streamline operations, reduce costs and
              improve healthcare."
              technologyUsed=".Net Webforms,C#, Sql Server"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Auto Upgrade"
              description="eCLinicalWoks Internal Product - Automate Process for Deploying Product at client side"
              technologyUsed=".Net,C#,Window Applications"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
