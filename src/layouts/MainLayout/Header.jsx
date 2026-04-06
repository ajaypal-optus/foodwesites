import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUser, FaHeart, FaShoppingCart, FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <>
      {/* Top Bar with Contact & Social */}
      <div className="bg-light py-2 border-bottom">
        <Container>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex gap-4">
               <small className="text-muted">Follow Us Now</small>
              <div className="d-flex gap-2">
                <a href="#" className="text-dark">
                  📘
                </a>
                <a href="#" className="text-dark">
                  📷
                </a>
                <a href="#" className="text-dark">
                  🐦
                </a>
              </div> 
              
            </div>
            {/* Navigation Menu */}
            <Navbar expand="lg" className="py-3">
              <Container>
                <Navbar.Toggle aria-controls="main-nav" />
                <Navbar.Collapse id="main-nav">
                  <Nav className="mx-auto gap-4">
                    <Nav.Link as={Link} to="/" className="fw-bold text-dark">
                      Home
                    </Nav.Link>

                    <NavDropdown title="Category" id="category-dropdown">
                      <NavDropdown.Item href="/category/main-dish">
                        Main Dish
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/category/breakfast">
                        Breakfast
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/category/dessert">
                        Dessert
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="/category/all">
                        All Categories
                      </NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="Products" id="products-dropdown">
                      <NavDropdown.Item href="/products/all">
                        All Products
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/products/best-seller">
                        Best Sellers
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/products/new-arrival">
                        New Arrivals
                      </NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="Pages" id="pages-dropdown">
                      <NavDropdown.Item href="/about">
                        About Us
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/contact">
                        Contact
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/faq">FAQ</NavDropdown.Item>
                    </NavDropdown>

                    <Nav.Link href="/blog">Blog </Nav.Link>
                    <Nav.Link href="/elements">Elements </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
            <div className="d-flex gap-4">
              <small className="text-muted">100% Secure Delivery</small>
              <small className="text-muted">📞 Call Us: 658-7854-9634</small>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Header with Logo and Icons */}
      <div className="py-3 bg-white border-bottom">
        <Container>
          <div className="d-flex justify-content-between align-items-center">
            {/* Logo */}
            <div>
              <h1 className="display-6 fw-bold mb-0">
                Food<span className="text-danger">zy</span>
              </h1>
              <small className="text-muted">A Treasure of Tastes</small>
            </div>

            {/* Search Bar */}
            <div className="d-none d-md-block" style={{ width: "40%" }}>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search For Items..."
                  style={{ borderRight: "none" }}
                />
                <Button variant="outline-secondary" className="dropdown-toggle">
                  All Categories
                </Button>
                <Button variant="danger">
                  <FaSearch />
                </Button>
              </div>
            </div>

            {/* Icons */}
            <div className="d-flex gap-4">
              <Link to="/account" className="text-dark text-decoration-none">
                <FaUser size={22} />
                <small className="d-block">Account</small>
              </Link>
              <Link to="/wishlist" className="text-dark text-decoration-none">
                <FaHeart size={22} />
                <small className="d-block">Wishlist</small>
              </Link>
              <Link
                to="/cart"
                className="text-dark text-decoration-none position-relative"
              >
                <FaShoppingCart size={22} />
                <small className="d-block">Cart</small>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  0
                </span>
              </Link>
            </div>
          </div>
        </Container>
      </div>

      {/* Hero Section - Roast Turkey */}
      <section className="bg-warning bg-opacity-10 py-5">
        <Container>
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="text-danger fw-bold mb-2">Sweet Delicious</p>
              <h1 className="display-2 fw-bold mb-3">
                ROAST <span className="text-danger">TURKEY</span>
              </h1>
              <button className="btn btn-danger btn-lg px-5">
                Order Now →
              </button>
            </div>
            <div className="col-md-6">
              <img
                src="https://via.placeholder.com/500x400"
                alt="Roast Turkey"
                className="img-fluid rounded-4"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Header;
