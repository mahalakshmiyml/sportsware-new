import React from 'react'
import { Card, Row } from 'react-bootstrap'
import { Container, Col, Image } from 'react-bootstrap';
import Img from "../../images/1-1.jpg";
import Img1 from "../../images/3-5.jpg";
import Img2 from "../../images/12-1-1.jpg";

const Men = () => {
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
        </div>
    )
}

export default Men
