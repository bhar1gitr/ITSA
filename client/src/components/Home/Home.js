import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import homeLogo from "../../Assets/Home.png";
import Particle from "../Particle";
import Card from "./Card";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle/>
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">

              <h1 style={{marginTop:'50px'}} className="heading-name">
                <strong className="main-name">Welcome to Department of Information Technology</strong>
              </h1>

              <p style={{ padding: 50, textAlign: "left" }}>
                The Department is established in 2014 with an intake capacity of 60. In the Information Technology                Department, besides imparting theoretical knowledge, a lot of stress is laid on hands-on training and the               overall development of the individual's personality. 
              </p>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                className="floating"
                src={homeLogo}
                alt="home pic"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>

        </Container>
      </Container>

<Container>
 
</Container>
     
     <Container fluid>

     <Container>
     <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <Card/>
          </Col>
          <Col md={4} className="project-card">
            <Card></Card>
          </Col>
          <Col md={4} className="project-card">
            <Card></Card>
          </Col>
          <Col md={4} className="project-card">
            <Card></Card>
          </Col>
          <Col md={4} className="project-card">
            <Card></Card>
          </Col>
          <Col md={4} className="project-card">
            <Card></Card>
          </Col>
        </Row>
     </Container>
     </Container>
      {/* <Home2 /> */}
              {/* <Representative></Representative> */}
    </section>
  );
}

export default Home;
