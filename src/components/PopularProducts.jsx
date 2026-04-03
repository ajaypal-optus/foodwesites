import React from "react";

const products = [
  
  {
    name: "Hazel nut pack",
    price: "$52.85",
    old: "$55.8",
    img: "https://pngimg.com/uploads/hazelnut/hazelnut_PNG9.png",
    tag: "Sale",
  },
  {
    name: "Fresh apples",
    price: "$17.85",
    old: "$19.8",
    img: "https://pngimg.com/uploads/apple/apple_PNG12405.png",
  },{
    name: "Fresh apples",
    price: "$17.85",
    old: "$19.8",
    img: "https://pngimg.com/uploads/apple/apple_PNG12405.png",
  },
  {
    name: "Fresh apples",
    price: "$17.85",
    old: "$19.8",
    img: "https://pngimg.com/uploads/apple/apple_PNG12405.png",
  },
  {
    name: "Fresh apples",
    price: "$17.85",
    old: "$19.8",
    img: "https://pngimg.com/uploads/apple/apple_PNG12405.png",
  },
  {
    name: "Fresh apples",
    price: "$17.85",
    old: "$19.8",
    img: "https://pngimg.com/uploads/apple/apple_PNG12405.png",
  },
  {
    name: "Fresh apples",
    price: "$17.85",
    old: "$19.8",
    img: "https://pngimg.com/uploads/apple/apple_PNG12405.png",
  },
  {
    name: "Fresh apples",
    price: "$17.85",
    old: "$19.8",
    img: "https://pngimg.com/uploads/apple/apple_PNG12405.png",
  },
];

const PopularProducts = () => {
  return (
    <div className="container my-5">
      
      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="fw-bold">Popular Products</h5>

        <div className="d-flex gap-3" style={{ fontSize: "13px" }}>
          <span>All</span>
          <span>Milks & Dairies</span>
          <span>Coffes & Teas</span>
          <span>Pet Foods</span>
          <span>Meats</span>
        </div>
      </div>

      {/* PRODUCTS GRID */}
      <div className="row g-4">
        {products.map((item, index) => (
          <div className="col-md-3" key={index}>
            <div className="border rounded p-3 h-100">

              {/* TAG */}
              {item.tag && (
                <span className="badge bg-danger">{item.tag}</span>
              )}

              {/* IMAGE */}
              <div className="text-center my-3">
                <img src={item.img} alt="" style={{ height: "100px" }} />
              </div>

              {/* NAME */}
              <p style={{ fontSize: "13px" }}>{item.name}</p>

              {/* PRICE */}
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <span className="fw-bold text-success">
                    {item.price}
                  </span>
                  <small className="text-muted ms-2 text-decoration-line-through">
                    {item.old}
                  </small>
                </div>

                <button className="btn btn-danger btn-sm">
                  Add
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;