import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Stack from 'react-bootstrap/Stack';
import AboutList from "./AboutList";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
      <h1 className="purple" style={{textAlign:"center"}}>About Department</h1>
        <Stack className="purple" direction="vertical" gap={3}>
          <p className='purple'>Welcome to Department of Information Technology. The Department is established in 2014 with intake capacity of 60. In Information Technology Department besides imparting theoretical knowledge, a lot of stress is laid on hands-on training and overall development of the individual's personality. The faculty members supporting our program are experienced and highly qualified which provides an excellent environment for learning and research. Our ultimate aim is to create a very good learning environment for the students of this Department and to make the Information Technology Department a renowned Centre for learning. Department is said to thrive when the faculty and students produce results that are visible. Department aims at Creating learning and working environments that encourage students to reach their potential and discover their unique purpose. Emerging trends in technical and professional education call for value addition i.e. students must acquire something more than what is provided in the curriculum. The Department offers numerous of Value Addition Programs as a part of Institute Project Based Learning Initiative which are designed to bridge the gap between the academia and industry. The students have the option to choose the Value Addition Programs according to their desires and inclinations. Value addition Programs (VAP) allows Department students to strengthen their profile and knowledge. The Department has also started activities related to Gov. of India's initiatives for enhancing quality of Technical & Professional Education in our Country like NPTEL, IIT Bombay Spoken Tutorial, SWAYAM. The Department is earning a remarkable position in the field of technical education through the untiring efforts of the visionary management, competent faculty members and stupendous students. The Department with its state of the art facilities and dedicated team of faculty members has become a hub of technocrats and is marching towards new frontiers.</p>
          
        <AboutList></AboutList>
          
         <p className='purple'>For the Students aspiring for Engineering Admissions Department of Information Technology @ APSIT,Thane is the right Place. Last year Department has got the accreditation from National Board of Accreditation which is established by AICTE to assess the qualitative competence of the programs in Engineering and Technology. Important point to note is only 14 Tier II Private Engineering Institutes all over Maharashtra including us have Valid NBA Accreditation in Information Technology branch for AY 2021-2022.</p>

         <p className='purple'>This Accreditation itself is recognition of student centric, innovative, focused Teaching Learning practices that Department follows. Department also takes initiative in providing Value Added Courses to students to help them gain certifications in futuristic Technologies like IOT, Blockchain AI & ML, DevOps, Data Science, Cybersecurity, Microservices, AR & VR, Cloud Computing through strong Ecosystem build via Industrial Collaborations which also supports placement & research opportunities.</p>

        <p className='purple'>Department also provides preplacement Trainings, GATE & GRE Coaching at required times to ensure Students readiness for placement & Higher Studies. All these trainings are provided to students free of cost without putting any financial burden on them. Department hosts well-equipped Classrooms, Laboratories with 300+ high end Workstations for ICT enabled teaching learning processes & is supported by Accessible, Enthusiastic, Caring, Well Qualified, Energetic & dynamic faculty with specialization in core competencies. Department with its state-of-the-art facilities & dedicated team of faculty members has become a hub of technocrats & is marching towards new frontiers.</p>
        </Stack>
      </Container>
    </Container>
  );
}

export default About;
