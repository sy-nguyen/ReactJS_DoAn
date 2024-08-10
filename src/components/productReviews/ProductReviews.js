import { Button, Col, Form, Input, Rate, Row, Space} from 'antd'
import React from 'react'
import { Container } from 'reactstrap'
import avatar from '../../Images/avatar.png'
import './productReviews.css'

export default function ProductReviews(props) {
    const {product} = props
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Received values:', values);
    };
  return (
    <Container className='product-reviews'>
        <div className='rate'>
            <h4>Đánh giá của khách hàng</h4>
            <div className='rate-product'>
                <Rate disabled defaultValue={product.rating} />
                <Space size={'middle'}><span>{`(1)`}</span></Space>
            </div>
        </div>
        <Row className='customer-reviews'>
            <Col md={24} lg={4} className='customer-avatar'>
                <img src={avatar} alt='avatar'/>
            </Col>
            <Col md={24} lg={20} className='content-review'>
                <div>
                    <p>Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat sed diam voluptua at vero eos et accusam et justo duo dolores et ea rebum stet clita kasd gubergren no sea takimata sanctus est lorem ipsum dolor sit amet.</p>
                    <div className='info-review'>
                        <span className='name-customer'>Ivan.</span>
                        <span className='review-date'> Ngày 4 tháng 3 năm 2024. </span>
                        <Rate disabled defaultValue={product.rating} />
                    </div>
                </div>
            </Col>
        </Row>
        <div className='rate'>
            <h4>Thêm đánh giá</h4>
            <p className='rate-product'>Địa chỉ email của bạn sẽ không được công bố. Các trường bắt buộc được đánh dấu *</p>
        </div>
        <div className='review-form'>
            <Form form={form} onFinish={onFinish}>
                <Form.Item name='name'>
                    <Input placeholder='Tên*' />
                </Form.Item>
                <Form.Item name='email'>
                    <Input placeholder='Địa chỉ email*' />
                </Form.Item>
                <Form.Item name='content'>
                    <Input.TextArea rows={4} placeholder='Nội dung đánh giá*' />
                </Form.Item>
                <Form.Item name='rating' label='Đánh giá của bạn:'>
                    <Rate defaultValue={5} />
                </Form.Item>
                <Form.Item>
                    <Button type='primary' htmlType='submit'>Gửi đánh giá</Button>
                </Form.Item>
            </Form>
        </div>
    </Container>
  )
}
