import React from "react";

const features = [
  {
    title: "Best prices & offers",
    subtitle: "Orders $50 or more",
    icon: "💸",
  },
  {
    title: "Free delivery",
    subtitle: "24/7 amazing services",
    icon: "🚚",
  },
  {
    title: "Great daily deal",
    subtitle: "When you sign up",
    icon: "💰",
  },
  {
    title: "Wide assortment",
    subtitle: "Mega Discounts",
    icon: "🛒",
  },
  {
    title: "Easy returns",
    subtitle: "Within 30 days",
    icon: "📦",
  },
];

const PromoBannerSection = () => {
  return (
    <div className="container my-5">

      {/* HERO BANNER */}
      <div
        style={{
          background: "#dff1e7",
          borderRadius: "15px",
          padding: "40px",
          position: "relative",
          overflow: "hidden",
        }}
        className="d-flex align-items-center justify-content-between flex-wrap"
      >
        {/* LEFT CONTENT */}
        <div style={{ maxWidth: "500px" }}>
          <h2 className="fw-bold">
            Stay home & get your daily <br /> needs from our shop
          </h2>

          <p style={{ color: "#6c757d" }}>
            Start Your Daily Shopping with <span className="text-success">Nest Mart</span>
          </p>

          {/* INPUT */}
          <div
            className="d-flex mt-3"
            style={{
              background: "#fff",
              borderRadius: "50px",
              overflow: "hidden",
              width: "100%",
              maxWidth: "400px",
            }}
          >
            <input
              type="email"
              placeholder="Your email address"
              className="form-control border-0"
            />
            <button className="btn btn-danger px-4">
              Subscribe
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div>
          <img
            src="https://picsum.photos/300/250"
            alt=""
            style={{ maxWidth: "300px" }}
          />
        </div>
      </div>

      {/* FEATURES STRIP */}
      <div className="row mt-4 g-3">
        {features.map((item, index) => (
          <div className="col-md-2 col-6" key={index}>
            <div
              className="d-flex align-items-center"
              style={{
                background: "#f8f9fa",
                padding: "12px",
                borderRadius: "10px",
              }}
            >
              <div style={{ fontSize: "22px", marginRight: "10px" }}>
                {item.icon}
              </div>

              <div>
                <p className="mb-0 fw-semibold" style={{ fontSize: "13px" }}>
                  {item.title}
                </p>
                <small style={{ color: "#777" }}>{item.subtitle}</small>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default PromoBannerSection;