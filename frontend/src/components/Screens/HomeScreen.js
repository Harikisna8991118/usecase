import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../Product";
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../../actions/productActions";
import Loader from '../Loader'
import Message from '../Message'
import SearchBox from '../SearchBox'

function HomeScreen({history}) {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error, loading, products } = productList;

  let keyword = history.location.search

    useEffect(() => {
        dispatch(listProduct(keyword))

    }, [dispatch, keyword])

  return (
    <div>
      <br />
      <h1 className="text-center">Latest Ice-Creams</h1>
      <Col className='col-sm'>
          <SearchBox/>
          </Col>
      
      {loading ? (
        <Loader />
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
          
        </Row>
      )}
    </div>
  );
}

export default HomeScreen;
