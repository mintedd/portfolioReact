import React from 'react';
import profilepic  from '../../assets/profilepic.png'


// export default function About() {
//   return (
//     <div id='about'>
//       <h1>About Me</h1>
//       <img src={profilepic} alt="profilepic" />

//       Graduated from The Ohio State University. Recieved a Bachelor of Science in Biology Pre-Medicine and Minored in Korean. After graduation, Covid hit and I ended up helping my mother out with her cafe business. However, due to the pandemic we had to shut that down and I went into pursue my career in Real Estate. Loved what I did but wanted a bit more structure to my life so here I am now pursuing Software Engineering

//     </div>
//   );
// }


import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function About() {
  return (
    <Row xs={1} md={6}>
        <Col>
          <Card>
            <Card.Img variant="top" src={profilepic} alt="profilepic" />
            <Card.Body>
              <Card.Title>About Me</Card.Title>
              <Card.Text>
              Graduated from The Ohio State University. Recieved a Bachelor of Science in Biology Pre-Medicine and Minored in Korean. After graduation, Covid hit and I ended up helping my mother out with her cafe business. However, due to the pandemic we had to shut that down and I went into pursue my career in Real Estate. Loved what I did but wanted a bit more structure to my life so here I am now pursuing Software Engineering
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
    </Row>
  );
}

export default About;