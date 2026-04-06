import { Container, Row, Col, Card } from 'react-bootstrap';

const features = [
  { title: "Convenient and Reliable", icon: "🚚", description: "Whether you dine in, take out, or order delivery, our service is convenient, fast, and reliable." },
  { title: "Variety of Options", icon: "🍽️", description: "From hearty meals to light snacks, we offer a wide range of options for every taste." },
  { title: "Eat Burger", icon: "🍔", description: "Our burgers are grilled to perfection, with juicy patties and flavorful toppings." }
];

const WhyChooseUs = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center fw-bold mb-5">Why People Choose us?</h2>
      
      <Row>
        {features.map((feature, idx) => (
          <Col md={4} key={idx}>
            <Card className="border-0 shadow-sm h-100 text-center">
              <Card.Body>
                <div className="fs-1 mb-3">{feature.icon}</div>
                <Card.Title>{feature.title}</Card.Title>
                <Card.Text className="text-muted">{feature.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default WhyChooseUs;