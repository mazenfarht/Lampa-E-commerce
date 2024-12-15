import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext, CartContext } from '../../App';
import img3 from "../../Img/s.png";

export default function Nav2() {
  const { isLoggedIn, username, logout } = useContext(AuthContext);
  const { totalQty } = useContext(CartContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg sticky-top" style={{ backgroundColor: '#f3f3f3' }}>
      <div className="container-fluid">
        <NavLink className="navbar-brand text-black" to="/home">
          <img src={img3} alt="Logo" style={{ height: '40px', width: 'auto' }} />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            {isLoggedIn && (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link text-black" to="/home">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-black" to="/chatbot">ChatBot</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-black" to="/product">Products</NavLink>
                </li>
                <NavLink to="/cart" className="nav-item position-relative d-flex align-items-center">
                  <i
                    className="fa-solid fa-cart-shopping"
                    style={{
                      fontSize: '20px',
                      marginRight: '5px',
                      color: 'black',
                    }}
                  ></i>
                  <span
                    className="badge badge-info text-white"
                    style={{
                      position: 'absolute',
                      top: '-10px',
                      right: '-15px',
                      padding: '5px 10px',
                      fontSize: '10px',
                      borderRadius: '50%',
                      backgroundColor: '#007bff',
                      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                    }}
                  >
                    {totalQty}
                  </span>
                </NavLink>
              </>
            )}
          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {!isLoggedIn && (
              <>
                <li className="nav-item">
                  <NavLink className="btn btn-primary mx-1" to="/login">Login</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="btn btn-primary mx-1" to="/register">Register</NavLink>
                </li>
              </>
            )}
            {isLoggedIn && (
              <li className="nav-item d-flex flex-column flex-lg-row align-items-center gap-2">
                <span
                  className="d-inline-block text-white px-3 py-1 rounded-pill"
                  style={{
                    backgroundColor: 'black',
                    fontSize: '14px',
                    fontWeight: '500',
                    letterSpacing: '0.5px',
                    textAlign: 'center',
                  }}
                >
                  <i className="fa-solid fa-user me-1"></i> {username}
                </span>
                <button className="btn btn-primary btn-sm" onClick={handleLogout}>Logout</button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
