import React, { useEffect } from 'react'
import ProductSwiper from '../productSwiper/ProductSwiper';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/productsSlice';

export default function ProductListNew() {
    const { products } = useSelector((state) => state.products);
    const dispatch = useDispatch();
    const nameTitle = "Hàng mới"
    const newProducts = products.filter((product) => product.status === "new");
    useEffect(() => {
      dispatch(fetchProducts())
      }, [dispatch]);
    return (
      <div>
        <ProductSwiper products={newProducts} nameTitle={nameTitle} />
      </div>
    );
}
