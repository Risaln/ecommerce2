import {Link} from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Productcards({products}) {
    
  return (
    <div>
 
 <Link to={`/productdetails/${products.id}`}>
              <Card className='cards m-2' >
                <Card.Img className='productimgs' variant="top" src={products.images} />
                <Card.Body>
                  <Card.Title>{products.title}</Card.Title>
                  <Card.Text>
                    ${products.price}
                    
                  </Card.Text>

                  <div className="d-flex justify-content-between align-items-center">
                <Button className='cartbtn  w-100'>Add to cart <i class="fa-solid fa-cart-shopping"></i></Button>

                </div>
                  
                </Card.Body>
              

              </Card>
              </Link>

     
    </div>
  )
}

export default Productcards