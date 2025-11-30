import React, { useState } from "react";
import { Navbar, Nav, Form, FormControl, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaFileInvoiceDollar } from "react-icons/fa";
import useProductCategories from "./productCategories";
import useBrandCategories from "./brandCategories";
import useSpaceCategories from "./spaceCategories";
import { useQuote } from "./QuoteContext";

export default function MyNavbar({ onSearch }) {
  const { categories, loading: loadingCategories } = useProductCategories();
  const { spaces, loading: loadingSpaces } = useSpaceCategories();
  const { brands, loading: loadingBrands } = useBrandCategories();
  const { quoteItems } = useQuote();
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
             {/* Dynamic Products dropdown */}
            <NavDropdown title="Products" id="products-dropdown" key={categories.length}>
              {loadingCategories && (
                <NavDropdown.Item disabled>Loading…</NavDropdown.Item>
              )}

              {!loadingCategories &&
                categories.map((item, index) => (
                  <NavDropdown.Item
                    key={index}
                    as={Link}
                    to={`/products/collections/${item.slug}`}
                  >
                    {item.name}
                  </NavDropdown.Item>
                ))}
            </NavDropdown>

            <NavDropdown title="Brands" id="brands-dropdown">
              {loadingBrands && (
                <NavDropdown.Item disabled>Loading…</NavDropdown.Item>
              )}

              {!loadingBrands &&
                brands.map((item, index) => (
                  <NavDropdown.Item
                    key={index}
                    as={Link}
                    to={`/brands/${item.slug}`}
                  >
                    {item.name}
                  </NavDropdown.Item>
                ))}
            </NavDropdown>
            {/* Spaces Dropdown */}
            <NavDropdown title="Spaces" id="spaces-dropdown">
              {loadingSpaces && (
                <NavDropdown.Item disabled>Loading…</NavDropdown.Item>
              )}

              {!loadingSpaces &&
                spaces.map((item, index) => (
                  <NavDropdown.Item
                    key={index}
                    as={Link}
                    to={`/spaces/${item.slug}`}
                  >
                    {item.name}
                  </NavDropdown.Item>
                ))}
            </NavDropdown>

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

          {/* Quote Cart Icon */}
<div className="ms-3 position-relative">
  <Link to="/quote-cart" className="text-dark">
    <FaFileInvoiceDollar size={24} />

    {/* Show badge count */}
    {quoteItems.length > 0 && (
      <span
        style={{
          position: "absolute",
          top: "-5px",
          right: "-10px",
          background: "red",
          color: "white",
          borderRadius: "50%",
          fontSize: "12px",
          padding: "2px 6px"
        }}
      >
        {quoteItems.length}
      </span>
    )}
  </Link>
</div>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}