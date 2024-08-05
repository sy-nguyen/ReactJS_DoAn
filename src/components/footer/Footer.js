import React from "react";
import { Col, Row, Container } from "reactstrap";
import logo from "../../Images/logo_L_nobg.png"
import "./footer.css"
import { FaMapMarkerAlt, FaFacebookSquare, FaTiktok, FaYoutube} from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { SiZalo } from "react-icons/si";

export default function Footer() {
  return (
    <Container className="footer">
      <Row xs={1} md={2} xl={4}>
        <Col className="p-4">
          <ul>
            <li><a href="/" target="_blank"><img className="logo" src={logo} alt="logo" /></a></li>
            <li className="d-flex align-items-center">
              <FaMapMarkerAlt className="icon-shrink me-3"/>
              <span className="text-break">171/34/8, Tổ 6, KP.8B - Phường Tân Biên, Thành phố Biên Hòa, Đồng Nai.</span>
            </li>
            <li><IoCallSharp  className="me-3"/>0907 675 768</li>
            <li>
              <p className="d-flex align-items-center">
                <MdOutlineMail className="icon-shrink me-3" />
                <span className="text-break">cokhiphuochung@dinhtan.com.vn</span>
              </p>
            </li>
          </ul>
        </Col>
        <Col className="p-4">
          <h3 >Về chúng tôi</h3>
          <ul>
            <li><a href="/" >Giới thiệu về công ty</a></li>
            <li><a href="/" >Tin tức khuyến mại</a></li>
            <li><a href="/" >Câu hỏi thường gặp</a></li>
            <li><a href="/" >Thông tin chuyển khoản</a></li>
            <li><a href="/" >Tuyển dụng</a></li>
          </ul>
        </Col>
        <Col className="p-4">
          <h3>Chính sách</h3>
          <ul>
            <li><a href="/" >Chính sách đổi trả</a></li>
            <li><a href="/" >Chính sách bảo mật</a></li>
            <li><a href="/" >Chính sách bảo hành</a></li>
          </ul>
        </Col>
        <Col className="p-4">
          <h3>Liên kết với chúng tôi</h3>
          <ul className="contact">
            <li>
              <a id="icon-zalo"
                target="_blank"
                rel="noopener noreferrer"
                href="https://zalo.me/3887438130693509627">
                <SiZalo/>
              </a>
            </li>
            <li>
              <a id="icon-fb"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/people/Eke-Ph%C6%B0%E1%BB%9Bc-H%C6%B0ng/100092138013639/" >
                  <FaFacebookSquare />
                  </a>
                </li>
            <li>
              <a id="icon-tiktok"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.tiktok.com/@cokhiphuochung?_t=8odmeZN7XNY&_r=1" >
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
        </Col>
      </Row>
    </Container>
  );
}
