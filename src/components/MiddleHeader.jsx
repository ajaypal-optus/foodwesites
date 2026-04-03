import React from "react";
import { FaUser, FaHeart, FaShoppingCart, FaSearch } from "react-icons/fa";

const MiddleHeader = () => {
  return (
    <div className="bg-white border-bottom">
      <div className="container py-2 d-flex align-items-center justify-content-between">

        {/* LOGO */}
        <div className="d-flex align-items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png"
            alt="logo"
            style={{ width: "40px" }}
            className="me-2"
          />
          <div>
            <div className="fw-bold" style={{ fontSize: "18px" }}>Foodzy</div>
            <div style={{ fontSize: "11px", color: "#777" }}>
              A Treasure of Tastes
            </div>
          </div>
        </div>

        {/* SEARCH BAR */}
        <div className="d-flex align-items-center w-50 border rounded overflow-hidden">

          <input
            type="text"
            className="form-control border-0"
            placeholder="Search For items..."
          />

          <select
            className="form-select border-0"
            style={{ maxWidth: "150px" }}
          >
            <option>All Categories</option>
            <option>Fruits</option>
            <option>Vegetables</option>
          </select>

          <button
            className="btn"
            style={{
              backgroundColor: "#ff4d4d",
              color: "#fff",
              borderRadius: "0"
            }}
          >
            <FaSearch />
          </button>
        </div>

        {/* RIGHT ICONS */}
        <div className="d-flex align-items-center gap-4">

          <div className="d-flex align-items-center gap-1">
            <FaUser />
            <span style={{ fontSize: "14px" }}>Account</span>
          </div>

          <div className="d-flex align-items-center gap-1">
            <FaHeart />
            <span style={{ fontSize: "14px" }}>Wishlist</span>
          </div>

          <div className="d-flex align-items-center gap-1">
            <FaShoppingCart />
            <span style={{ fontSize: "14px" }}>Cart</span>
          </div>

        </div>

      </div>
    </div>
  );
};

export default MiddleHeader;