import React, { useState } from "react";
import { Navbar, Nav, Form, FormControl } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

export default function MyNavbar({ onSearch }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(query);
    navigate("/products");
  };

  return (
    <Navbar expand="lg" sticky="top" style={{ width: "100%", paddingLeft: 0, paddingRight: 0 }}>
      {/* Remove Container completely for full width */}
      <div style={{ display: "flex", alignItems: "center", width: "100%", padding: "0 1rem" }}>
        {/* Brand */}
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          EverStyle Home
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/products">Products</Nav.Link>
            <Nav.Link as={Link} to="/brands">Brands</Nav.Link>
            <Nav.Link as={Link} to="/spaces">Spaces</Nav.Link>
            <Nav.Link as={Link} to="/retailer">Find a Retailer</Nav.Link>
            <Nav.Link as={Link} to="/insights">Insights</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>

          {/* Search bar with icon */}
          <Form
            className="d-flex position-relative"
            onSubmit={handleSubmit}
            style={{ maxWidth: "400px", width: "100%" }}
          >
            <FormControl
              type="search"
              placeholder="Search products..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              style={{ paddingLeft: "2.5rem" }}
            />
            <FaSearch
              style={{
                position: "absolute",
                left: "0.75rem",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#6c757d"
              }}
            />
          </Form>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
