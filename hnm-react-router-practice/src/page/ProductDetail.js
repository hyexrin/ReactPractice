import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button, Container, Row, Col, Dropdown } from 'react-bootstrap';

const ProductDetail = () => {
  let { id } = useParams();

  const [product, setProduct] = useState(null);

  const getProductDetail = async () => {
    let url = `http://localhost:5000/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProduct(data);
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <Container>
      <Row>
        <Col className='product-img'>
          <img src={product?.img} />
        </Col>

        <Col>
          <div>{product?.title}</div>
          <div><b>\ {product?.price}</b></div>
          <div>{product?.choice == true ? "Conscious choice" : ""}</div>
          <br></br>
          <div>

            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                사이즈 선택
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">S</Dropdown.Item>
                <Dropdown.Item href="#/action-2">M</Dropdown.Item>
                <Dropdown.Item href="#/action-3">L</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            {/* <select className='choice-size'>
              <option>사이즈 선택</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
            </select> */}
          </div>
          <Button variant="dark" className='add-btn'>추가</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail