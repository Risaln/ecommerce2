import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Categories() {
  const [categoriesdetails, setCategoriesdetails] = useState([]);

  const fetchcategories = async () => {
    const response = await fetch(`https://api.escuelajs.co/api/v1/categories`);
    const data = await response.json();
    setCategoriesdetails(data);
  };

useEffect(() => {
    fetchcategories();
  }, []);

  return (
    <div>
      <h2 className='text-center m-3 p-2'>Categories</h2>
      <Row className='mx-5'>
        {categoriesdetails.map(category => (
          <Col className='p-4' sm={12} md={6} lg={4} xl={3} >
            <Link className='text-dark' to={`/categoryitemdetails/${category.id}/products`}>
              <Card className='cards'>
                <Card.Img className='productimgs' variant="top" src={category.image} />
                <Card.Body>
                  <Card.Title><h4>{category.name}</h4></Card.Title>
                  <Card.Text>
                    <Button className='cartbtn m- w-50'>View</Button>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Categories;
