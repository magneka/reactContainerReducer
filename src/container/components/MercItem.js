import React, { useState } from "react";
import { Form, Button, Jumbotron, Container, Row, Col } from "react-bootstrap";

const MercItem = (props) => {
  const [antall, setAntall] = useState("0");

  const shopItem = () => {
    console.log("Shoping");
    //props.shopMerc(produktId);
  };

  return (
    <Jumbotron>
      <h1>{props.item.produkt}</h1>
      <p>Klikk på knappen for å kjøpe</p>
      <Form>
        <Container className="text-left ">
          <Row className="h-75">
            <Col sm={2}>
              <b>ProduktId</b>
            </Col>
            <Col sm={4}>{props.item.produktId}</Col>
          </Row>
          <Row className="h-75">
            <Col sm={2}>
              <b>Beskrivelse</b>
            </Col>
            <Col sm={4}>{props.item.produkt}</Col>
          </Row>
          <Row>
            <Col sm={2}>
              <b>Farge</b>
            </Col>
            <Col sm={4}>{props.item.farge}</Col>
          </Row>
          <Row>
            <Col sm={2}>
              <b>Størrelse</b>
            </Col>
            <Col sm={4}>{props.item.størrelse}</Col>
          </Row>
          <Row>
            <Col sm={2}>
              <b>Bestill antall</b>
            </Col>
            <Col sm={4}>
              <Form.Control
                type="text"
                placeholder="bestill antall"
                onChange={(e) => setAntall(e.target.value)}
                value={antall}
              />
            </Col>
          </Row>
          <Row>
            <Col sm={2}></Col>
            <Col sm={4}>
              <Button onClick={() => shopItem()}>Bestill</Button>
            </Col>
          </Row>
        </Container>
      </Form>

      <br />
      {JSON.stringify(props)}
    </Jumbotron>
  );
};

export default MercItem;
