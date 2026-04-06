import { Card, Button } from 'react-bootstrap';
import { useCart } from '../contexts/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  
  return (
    <Card className="h-100 shadow-sm border-0">
      <Card.Img 
        variant="top" 
        src={product.image || 'https://via.placeholder.com/200'} 
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <Card.Body>
        <Card.Title className="fs-6">{product.name}</Card.Title>
        <Card.Text className="text-muted small">{product.description}</Card.Text>
        <div className="d-flex justify-content-between align-items-center">
          <span className="h5 text-danger mb-0">${product.price}</span>
          <Button 
            variant="outline-danger" 
            size="sm"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;