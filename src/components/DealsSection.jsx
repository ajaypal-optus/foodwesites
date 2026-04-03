import React from "react";

const deals = [
  {
    title: "Seeds of Change Organic Quinoa",
    img: "https://picsum.photos/300?1",
    price: "$32.85",
  },
  {
    title: "Perdue Simply Smart Organics",
    img: "https://picsum.photos/300?2",
    price: "$24.85",
  },
  {
    title: "Signature Wood-Fired Mushroom",
    img: "https://picsum.photos/300?3",
    price: "$12.85",
  },
  {
    title: "Simply Lemonade with Raspberry",
    img: "https://picsum.photos/300?4",
    price: "$15.85",
  },
];

const DealsSection = () => {
  return (
    <div className="container my-5">

      {/* HEADER */}
      <div className="d-flex justify-content-between mb-3">
        <h5 className="fw-bold">Deals Of The Day</h5>
        <span style={{ fontSize: "13px" }}>All Deals →</span>
      </div>

      <div className="row g-4">
        {deals.map((item, index) => (
          <div className="col-md-3" key={index}>
            <div
              style={{
                position: "relative",
                borderRadius: "12px",
                overflow: "hidden",
              }}
            >
              <img
                src={item.img}
                alt=""
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />

              {/* OVERLAY CARD */}
              <div
                style={{
                  position: "absolute",
                  bottom: "10px",
                  left: "10px",
                  right: "10px",
                  background: "#fff",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <p style={{ fontSize: "13px" }}>{item.title}</p>

                <div className="d-flex justify-content-between align-items-center">
                  <span className="text-success fw-bold">
                    {item.price}
                  </span>

                  <button className="btn btn-danger btn-sm">
                    Add
                  </button>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default DealsSection;