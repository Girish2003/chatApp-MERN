import React from "react";
import { Button, Col, Form, FormGroup, Row } from "react-bootstrap";
import "./MessageForm.css";
function MessageForm() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <>
      <div className="message-output"></div>
      <div>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={11}>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="your message"
                ></Form.Control>
              </Form.Group>
            </Col>
            <Col md={1}>
              <Button
                type="submit"
                variant="primary"
                style={{ backgroundColor: "orange", width: "100%" }}
              >
                <i className="fas fa-paper-plane"></i>
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
}

export default MessageForm;
