import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function TopBar() {
  return (
    <div style={{ fontSize: "0.8rem" }}> 
      <Container> {/* same Container as Navbar */}
        <Row className="justify-content-end py-1">
          <Col xs="auto">
            <span className="me-3">📞 +1 234 567 890</span>
            <span className="me-3">✉️ support@shopeasy.com</span>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              💬 WhatsApp
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
