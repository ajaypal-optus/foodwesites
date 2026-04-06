import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const dishes = [
  { name: "Fat toush salad", price: 52.95, description: "Fresh vegetables with special dressing" },
  { name: "Vegetable salad", price: 24.95, description: "Mixed greens with organic veggies" },
  { name: "Egg vegi salad", price: 15.95, description: "Protein-rich healthy salad" }
];

const SpecialDishes = () => {
  return (
    <Container className="my-5">
      <div className="text-center mb-4">
        <p className="text-danger mb-0">SPECIAL DISHES</p>
        <h2 className="fw-bold">Standout Dishes From Our Menu</h2>
      </div>
      
      <Row>
        {dishes.map((dish, idx) => (
          <Col md={4} key={idx}>
            <Card className="border-0 shadow-sm h-100">
              <Card.Body className="text-center">
                <div className="mb-3">🍲</div>
                <Card.Title>{dish.name}</Card.Title>
                <Card.Text className="text-muted">{dish.description}</Card.Text>
                <h5 className="text-danger">${dish.price}</h5>
                <Button variant="outline-danger" size="sm">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SpecialDishes;