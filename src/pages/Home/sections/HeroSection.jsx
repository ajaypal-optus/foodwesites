import { Container, Row, Col, Button } from 'react-bootstrap';

const HeroSection = () => {
  return (
    <section className="bg-warning bg-opacity-10 py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <p className="text-danger fw-bold mb-2">Sweet Delicious</p>
            <h1 className="display-2 fw-bold mb-3">
              ROAST <span className="text-danger">TURKEY</span>
            </h1>
            <p className="lead mb-4">Experience the best roasted turkey with our special recipe</p>
            <Button variant="danger" size="lg" className="px-5">
              Order Now →
            </Button>
          </Col>
          <Col md={6}>
            <img 
              src="https://via.placeholder.com/500x400" 
              alt="Roast Turkey" 
              className="img-fluid rounded-4"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;