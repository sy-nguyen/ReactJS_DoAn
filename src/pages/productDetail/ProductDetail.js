import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function ProductDetail() {
  const { id } = useParams();
  const products = useSelector((state) => state.products.products);
  const product = products.find((product) => product.id === id);

  useEffect(() => {
    if (!product) {
    }
  }, [product]);

  return (
    <div>
      {product && (
        <div>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p>Giá: {product.price}</p>
        </div>
      )}
    </div>
  );
}