import React, { useEffect, useState } from 'react';
import { Button, Modal, Radio, Rate, Space, Tag } from 'antd';
import { RiRulerLine } from "react-icons/ri";
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import imgSize from '../../Images/table-size.png';
import { Link } from 'react-router-dom';
import './productInfo.css'

export default function ProductInfo(props) {
    const {product, addItem, quantity, setQuantity} = props
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [random, setRandom] = useState(null);
    const targetDate = new Date('2024-08-15');
    const [value, setValue] = useState(1);
    const discountPrice = product.price - (product.price * product.discout / 100);
    const [timeRemaining, setTimeRemaining] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    
    const formatPrice = (price) => {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
    };
    useEffect(() => {
        setRandom(Math.floor(Math.random() * 100) + 1);
    }, []);
    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const distance = targetDate - now;
            if (distance < 0) {
                clearInterval(interval);
                return;
            }
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            setTimeRemaining({ days, hours, minutes, seconds });
        }, 1000);
        return () => clearInterval(interval);
    }, [targetDate]);
    return (
        <div >
            <Link className='brand-link' to='/'>{product.brand}</Link>
            <h1 className='name-product'>{product.name}</h1>
            <div className='rate-product'>
                <Rate disabled defaultValue={product.rating} />
                <Space size={'middle'}><span>{`(${product.rating})`}</span></Space>
                <Tag color="green">{`Còn ${random} sản phẩm`}</Tag>
            </div>
            {
                product.discout !== "0" ? (
                    <div>
                        <div className='countdown'>
                            <div className='btn-time'>
                            <p className='time-number'>{timeRemaining.days}</p>
                            <p className='time-text'>Ngày</p>
                            </div>
                            <div className='btn-time'>
                            <p className='time-number'>{String(timeRemaining.hours).padStart(2, '0')}</p>
                            <p className='time-text'>Giờ</p>
                            </div>
                            <div className='btn-time'>
                            <p className='time-number'>{String(timeRemaining.minutes).padStart(2, '0')}</p>
                            <p className='time-text'>Phút</p>
                            </div>
                            <div className='btn-time'>
                            <p className='time-number'>{String(timeRemaining.seconds).padStart(2, '0')}</p>
                            <p className='time-text'>Giây</p>
                            </div>
                        </div>
                        <p className='price-product'>
                            <span>{formatPrice(discountPrice)}<span className='price-real'>{formatPrice(product.price)}</span><span className='discout'>{`(-${product.discout}%)`}</span></span>
                        </p>
                    </div>
                ):(<p className='price-product'><span>{formatPrice(product.price)}</span></p>)
                }
            <div className='thong-tin'>
                <ul>
                    <li>Trọng lượng: <span className='thong-tin-span'> 1468g (&plusmn;50g)</span></li>
                    <li>Chất liệu: <span className='thong-tin-span'> Nhựa ABS nguyên sinh</span></li>
                    <li>Quà tặng: <span className='thong-tin-span'> 2 bộ tai mèo, 1 túi vải</span></li>
                </ul>
            </div>
            <div className='radio-size'>
                <p>Size:</p>
                <Radio.Group onChange={onChange} value={value}>
                    <Radio value={1}>M</Radio>
                    <Radio value={2}>L</Radio>
                    <Radio value={3}>XL</Radio>
                    <Radio value={4}>XXL</Radio>
                </Radio.Group>
            </div>
            <div>
                <p className='table-size' onClick={showModal}><RiRulerLine/> Bảng kích thước</p>
                <Modal title="Bảng qui đổi kích thước nón bảo hiểm" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} width={1000}>
                    <img src={imgSize} alt='Bảng qui đổi kích thước nón bảo hiểm'/>
                </Modal>
            </div>
            <div className='so-luong'>
                <p>Số lượng:</p>
                <Button.Group className='btn-quantity'>
                    <Button icon={<MinusOutlined />} onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)} />
                    <Button>{quantity}</Button>
                    <Button icon={<PlusOutlined />} onClick={() => setQuantity(quantity + 1)} />
                </Button.Group>
            </div>
            <Button className='button-add-cart' onClick={() => addItem(product, quantity)}>Thêm vào giỏ hàng</Button>
        </div>
  )
}
