import { Container, Row, Col, Card } from 'react-bootstrap';

const categories = [
  { name: "Main Dish", count: 86, emoji: "🍽️" },
  { name: "Break Fast", count: 12, emoji: "🍳" },
  { name: "Dessert", count: 48, emoji: "🍰" },
  { name: "Browse All", count: 255, emoji: "🔍" },
  { name: "Breakfast Food", count: 205, emoji: "🥞" }
];

const CategorySection = () => {
  return (
    <Container className="my-5">
      <div className="text-center mb-4">
        <p className="text-danger mb-0">CUSTOMER FAVORITES</p>
        <h2 className="fw-bold">Popular Categories</h2>
      </div>
      
      <Row>
        {categories.map((cat, idx) => (
          <Col md={2} key={idx} className="mb-3">
            <Card className="text-center border-0 shadow-sm h-100">
              <Card.Body>
                <div className="fs-1">{cat.emoji}</div>
                <h6 className="mt-2 mb-1">{cat.name}</h6>
                <small className="text-muted">({cat.count} dishes)</small>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CategorySection;