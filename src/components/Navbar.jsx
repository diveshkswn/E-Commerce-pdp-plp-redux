/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import './Navbar.css';

function Navbar() {
  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">

          <Link to="/" className="navbar-brand">E-Commerce App</Link>
          {/* <a className="navbar-brand" href="/">E-Commerce App</a> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">Products</Link>
                {/* <a className="nav-link" href="/">Products</a> */}
              </li>

            </ul>
            <form className="d-flex ms-auto">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <ul className="navbar-nav ms-4 me-5">
              <li className="nav-item mt-2">
                <Link to="/cart" className="nav-link">
                  {/* <a className="nav-link" href="/cart">Cart</a> */}
                  Cart
                  <span className="cart-icon">

                    <FiShoppingCart size={30} />
                  </span>

                  <span className="navbar-cart-count">0</span>
                </Link>

              </li>
            </ul>
          </div>

        </div>
      </nav>
    </>
  );
}

export default Navbar;
