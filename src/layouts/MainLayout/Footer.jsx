import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4 mt-5">
      <Container>
        <Row>
          <Col md={3}>
            <h5 className="text-danger mb-3">Foody</h5>
            <p>Find everything you need for a healthy diet.</p>
          </Col>
          <Col md={3}>
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li>About Us</li>
              <li>Contact</li>
              <li>Careers</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Category</h5>
            <ul className="list-unstyled">
              <li>Main Dish</li>
              <li>Breakfast</li>
              <li>Dessert</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Newsletter</h5>
            <Form>
              <Form.Control type="email" placeholder="Your email" className="mb-2" />
              <Button variant="danger" className="w-100">Subscribe</Button>
            </Form>
          </Col>
        </Row>
        <hr className="bg-secondary" />
        <div className="text-center">
          <small>© 2025 Foody. All rights reserved.</small>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;