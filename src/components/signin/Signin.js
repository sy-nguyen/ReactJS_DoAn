import React from "react";
import { Form, Input, Button} from "antd";
import imgLogo from "../../Images/logo/logo-d.png";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";
import './signin.css'
import { Link } from "react-router-dom";

export default function Signin() {
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className="btn-bg-signin">
      <div className="btn-login">
        <img src={imgLogo} alt="Logo Nón Trùm" />
        <h3>Đăng nhập</h3>
        <p>Vui lòng đăng nhập vào tài khoản của bạn</p>
        <Form name="basic"
          onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off"
        >
          <Form.Item
            name="Username"
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập tài khoản đăng nhập!',
              },
            ]}
          >
            <Input className="btn-input"/>
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'vui lòng nhập mật khẩu của bạn',
              },
            ]}
          >
            <Input.Password className="btn-input" />
          </Form.Item>
          <Form.Item>
          <Link to='/'><p className="text-mk">Quên mật khẩu ?</p></Link>
          </Form.Item>
          <Form.Item>
            <Button  className="btn-input btn-sigin" type="primary" htmlType="submit">
              ĐĂNG NHẬP
            </Button>
          </Form.Item>
        </Form>
        <div className="icon-lienket">
            <FaFacebookF/> <FaGoogle/><FaTwitter/>
        </div>
        <div>Bạn chưa có tài khoản? <Link to='/' className="">Đăng ký</Link></div>
      </div>
    </div>
  );
}
