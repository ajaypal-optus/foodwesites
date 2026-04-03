import React from "react";

const promoData = [
  {
    title: "Everyday Fresh & Clean with Our Products",
    img: "https://pngimg.com/uploads/onion/onion_PNG99213.png",
    bg: "#e8dfcf",
  },
  {
    title: "Make your Breakfast Healthy and Easy",
    img: "https://pngimg.com/uploads/milk/milk_PNG12739.png",
    bg: "#e6dcdc",
  },
  {
    title: "The best Organic Products Online",
    img: "https://pngimg.com/uploads/vegetable/vegetable_PNG130.png",
    bg: "#dfe3ea",
  },
];

const PromoSection = () => {
  return (
    <div className="container my-5">
      <div className="row g-4">
        {promoData.map((item, index) => (
          <div className="col-md-4" key={index}>
            <div
              style={{
                background: item.bg,
                borderRadius: "12px",
                padding: "20px",
                position: "relative",
                height: "200px",
                overflow: "hidden",
              }}
            >
              <h6 style={{ maxWidth: "180px" }}>{item.title}</h6>

              <button className="btn btn-danger btn-sm mt-2">
                Shop Now →
              </button>

              <img
                src={item.img}
                alt=""
                style={{
                  position: "absolute",
                  right: "10px",
                  bottom: "0",
                  width: "120px",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromoSection;