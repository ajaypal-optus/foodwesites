import React from "react";

const HeroSection = () => {
  return (
    <div
      style={{
        background: "#f5f5f5",
        padding: "60px 0",
        position: "relative",
      }}
    >
      <div className="container d-flex align-items-center justify-content-between">

        {/* LEFT CONTENT */}
        <div style={{ maxWidth: "500px" }}>

          <p style={{ color: "#ff4d4d", fontWeight: "600", fontSize: "14px" }}>
            100% <span style={{ color: "#333" }}>Organic Vegetables</span>
          </p>

          <h1 style={{ fontWeight: "800", fontSize: "48px" }}>
            The best way to <br /> stuff your wallet.
          </h1>

          <p style={{ color: "#777", fontSize: "14px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Amet reiciendis beatae consequuntur.
          </p>

          {/* INPUT */}
          <div className="d-flex mt-4" style={{ maxWidth: "400px" }}>
            <input
              type="email"
              className="form-control"
              placeholder="Your email address"
              style={{ borderRadius: "25px 0 0 25px", borderRight: "none" }}
            />

            <button
              className="btn"
              style={{
                backgroundColor: "#28a745",
                color: "#fff",
                borderRadius: "0 25px 25px 0",
                padding: "8px 20px",
              }}
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div>
          <img
            src="https://pngimg.com/uploads/cabbage/cabbage_PNG8802.png"
            alt="vegetable"
            style={{ width: "400px" }}
          />
        </div>
      </div>

      {/* TOP RIGHT TAGS */}
      <div
        style={{
          position: "absolute",
          top: "20px",
          right: "100px",
          display: "flex",
          gap: "10px",
        }}
      >
        {["Shopping", "Recipes", "Kitchen", "News", "Food"].map((item) => (
          <span
            key={item}
            style={{
              background: "#fff",
              padding: "6px 12px",
              borderRadius: "20px",
              fontSize: "12px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;