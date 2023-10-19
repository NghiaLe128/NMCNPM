import React from 'react';
import { Container, Row, Col, InputGroup, FormControl, Card, Badge } from 'react-bootstrap';
import '../HomePage/Header.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';


const Header = () => {
  return (
    <Container className='bg-primary'>
      <Row>
        <Col md={3} className="d-flex align-items-center py-3">
          <div className="d-flex logo-container">
            <img
              loading='lazy'
              src="https://cdn.divineshop.vn/static/b1402e84a947ed36cebe9799e47f61c2.svg"
              className="logo img"
              alt="Logo"
            />
            <h3 className="store-name">The_Quad</h3>
          </div>
        </Col>
        <Col md={4} className='d-flex justify-content-center'>
          <InputGroup className='custom-input-group'>
            <FormControl
              type='text'
              placeholder='Tìm kiếm sản phẩm'
              aria-label="Recipient's username"
              aria-describedby='basic-addon2'
              className='custom-input'
            />
            <InputGroup.Text id='basic-addon2' className='custom-input-addon'>
              <i className="bi bi-search"></i>
            </InputGroup.Text>
          </InputGroup>
        </Col>
        <Col md={3} className="py-3">
          <Card className="w-100 h-100 p-0" style={{ background: 'inherit', border: 'none' }}>
            <Card.Body className="d-flex justify-content-between align-items-center">
              <div className="fs-3 text-danger">
                <i className="bi bi-person-circle text-white"></i>
              </div>
              <div className="text-white" style={{ margin: '0px 60px 0px 0' }}>
                Xin chào! <br />
                <a href="/dang-nhap" style={{ textDecoration: 'none', color: 'white' }}> <strong>Đăng nhập</strong></a> / <a href="/dang-ky" style={{ textDecoration: 'none', color: 'white' }}><strong>Đăng ký</strong></a>
              </div>

            </Card.Body>
          </Card>
        </Col>

        <Col md={2} className="d-flex align-items-center">
          <a href="#" className="position-relative d-inline-block">
            <i className="bi bi-heart text-danger fs-3 align-middle text-white" ></i>
            <Badge className="position-absolute badge bg-danger custom-badge">
              0
              <span className="visually-hidden">unread messages</span>
            </Badge>
          </a>

          <a href="#" className="position-relative d-inline-block" style={{margin: '0px 0px 0px 50px'}}>
            <i className="bi bi-cart text-danger fs-3 align-right text-white" ></i>
            <Badge className="position-absolute badge bg-danger custom-badge">
              0
              <span className="visually-hidden">unread messages</span>
            </Badge>
          </a>
    </Col>
      </Row>
    </Container>
  );
};

export default Header;
