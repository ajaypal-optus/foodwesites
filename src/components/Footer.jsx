import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      style={{
        background: "#F7F7F8",
        borderTop: "1px solid #E9E9E9",
        padding: "60px 0 20px",
      }}
    >
      <div className="container">

        <div className="row">

          {/* LEFT - LOGO + INFO */}
          <div className="col-md-3">
            <h5 className="fw-bold">Foodzy</h5>
            <p style={{ fontSize: "13px", color: "#777" }}>
              FoodTrove is the biggest market of grocery products.
              Get your daily needs from our store.
            </p>

            <p style={{ fontSize: "13px" }}>
              <FaMapMarkerAlt className="me-2 text-danger" />
              51 Green St, Huntington Ohio Beach Ontario, NY 11746 KY 4783, USA.
            </p>

            <p style={{ fontSize: "13px" }}>
              <FaEnvelope className="me-2 text-danger" />
              example@email.com
            </p>

            <p style={{ fontSize: "13px" }}>
              <FaPhone className="me-2 text-danger" />
              +91 123 4567890
            </p>
          </div>

          {/* COMPANY */}
          <div className="col-md-2">
            <h6 className="fw-bold">Company</h6>
            <ul className="list-unstyled" style={{ fontSize: "13px" }}>
              <li>About Us</li>
              <li>Delivery Information</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Contact Us</li>
              <li>Support Center</li>
            </ul>
          </div>

          {/* CATEGORY */}
          <div className="col-md-2">
            <h6 className="fw-bold">Category</h6>
            <ul className="list-unstyled" style={{ fontSize: "13px" }}>
              <li>Dairy & Bakery</li>
              <li>Fruits & Vegetable</li>
              <li>Snack & Spice</li>
              <li>Juice & Drinks</li>
              <li>Chicken & Meat</li>
              <li>Fast Food</li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div className="col-md-5">
            <h6 className="fw-bold">Subscribe Our Newsletter</h6>

            <div className="d-flex mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search here..."
              />
              <button className="btn btn-light border">✈️</button>
            </div>

            {/* SOCIAL ICONS */}
            <div className="d-flex gap-2 mb-3">
              <button className="btn btn-light btn-sm">f</button>
              <button className="btn btn-light btn-sm">X</button>
              <button className="btn btn-light btn-sm">📷</button>
              <button className="btn btn-light btn-sm">in</button>
            </div>

            {/* SMALL IMAGES */}
            <div className="d-flex gap-2">
              {[1,2,3,4,5].map((i) => (
                <img
                  key={i}
                  src={`https://picsum.photos/60?random=${i}`}
                  alt=""
                  style={{ borderRadius: "5px" }}
                />
              ))}
            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="text-center mt-4" style={{ fontSize: "13px", color: "#777" }}>
          © 2025 <span style={{ color: "red" }}>Foodzy</span>, All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;