import React, { useEffect, useState } from 'react';
import { Container, Card, ListGroup, Image } from 'react-bootstrap';
import educationData from './education.json'; // Adjust the path as necessary

const Education = () => {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    setEducation(educationData);
  }, []);

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Education</h2>
      {education.map((edu, index) => (
        <Card key={index} className="mb-4">
          <Card.Body>
            <Card.Title>{edu.degree}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{edu.institution} ({edu.year})</Card.Subtitle>
            <Card.Text>
              <strong>Certificates and Achievements:</strong>
            </Card.Text>
            <ListGroup>
              {edu.certificates.map((certificate, certIndex) => (
                <ListGroup.Item key={certIndex}>
                  <div className="d-flex align-items-center">
                    <Image src={certificate.image} alt={certificate.description} rounded style={{ width: '100px', height: 'auto', marginRight: '15px' }} />
                    <span>{certificate.description}</span>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default Education;
