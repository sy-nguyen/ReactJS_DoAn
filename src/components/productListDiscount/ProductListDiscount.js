import React, { useEffect } from 'react';
import ProductSwiper from '../productSwiper/ProductSwiper';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/productsSlice';

const ProductListDiscount = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const nameTitle = "Deal sốc"
  const discountedProducts = products.filter((product) => product.discout !== "0");
  useEffect(() => {
    dispatch(fetchProducts())
    }, [dispatch]);
  return (
    <div>
      <ProductSwiper products={discountedProducts} nameTitle={nameTitle} />
    </div>
  );
};

export default ProductListDiscount;