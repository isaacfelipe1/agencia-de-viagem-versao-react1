import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Footer from './Footer'; 
import Whatsapp from './Whatsapp';
import Robo from './Robo';
function GridExample() {
  const imageUrls = [
    "https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1004584/pexels-photo-1004584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1450340/pexels-photo-1450340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ];
  return (
    <div>
      <Row xs={1} md={2} className="g-4">
        {imageUrls.map((url, idx) => (
          <Col key={idx} style={{ maxWidth: '600px' }}> 
            <Card>
              <Card.Img
                variant="top"
                src={url}
                style={{ width: '100%', height: 'auto' }} 
              />
              <Card.Body className="text-center"> 
                <Card.Title>Viagem Turistas</Card.Title>
                <Card.Text>
                🚶Vista para o mar, com hoteis inscrível, lindos roteiros e turismos, com wifi de ponta e ótimo local para se divertir.
                </Card.Text>
                <Whatsapp/> 
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div>
</div>
      <Footer /> 
      <Robo/>
    </div>
  );
}
export default GridExample;
