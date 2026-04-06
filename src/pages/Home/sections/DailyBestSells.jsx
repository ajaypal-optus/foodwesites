import { Container, Row, Col, Tab, Nav, Button } from 'react-bootstrap';
import { useState } from 'react';
import ProductCard from '../../../components/ProductCard';

const productsData = {
  featured: [
    { id: 1, name: "All National Indian-Baby Chicken", price: 238.85, description: "Spicy & flavorful chicken", image: "https://via.placeholder.com/200", rating: 4 },
    { id: 2, name: "Angela's Bonsai Gift Set", price: 238.85, description: "Complete meal set", image: "https://via.placeholder.com/200", rating: 5 },
    { id: 3, name: "Faster Farms Takeout Chicken", price: 238.85, description: "Crispy & juicy", image: "https://via.placeholder.com/200", rating: 4 },
    { id: 4, name: "Blue Diamond Almonds", price: 238.85, description: "Lightly salted", image: "https://via.placeholder.com/200", rating: 5 }
  ],
  popular: [
    { id: 5, name: "Blue Mountain Blueberries", price: 138.85, description: "Fresh organic", image: "https://via.placeholder.com/200", rating: 5 },
    { id: 6, name: "Organic Quinoa", price: 98.85, description: "Healthy grains", image: "https://via.placeholder.com/200", rating: 4 },
    { id: 7, name: "Wild Honey", price: 45.85, description: "Pure natural", image: "https://via.placeholder.com/200", rating: 5 },
    { id: 8, name: "Green Tea", price: 28.85, description: "Organic leaves", image: "https://via.placeholder.com/200", rating: 4 }
  ],
  newAdded: [
    { id: 9, name: "Smoky Lemonade", price: 11.95, description: "With raspberry syrup", image: "https://via.placeholder.com/200", rating: 4 },
    { id: 10, name: "Wildflower Honeycomb", price: 10.95, description: "Raw honey", image: "https://via.placeholder.com/200", rating: 5 },
    { id: 11, name: "Green daly deal", price: 12.95, description: "Fresh salad", image: "https://via.placeholder.com/200", rating: 4 },
    { id: 12, name: "Perilla Spring Greens", price: 4.95, description: "Organic greens", image: "https://via.placeholder.com/200", rating: 5 }
  ]
};

const DailyBestSells = () => {
  const [activeTab, setActiveTab] = useState('featured');
  
  return (
    <Container className="my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold mb-0">Daily Best Sells</h2>
        <div className="d-flex gap-2">
          {['featured', 'popular', 'newAdded'].map(tab => (
            <Button
              key={tab}
              variant={activeTab === tab ? 'danger' : 'outline-danger'}
              size="sm"
              onClick={() => setActiveTab(tab)}
              className="px-4"
            >
              {tab === 'featured' ? 'Featured' : tab === 'popular' ? 'Popular' : 'New added'}
            </Button>
          ))}
        </div>
      </div>
      
      <Row>
        {productsData[activeTab].map(product => (
          <Col md={3} key={product.id} className="mb-4">
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default DailyBestSells;