import { Col, Row } from 'antd'
import React from 'react'
import { Container } from 'reactstrap'
import './productDescription.css'

export default function ProductDescription(props) {
    const {product} = props
  return (
    <Container className='product-description'>
        <p>Bạn đang tìm một chiếc mũ bảo hiểm đa dụng, phong cách, cá tính, sang trọng và an toàn để bảo vệ bản thân trên mọi cung đường? 
            Mũ bảo hiểm Royal M139 kính âm chính là sự lựa chọn hoàn hảo dành cho bạn.
        </p>
        <Row>
            <Col md={24} lg={12}>
                <h4>Thiết kế đột phá, tiện lợi và đa dụng.</h4>
                <p>Thiết kế kính âm mang tới sự khác biệt của Royal M139 so với các sản phẩm mũ bảo hiểm khác. Khi được kéo lên, 
                    lớp kính bảo vệ sẽ ẩn mình vào bên trong nón, biến Royal M139 thành chiếc mũ bảo hiểm đầy năng động, phong cách. 
                    Khi kéo xuống, lớp kính chắc chắn, trong suốt sẽ bảo vệ bạn khỏi khói bụi, dị vật mà vẫn mang đến cho bạn tầm nhìn thoáng đãng và 
                    phong cách thời trang trên mọi cung đường.
                </p>
            </Col>
            <Col md={24} lg={12}>
                <img src={product.images[0]} alt='img1' />
            </Col>
        </Row>
        <Row>
            <Col md={24} lg={12}>
                <img src={product.images[1]} alt='img2' />
            </Col>
            <Col md={24} lg={12}>
                <h4>Tính năng đột phá</h4>
                <p>Thời trang, phong cách và cá tính độc đáo là điều rất quan trọng đối với mỗi cá nhân, đặc biệt là những bạn trẻ. 
                    Việc sở hữu một chiếc nón bảo hiểm Royal M139 chắc chắn sẽ giúp bạn khẳng định được phong cách cá tính riêng biệt, 
                    không thể trộn lẫn của mình với những mẫu tem nhãn, màu sơn độc đáo.
                </p>
                <p>Thời trang, phong cách và cá tính độc đáo là điều rất quan trọng đối với mỗi cá nhân, đặc biệt là những bạn trẻ. 
                    Việc sở hữu một chiếc nón bảo hiểm Royal M139 chắc chắn sẽ giúp bạn khẳng định được phong cách cá tính riêng biệt, 
                    không thể trộn lẫn của mình với những mẫu tem nhãn, màu sơn độc đáo.
                </p>
            </Col>
        </Row>
        <Row>
            <Col md={24} lg={12}>
                <h4>Thiết kế phong cách, cá tính riêng</h4>
                <p>Là sản phẩm mới nhất của Royal Helmet, thương hiệu nón bảo hiểm hàng đầu Việt Nam. 
                    Royal M139 được sản xuất trên những công nghệ tiên tiến nhất, mang đến chất lượng và sự an toàn cao nhất cho người sử dụng.
                </p>
                <p>Là sản phẩm mới nhất của Royal Helmet, thương hiệu nón bảo hiểm hàng đầu Việt Nam. 
                    Royal M139 được sản xuất trên những công nghệ tiên tiến nhất, mang đến chất lượng và sự an toàn cao nhất cho người sử dụng.
                </p>
            </Col>
            <Col md={24} lg={12}>
                <img src={product.images[2]} alt='img3' />
            </Col>
        </Row>
        <Row>
            <Col md={24} lg={12}>
                <img src={product.images[3]} alt='img4' />
            </Col>
            <Col md={24} lg={12}>
                <h4>Mang tới sự an toàn cho bạn trên mọi cung đường.</h4>
                <ul>
                    <li>Vỏ nón bảo hiểm Royal M139 được chế tạo bằng nhựa ABS nguyên sinh - loại nhựa tinh khiết chưa qua sử dụng, 
                        được sử dụng cho các sản phẩm có tiêu chuẩn an toàn cao như vỏ thiết bị y tế, dược phẩm, vỏ máy bay... giúp 
                        sản phẩm có độ bền cao và chịu va đập tốt. Royal M139 có trọng lượng chỉ 950g mang đến sự nhẹ nhàng, 
                        thoải mái nhưng vẫn đảm bảo được sự an toàn cho người sử dụng.
                    </li>
                    <li>Phần đệm lót bên trong nón còn có lớp vải kháng khuẩn, chống ẩm, thấm hút mồ hôi rất tốt cho việc bảo vệ chiếc nón khỏi mùi hôi, 
                        ẩm mốc. Đây là tính năng đặc biệt phù hợp với khí hậu nhiệt đới của Việt Nam.
                    </li>
                    <li>Khóa nón được thiết kế chắc chắn, có khả năng điều chỉnh linh hoạt mang 
                        lại cho bạn trải nghiệm dễ chịu nhưng vẫn an toàn khi đội trên mình nón bảo hiểm Royal M139.
                    </li>
                    <li>Phần lót nón có thể tháo rời dễ dàng để tiện vệ sinh, mang tới sự sạch sẽ, dễ chịu cho người sử dụng.</li>
                </ul>
            </Col>
            
        </Row>
    </Container>
  )
}
