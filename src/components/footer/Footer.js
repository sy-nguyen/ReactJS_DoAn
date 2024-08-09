import React from "react";
import { Col, Row, Container } from "reactstrap";
import logo from "../../Images/logo/logo-d.png"
import "./footer.css"
import { FaMapMarkerAlt, FaFacebookSquare, FaTiktok, FaYoutube} from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { SiZalo } from "react-icons/si";

export default function Footer() {
  return (
    <Container className="footer">
      <Row>
        <Col lg={3} md={4} sm={6} xs={12} className="p-4">
          <ul>
            <li><a href="/" target="_blank"><img className="logo" src={logo} alt="logo" /></a></li>
            <li className="d-flex align-items-center">
              <FaMapMarkerAlt className="icon-shrink me-3"/>
              <span className="text-break">135 Hai Bà Trưng, Quận 1, Thành phố Hồ Chí Minh.</span>
            </li>
            <li><IoCallSharp  className="me-3"/>0987 654 321</li>
            <li>
              <p className="d-flex align-items-center">
                <MdOutlineMail className="icon-shrink me-3" />
                <span className="text-break">contactus@trumnon.com.vn</span>
              </p>
            </li>
          </ul>
        </Col>
        <Col lg={3} md={4} sm={6} xs={12} className="p-4">
          <h3 >Về chúng tôi</h3>
          <ul>
            <li><a href="/" >Giới thiệu về công ty</a></li>
            <li><a href="/" >Tin tức khuyến mại</a></li>
            <li><a href="/" >Câu hỏi thường gặp</a></li>
            <li><a href="/" >Thông tin chuyển khoản</a></li>
            <li><a href="/" >Tuyển dụng</a></li>
          </ul>
        </Col>
        <Col lg={3} md={4} sm={6} xs={12} className="p-4">
          <h3>Chính sách</h3>
          <ul>
            <li><a href="/" >Chính sách đổi trả</a></li>
            <li><a href="/" >Chính sách bảo mật</a></li>
            <li><a href="/" >Chính sách bảo hành</a></li>
          </ul>
        </Col>
        <Col lg={3} md={4} sm={6} xs={12} className="p-4">
          <div className="col-contact">
            <h3>Liên kết với chúng tôi</h3>
            <ul className="contact">
              <li>
                <a id="icon-zalo"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://zalo.me/">
                  <SiZalo/>
                </a>
              </li>
              <li>
                <a id="icon-fb"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/" >
                    <FaFacebookSquare />
                    </a>
                  </li>
              <li>
                <a id="icon-tiktok"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.tiktok.com/" >
                  <FaTiktok/>
                </a>
              </li>
              <li>
                <a id="icon-yt" 
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.youtube.com/" >
                  <FaYoutube />
                </a>
              </li>
            </ul>
          </div>
          
        </Col>
      </Row>
    </Container>
  );
}
