import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button, Container, Row, Col, Dropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { productAction } from '../redux/actions/productAction';

const ProductDetail = () => {
  let { id } = useParams();
  const productDetail = useSelector(state => state.product.productDetail);
  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);

  const getProductDetail = () => {
    dispatch(productAction.getProductDetail(id));
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  console.log(productDetail)

  return (
    <Container>
      <Row>
        <Col className='product-img'>
          <img src={productDetail?.img} />
        </Col>

        <Col>
          <div>{productDetail?.title}</div>
          <div><b>\ {productDetail?.price}</b></div>
          <div>{productDetail?.choice === true ? "Conscious choice" : ""}</div>
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