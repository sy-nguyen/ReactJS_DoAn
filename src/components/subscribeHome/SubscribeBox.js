import { Form, Input, Row, Col, Button, Space } from 'antd'
import React from 'react'
import './subscribeBox.css'

export default function SubscribeBox() {
    const onFinish = (values) => {
        console.log('Received values:', values);
        // Bạn có thể thêm logic gửi dữ liệu đến server ở đây
    };
    return (
        <div className='subscribe-box'>
            <div className='container-subscribe'>
                <Row>
                    <Col lg={12} md={24}>
                        <h3 className='title-subscribe'>Đăng ký nhận tin mới và được giảm giá 20%</h3>
                    </Col>
                    <Col lg={12} md={24}>
                        <Form name="subscribe_form" onFinish={onFinish}>
                            <Form.Item name="email" rules={[{ required: true, type: 'email', message: 'Please input a valid email address!' }]}>
                                <Space.Compact>
                                    <Input className='input-subscribe' placeholder="Enter your email" size="large" />
                                    <Button type="primary" htmlType="submit" size="large">Subscribe</Button>
                                </Space.Compact>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
