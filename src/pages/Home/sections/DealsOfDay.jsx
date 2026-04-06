import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const deals = [
  { name: "Seeds of Change Organic Quinoa", price: 2.95, original: 5.99 },
  { name: "Perilla Spring Greens", price: 4.95, original: 8.99 },
  { name: "Green daly deal", price: 12.95, original: 19.99 },
  { name: "Wildflower Honeycomb", price: 10.95, original: 16.99 }
];

const DealsOfDay = () => {
  return (
    <Container className="my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold mb-0">Deals Of The Day</h2>
        <a href="#" className="text-danger text-decoration-none">All Deals →</a>
      </div>
      
      <Row>
        {deals.map((deal, idx) => (
          <Col md={3} key={idx}>
            <Card className="border-0 shadow-sm h-100">
              <Card.Body>
                <Card.Title className="fs-6">{deal.name}</Card.Title>
                <div className="mb-2">
                  <span className="h5 text-danger">${deal.price}</span>
                  <span className="text-muted text-decoration-line-through ms-2">
                    ${deal.original}
                  </span>
                </div>
                <Button variant="danger" size="sm" className="w-100">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default DealsOfDay;