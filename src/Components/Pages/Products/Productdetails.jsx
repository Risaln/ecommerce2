import React, { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import './Productdet.css';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';



function Productdetails() {

    const { id } = useParams()
    console.log(id);

    const [productdetails, setProductdetails] = useState([]);
    const fetchProducts = async () => {
        const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
        const data = await response.json();
        setProductdetails(data)
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    //toast
    const addtocart = () => {
        // Displaying an alert with a message
        alert('This is an alert message!');
    };
  
    



    return (
        <div className='mx-5 mt-3'>
            <h2>{productdetails.title}</h2>
            <div className='d-flex m-4 p-1 det'>
                <div>
                    <MDBCarousel showControls>
                        {productdetails.images && productdetails.images.map((image, index) => (
                            <MDBCarouselItem key={index} itemId={index + 1}>
                                <img src={image} className='detimg' alt={`Product Image ${index}`} />
                            </MDBCarouselItem>
                        ))}
                    </MDBCarousel>
                </div>
                <div>
                    <Card className='card' style={{ width: '38rem' }}>
                        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                        <Card.Body>
                            <Card.Title>{productdetails.title}</Card.Title>
                            <Card.Text>
                                <h2>${productdetails.price}</h2>
                                <p>{productdetails.description}</p>
                                <div className='mt-5'>
                                    <Button onClick={addtocart} className='cartbtn btn btn-warning'>Add to cart <i className="fa-solid fa-cart-shopping"></i></Button>
                                    <Button className='cartbtn btn btn-danger ms-3'>Add to wishlist <i class="fa-solid fa-heart"></i></Button>

                                </div>
                            </Card.Text>
                            <div class="rating">
                                <input type="radio" id="star-1" name="star-radio" value="star-1" />
                                <label for="star-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                                </label>
                                <input type="radio" id="star-2" name="star-radio" value="star-1" />
                                <label for="star-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                                </label>
                                <input type="radio" id="star-3" name="star-radio" value="star-1" />
                                <label for="star-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                                </label>
                                <input type="radio" id="star-4" name="star-radio" value="star-1" />
                                <label for="star-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                                </label>
                                <input type="radio" id="star-5" name="star-radio" value="star-1" />
                                <label for="star-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                                </label>

                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Productdetails

