import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/productsSlice";
import { Container, Row } from "reactstrap";
import Product from "../product/Product";
import { addItem } from '../../redux/cartSlice';
import { Pagination } from 'antd';

export default function Products() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const handleAddItem = (product) => {
    dispatch(addItem(product));
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedProducts = products.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div>
      <Container className="py-5">
        <Row>
          {
            paginatedProducts.map((product, index) => (
              <Product key={index} product={product} addItem={handleAddItem} />
            ))
          }
        </Row>
        <Pagination
          align="center"
          total={products.length}
          showQuickJumper
          current={currentPage}
          pageSize={pageSize}
          onChange={handlePageChange}
        />
      </Container>
    </div>
  );
}