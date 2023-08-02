import React from "react";
import { FaSignInAlt, FaUserPlus, FaShoppingBasket } from "react-icons/fa";

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg  navbar-light bg-white py-3 shadow-sm">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Collection
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Products
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
            <div className="buttons">
              <a href="" className="btn btn-outline-dark me-3">
                <i>
                  <FaSignInAlt />
                </i>{" "}
                Login
              </a>
              <a href="" className="btn btn-outline-dark me-3">
                <i>
                  <FaUserPlus />
                </i>{" "}
                Register
              </a>
              <a href="" className="btn btn-outline-dark me-3">
                <i>
                  <FaShoppingBasket />
                </i>{" "}
                Cart (0)
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;