import React from "react";
import Card from "react-bootstrap/Card";

function Contact() {
  return (
    <Card className="project-card-view">
      <Card.Body>
        <Card.Title>Email Id</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          shubhash.freelancing40@gmail.com
        </Card.Text>

        <Card.Title>Contact No.</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>+91 7359516990</Card.Text>
      </Card.Body>
    </Card>
  );
}
export default Contact;
