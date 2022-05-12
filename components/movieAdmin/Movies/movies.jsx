import React from "react";

import NavBar from "../adminNavbar";
import Sidebar from "../sidebar";

import { Container, Form, Row, Col, Button } from "react-bootstrap";

export default function Movies() {
  return (
    <div>
      <NavBar />
      <Sidebar />
      <Container>
        <Form style={{ marginTop: "50px" }}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Movie Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridDirector">
              <Form.Label>Movie Director</Form.Label>
              <Form.Control type="text" placeholder="Director Name" />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control placeholder="Movie Description" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Cast</Form.Label>
            <Form.Control placeholder="The people who act" />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Banner</Form.Label>
              <Form.Control type="file" />
            </Form.Group>

            <Form.Group as={Col} controlId="formReleaseDate">
              <Form.Label>Release Date</Form.Label>
              <Form.Control type="date" />
            </Form.Group>

            <Form.Group as={Col} controlId="formDuration">
              <Form.Label>Duration</Form.Label>
              <Form.Control placeholder="hh-mm-ss" type="number" />
            </Form.Group>
          </Row>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}
