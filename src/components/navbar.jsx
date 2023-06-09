import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar bg-light border-bottom border-success border-2 shadow">
      <div className="container-fluid">
        <a className="navbar-brand fw-bolder text-success" href="#">
          Bahar Food
        </a>
        <ul className="nav">
          <li className="nav-item">
            <Link to="/" className="nav-link link-dark fw-semibold">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/list-menu" className="nav-link link-dark fw-semibold">
              List Menu
            </Link>
          </li>

          <li className="nav-item">
            <a href="" className="nav-link link-dark fw-semibold">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
