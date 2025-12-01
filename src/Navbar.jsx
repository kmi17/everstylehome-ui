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
    <Navbar expand="lg" sticky="top">

      <div className="container-fluid">

      <div className="d-flex justify-content-between align-items-center w-100">
        {/* Brand */}
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          EverStyle Home
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
      </div>

        <Navbar.Collapse id="navbar-nav">
          <Nav className="ark-menu flex-column flex-lg-row mx-lg-auto">
             {/* Dynamic Products dropdown */}
            <NavDropdown title="Products" id="products-menu" className="ark-dropdown">
                {categories.map((item, index) => (
                  <NavDropdown.Item
                    key={index}
                    as={Link}
                    to={`/products/collections/${item.slug}`}
                  >
                    {item.name}
                  </NavDropdown.Item>
                ))}
            </NavDropdown>

            <NavDropdown title="Brands" id="brands-menu" className="ark-dropdown">
              {brands.map((item, index) => (
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
            <NavDropdown title="Spaces" id="spaces-menu" className="ark-dropdown">
              {
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

            {/* <Nav.Link as={Link} to="/retailer">Find a Retailer</Nav.Link> */}
            <Nav.Link as={Link} to="/insights">Insights</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>


{/* MOBILE & DESKTOP SEARCH + QUOTE */}
      <div className="ark-right d-flex flex-column flex-lg-row align-items-lg-center gap-3 mt-3 mt-lg-0">
          {/* Search bar with icon */}
          {/* <Form
            onSubmit={handleSubmit}
            className="ark-search position-relative w-100"
          >
            <FormControl
              type="search"
              placeholder="Search products..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-100"
            />
            <FaSearch
              className="ark-search-icon"
            />
          </Form> */}

          {/* Quote Cart Icon */}
<div className="ark-quote-icon position-relative align-self-start">
  <Link to="/quote-cart" className="text-dark">
    <FaFileInvoiceDollar size={22} />

    {/* Show badge count */}
    {quoteItems.length > 0 && (
      <span
       className="ark-quote-badge">
        {quoteItems.length}
      </span>
    )}
  </Link>
</div>
</div>
        </Navbar.Collapse>
      </div>

    </Navbar>
  );
}