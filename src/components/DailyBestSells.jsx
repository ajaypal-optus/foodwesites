import React from "react";

const products = [
  {
    name: "All Natural Italian-Style Chicken Meatballs",
    img: "https://picsum.photos/120?1",
    tag: "Save 35%",
  },
  {
    name: "Angie's Boomchickapop Sweet & Salty",
    img: "https://picsum.photos/120?2",
    tag: "Sale",
  },
  {
    name: "Foster Farms Takeout Crispy Classic",
    img: "https://picsum.photos/120?3",
    tag: "Best sale",
  },
  {
    name: "Blue Diamond Almonds Lightly Salted",
    img: "https://picsum.photos/120?4",
    tag: "Save 15%",
  },
];

const DailyBestSells = () => {
  return (
    <div className="container my-5">

      {/* HEADER */}
      <div className="d-flex justify-content-between mb-3">
        <h5 className="fw-bold">Daily Best Sells</h5>
        <div style={{ fontSize: "13px" }}>
          <span className="me-3 text-success">Featured</span>
          <span className="me-3">Popular</span>
          <span>New added</span>
        </div>
      </div>

      <div className="row g-4">

        {/* LEFT BANNER */}
        <div className="col-md-3">
          <div
            style={{
              background: "#eaeaea",
              height: "100%",
              borderRadius: "12px",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h5 style={{ color: "#aaa" }}>
              Bring nature into your home
            </h5>

            <button className="btn btn-danger btn-sm mt-3">
              Shop Now →
            </button>
          </div>
        </div>

        {/* PRODUCTS */}
        {products.map((item, index) => (
          <div className="col-md-2" key={index}>
            <div className="border rounded p-3 text-center h-100">

              <span className="badge bg-success mb-2">
                {item.tag}
              </span>

              <img src={item.img} alt="" className="mb-2" />

              <p style={{ fontSize: "13px" }}>{item.name}</p>

              <p className="text-success fw-bold">$238.85</p>

              <button className="btn btn-danger btn-sm w-100">
                Add To Cart
              </button>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default DailyBestSells;