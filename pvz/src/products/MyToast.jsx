import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';


export const MyToast = ({ title, setShowToast, showToast }) => {
  return (
    <Row>
      <Col xs={6}>
        <Toast
          onClose={() => setShowToast(false)}
          show={showToast}
          delay={3000}
          autohide
        >
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">added to chart</strong>
          </Toast.Header>
          <Toast.Body>{title} was added to chart</Toast.Body>
        </Toast>
      </Col>
      <Col xs={6}>
        <Button onClick={() => setShowToast(true)}>Show Toast</Button>
      </Col>
    </Row>
  );
};