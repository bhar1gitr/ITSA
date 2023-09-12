import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Card from "./Cards";
import Particle from '../Particle';

const Event = () => {
  return (
    <Container style={{marginTop:"100px"}} fluid>
<Particle></Particle>
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

    
  )
}

export default Event