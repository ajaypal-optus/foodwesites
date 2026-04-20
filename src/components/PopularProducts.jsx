import React, { useEffect, useState } from "react";

/* -------- CATEGORY MENU -------- */
const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost/food-api/categories.php")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="d-flex gap-3" style={{ fontSize: "13px" }}>
      <span>All</span>
      {categories.map((cat) => (
        <span key={cat.id}>
          {cat.name.replace(/\r?\n/g, "")}
        </span>
      ))}
    </div>
  );
};

/* -------- POPULAR PRODUCTS -------- */
const PopularProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost/food-api/products.php")
      .then((res) => res.json())
      .then((data) => {
        
        // 🔥 MAP API → UI FORMAT (IMPORTANT)
        const formatted = data.map((item) => ({
          id: item.id,
          name: item.name,
          price: `₹${item.price}`,
          old: `₹${Number(item.price) + Number(item.discount_price)}`,
          img: `http://localhost/food-api/uploads/${item.image}`,
          tag: item.is_trending === "1" ? "Sale" : null,
        }));

        setProducts(formatted);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container my-5">

      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="fw-bold">Popular Products</h5>
        <CategoryMenu />
      </div>

      {/* SAME DESIGN (UNCHANGED) */}
      <div className="row g-4">
        {products.map((item) => (
          <div className="col-md-3" key={item.id}>
            <div className="border rounded p-3 h-100">

              {item.tag && (
                <span className="badge bg-danger">{item.tag}</span>
              )}

              <div className="text-center my-3">
                <img src={item.img} alt="" style={{ height: "100px" }} />
              </div>

              <p style={{ fontSize: "13px" }}>{item.name}</p>

              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <span className="fw-bold text-success">
                    {item.price}
                  </span>
                  <small className="text-muted ms-2 text-decoration-line-through">
                    {item.old}
                  </small>
                </div>

                <button className="btn btn-danger btn-sm">Add</button>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;