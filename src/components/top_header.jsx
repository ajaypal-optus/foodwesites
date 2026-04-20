import React, { useEffect, useState } from "react";

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost/food-api/categories.php")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        href="#"
        data-bs-toggle="dropdown"
      >
        Category
      </a>

      <ul className="dropdown-menu">
        {categories.length === 0 ? (
          <li>
            <span className="dropdown-item">Loading...</span>
          </li>
        ) : (
          categories.map((cat) => (
            <li key={cat.id}>
              <a className="dropdown-item" href="#">
                {cat.name}
              </a>
            </li>
          ))
        )}
      </ul>
    </li>
  );
};

const ProductMenu = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost/food-api/products.php")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        href="#"
        data-bs-toggle="dropdown"
      >
        Products
      </a>

      <ul className="dropdown-menu">

        {products.length === 0 ? (
          <li>
            <span className="dropdown-item">Loading...</span>
          </li>
        ) : (
          products.map((prod) => (
            <li key={prod.id}>
              <a className="dropdown-item" href="#">
                {prod.name}
              </a>
            </li>
          ))
        )}

      </ul>
    </li>
  );
};

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

            <ul className="navbar-nav">
              <CategoryMenu />
            </ul>

            <li className="nav-item dropdown">
               <ProductMenu />
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