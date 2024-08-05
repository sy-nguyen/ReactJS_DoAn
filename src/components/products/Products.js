import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/productsSlice";
import {Container, Row} from "reactstrap"
import Product from "../product/Product";

export default function Products() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <div>
        <Container>
            <Row>
                {
                    products.map((product, index) => (
                        <Product key={index} product={product}/>
                    ))
                }
        </Row>
      </Container>
    </div>
  );
}