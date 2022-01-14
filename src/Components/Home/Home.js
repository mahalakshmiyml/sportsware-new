import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import Img from "../../images/1-1.jpg";
import Img1 from "../../images/3-5.jpg";
import Img2 from "../../images/12-1-1.jpg";
import Img3 from "../../images/1-4-1.jpg";
import Img4 from "../../images/14-1-1.jpg";
import Img5 from "../../images/front.jpg";

const Home = () => {
  return (
    <div>
      <Container>
        <Row>
        <h1 className="text-center"> Men's Wear</h1>
          <Col md={4}>
            <Card className="text-center m-1">
              <Image src={Img} alt="" className="img-fluid" />
              <Card.Body>
                <Card.Title>MS Badminton Polo T-Shirt</Card.Title>
                <Card.Text>Rs. 699</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center m-1">
              <Image src={Img1} alt="" className="img-fluid" />
              <Card.Body>
                <Card.Title>MS Badminton Polo T-Shirt</Card.Title>
                <Card.Text>Rs. 699</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center m-1">
              <Image src={Img2} alt="" className="img-fluid" />
              <Card.Body>
                <Card.Title>MS Badminton Polo T-Shirt</Card.Title>
                <Card.Text>Rs. 699</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      
      <Container>
        <Row>
        <h1 className="text-center"> Women's Wear</h1>
          <Col md={4}>
            <Card className="text-center m-1">
              <Image src={Img3} alt="" className="img-fluid" />
              <Card.Body>
                <Card.Title>MS Badminton Polo T-Shirt</Card.Title>
                <Card.Text>Rs. 699</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center m-1">
              <Image src={Img4} alt="" className="img-fluid" />
              <Card.Body>
                <Card.Title>MS Badminton Polo T-Shirt</Card.Title>
                <Card.Text>Rs. 699</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center m-1">
              <Image src={Img5} alt="" className="img-fluid" />
              <Card.Body>
                <Card.Title>MS Badminton Polo T-Shirt</Card.Title>
                <Card.Text>Rs. 699</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
    
  );
};

export default Home;
