import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, removeItem, changeQuantity} from '../../redux/cartSlice';
import { Table, Space, Button, Radio, Input} from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Container, Row, Col } from 'reactstrap';
import './cart.css'


export default function Cart() {
    const dispatch = useDispatch();
    const { items } = useSelector(state => state.cart);
    const [value1, setValue1] = useState(1);
    const [value2, setValue2] = useState(1);
    const [shippingCost, setShippingCost] = useState(30000);
    const discount = 0

    const onChange1 = (e) => {
    console.log('radio checked', e.target.value);
    setValue1(e.target.value);
    switch (e.target.value) {
        case 1:
            setShippingCost(30000);
            break;
        case 2:
            setShippingCost(15000);
            break;
        case 3:
            setShippingCost(80000);
            break;
        default:
            setShippingCost(30000);
    }
    }
    const totalMoney = items.reduce((acc, item) => {
        const discountedPrice = item.discout !== "0" ? 
            item.price - (item.price * item.discout / 100) : item.price;
        const total = discountedPrice * item.quantity;
        return acc + total;
    }, 0);
    
    const onChange2 = (e) => {
        console.log('radio checked', e.target.value);
        setValue2(e.target.value);
      };

    const formatPrice = (price) => {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
    };
  
    const columns = [
        {
            dataIndex: 'images',
            key: 'images',
            render: (images) => <img src={images[0]} alt="Product" width={50} height={50} />,
         },
        {
            title: 'Sản phẩm',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a href='?' className='product-name'>{text}</a>,
        },
        {
            title: 'Đơn giá',
            dataIndex: 'price',
            key: 'price',
            responsive: ['sm'],
            render: (price, record) => (
                <div>
                    {
                        record.discout !== "0" ? (<p className='price-discount'>{formatPrice(price - (price * record.discout / 100))}</p>):
                            (<p className='price'>{formatPrice(price)}</p>)
                    }
                    {
                        record.discout !== "0" && (<p className='price-real'>{formatPrice(price)}</p>)
                    }
                </div>
            ),
        },
        {
            title: 'Số lượng',
            dataIndex: 'quantity',
            key: 'quantity',
            render: (text, record) => (
                <Button.Group className='btn-quantity'>
                    <Button icon={<MinusOutlined />} onClick={() => dispatch(changeQuantity({ id: record.id, changeQ: -1 }))} />
                    <Button>{text}</Button>
                    <Button icon={<PlusOutlined />} onClick={() => dispatch(changeQuantity({ id: record.id, changeQ: 1 }))} />
                </Button.Group>
            ),
        },
        {
            title: 'Tổng cộng',
            key: 'total',
            responsive: ['md'],
            render: (_, record) => {
                const discountedPrice = record.discout !== "0" ? 
                    record.price - (record.price * record.discout / 100) : record.price;
                const total = discountedPrice * record.quantity;
                return <span>{formatPrice(total)}</span>;
            },
        },
        {
            key: 'action',
            render: (_, record) => (
            <Space size="middle">
                <Button type="primary" danger onClick={() => dispatch(removeItem(record.id))}>X</Button>
            </Space>
            ),
        },
    ];
    return (
    <div>
        <Container>
            {items.length === 0 && <p>Giỏ hàng rỗng</p>}
            {items.length > 0 && (
                <Row>
                    <Col xl={12} xxl={8} className='col-cart'>
                        <Table columns={columns} dataSource={items} />
                        <Button className='mb-5' type="primary" danger onClick={() => dispatch(clearCart())}>Xóa tất cả</Button>
                    </Col>
                    <Col xl={8} xxl={4} offset-xl={2} className='col-thanh-toan'>
                    <div className='p-3 btn-cart-totals'>
                        <h2>Thanh toán</h2>
                        <hr />
                        <div className='display-money'>
                            <h6>Tổng cộng:</h6>
                            <p className='tien-sanpham1'>{formatPrice(totalMoney)}</p>
                        </div>
                        <hr />
                        <h6>Phương thức vận chuyển:</h6>
                        <Radio.Group onChange={onChange1} value={value1} className='thanh-toan'>
                            <Space direction="vertical">
                                <Radio value={1}>Nhanh</Radio>
                                <Radio value={2}>Tiết kiệm</Radio>
                                <Radio value={3}>Hỏa tốc</Radio>
                            </Space>
                        </Radio.Group>
                        <hr/>
                        <h6>Phương thức thanh toán:</h6>
                        <Radio.Group onChange={onChange2} value={value2} className='thanh-toan'>
                            <Space direction="vertical">
                                <Radio value={1}>Thanh toán khi nhận hàng</Radio>
                                <Radio value={2}>Thanh toán bằng thẻ tín dụng</Radio>
                                <Radio value={3}>Thanh toán bằng ví trả sau</Radio>
                            </Space>
                        </Radio.Group>
                        <hr/>
                        <h6>Mã giảm giá:</h6>
                        <Space.Compact style={{width: '100%'}}>
                            <Input placeholder="Nhập mã giảm giá"/>
                            <Button type="primary">Áp dụng</Button>
                        </Space.Compact>
                        <hr/>
                        <h6>Chi tiết thanh toán:</h6>
                        <div className='thanh-toan'>
                            <div className='display-money'>
                                <p>Tổng tiền hàng:</p>
                                <p>{formatPrice(totalMoney)}</p>
                            </div>
                            <div className='display-money'>
                                <p>Phí vận chuyển:</p>
                                <p>{formatPrice(shippingCost)}</p>
                            </div>
                            <div className='display-money'>
                                <p>Mã giảm giá:</p>
                                <p>- <span>{formatPrice(discount)}</span></p>
                            </div>
                        </div>
                        <div className='display-money'>
                            <h6>Tổng thanh toán:</h6>
                            <p className='final-total'>{formatPrice(totalMoney + shippingCost - discount)}</p>
                        </div>
                        <Button className='btn-thanh-toan' type="primary">Tiến hành thanh toán</Button>
                        </div>
                    </Col>
            </Row>
            )}
      </Container>
    </div>
    );
}