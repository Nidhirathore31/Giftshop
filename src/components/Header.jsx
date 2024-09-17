import React from 'react'
import { Link, useLocation } from 'react-router-dom'



const Header = () => {
  const location = useLocation();
  // console.log("location", location)
  
  return (
    <div>

      <header className="header_section">
        <nav className="navbar navbar-expand-lg custom_nav-container ">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  ">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products ">
                  Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/savings">
                  Why Us
                </Link>
              </li>

              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown" > Select an option</Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/add">Add Products</Link></li>
                    <li><Link className="dropdown-item" to="/list">Product List</Link></li>
                  </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Profile
                </Link>
              </li>
            </ul>
            <div className="user_option">
              <Link to="/login">
                <i className="fa fa-user" aria-hidden="true" />
                <span>Login</span>
              </Link>
              <Link to="/cart">
                <i className="fa fa-shopping-bag" aria-hidden="true" />
              </Link>
              <form className="form-inline ">
                <Link to="/search">
                  <button className="btn nav_search-btn" type="submit">
                    <i className="fa fa-search" aria-hidden="true" />
                  </button></Link>
              </form>
            </div>
          </div>
        </nav>
      </header>

    </div>
  )
}

export default Header
