import React, { useEffect, useState } from 'react'
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import { Row, Col } from 'react-bootstrap';
import './Home.css';
import Productcards from './Products/Productcards';


function Homepage() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await fetch('https://api.escuelajs.co/api/v1/products');
    const data = await response.json();
    setProducts(data);
    
  };

  const [filteredProducts, setFilteredProducts] = useState([]);



  const handleSearch = (searchQuery) => {
    if (searchQuery.trim() === '') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };


  return (
    <div>

    

      
      {/* product cards */}
      <Row className='m-2 p-2 '>
        {
          products.map((product) => (
            <Col sm={12} md={6} lg={4} xl={3} >
              {/* style={{ width: '18rem', height:'29rem' , margin: '12px' }} */}
              {/* 
              <Card className='cards m-2' >
                <Card.Img className='productimgs' variant="top" src={product.images} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>
                    ${product.price}
                    
                  </Card.Text>
                  
                </Card.Body>
                <Button className='cartbtn m- w-50'>Add to cart</Button>

              </Card> */}
              <Productcards products={product} />
            </Col>
          ))}

      </Row>



    </div>
  )
}

export default Homepage