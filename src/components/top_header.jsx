import React from "react";

const TopHeader = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">

        {/* Logo / Brand */}
        <a className="navbar-brand fw-bold" href="#">
          Home-2
        </a>

        {/* Toggle Button (Mobile) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu Items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">

            <li className="nav-item">
              <a className="nav-link active" href="#">Home</a>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                Category
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Category 1</a></li>
                <li><a className="dropdown-item" href="#">Category 2</a></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                Products
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Product 1</a></li>
                <li><a className="dropdown-item" href="#">Product 2</a></li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Pages</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Blog</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Elements</a>
            </li>

          </ul>

          {/* Right Side Contact */}
          <span className="navbar-text">
            📞 +123 (456) (7890)
          </span>
        </div>
      </div>
    </nav>
  );
};

export default TopHeader;