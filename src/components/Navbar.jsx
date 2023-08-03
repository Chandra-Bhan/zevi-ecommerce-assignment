import React from "react";
import { FaSignInAlt, FaUserPlus, FaShoppingBasket } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Navbar() {
  const state = useSelector((state) => state.handleCart);

  return (
    <div>
      <nav className="navbar navbar-expand-lg  navbar-light bg-white py-3 shadow-sm">
        <div className="container-fluid">
          <NavLink className="navbar-brand" href="#">
            Collection
          </NavLink>

          <div className="" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
            </ul>
            <div className="buttons">
              <NavLink to="/cart" className="btn btn-outline-dark me-3">
                <i>
                  <FaShoppingBasket />
                </i>{" "}
                Cart ({state.length})
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
