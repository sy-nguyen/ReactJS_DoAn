import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/productsSlice";
import {Container, Row} from "reactstrap"
import Product from "../product/Product";
import { addItem } from '../../redux/cartSlice';

export default function Products() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const handleAddItem = (product) => {
    dispatch(addItem(product));
  };

  return (
    <div>
        <Container className="py-5">
            <Row>
                {
                    products.map((product, index) => (
                        <Product key={index} product={product} addItem={handleAddItem}/>
                    ))
                }
        </Row>
      </Container>
    </div>
  );
}
