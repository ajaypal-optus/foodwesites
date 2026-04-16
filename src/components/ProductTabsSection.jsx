import React from "react";

const products = [
  {
    title: "Nestle Original Coffee-Mate Coffee Creamer",
    img: "https://picsum.photos/80?1",
    price: "$32.85",
    oldPrice: "$33.8",
  },
  {
    title: "Organic Cage-Free Grade A Large Brown Eggs",
    img: "https://picsum.photos/80?2",
    price: "$32.85",
    oldPrice: "$33.8",
  },
  {
    title: "Pepperidge Farm Farmhouse Hearty White Bread",
    img: "https://picsum.photos/80?3",
    price: "$32.85",
    oldPrice: "$33.8",
  },
  {
    title: "Foster Farms Takeout Crispy Classic Buffalo Wings",
    img: "https://picsum.photos/80?4",
    price: "$32.85",
    oldPrice: "$33.8",
  },
];

const ProductColumn = ({ title }) => {
  return (
    <div className="col-md-3">
      <h6 className="fw-bold mb-3">{title}</h6>

      {products.map((item, index) => (
        <div key={index} className="d-flex mb-3 align-items-start">
          
          <img
            src={item.img}
            alt=""
            style={{
              width: "60px",
              height: "60px",
              objectFit: "cover",
              borderRadius: "10px",
              marginRight: "10px",
            }}
          />

          <div>
            <p style={{ fontSize: "13px", marginBottom: "4px" }}>
              {item.title}
            </p>

            <div style={{ fontSize: "12px", color: "#999" }}>
              ⭐ (4.0)
            </div>

            <div>
              <span className="text-success fw-bold me-2">
                {item.price}
              </span>
              <span
                style={{
                  textDecoration: "line-through",
                  fontSize: "12px",
                  color: "#999",
                }}
              >
                {item.oldPrice}
              </span>
            </div>
          </div>

        </div>
      ))}
    </div>
  );
};

const ProductTabsSection = () => {
  return (
    <div className="container my-5">

      <div className="row">
        <ProductColumn title="Top Selling" />
        <ProductColumn title="Trending Products" />
        <ProductColumn title="Recently added" />
        <ProductColumn title="Top Rated" />
      </div>

    </div>
  );
};

export default ProductTabsSection;