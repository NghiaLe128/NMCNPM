import React, {useState} from 'react'
import {Row, Col, Image, Button} from 'antd'
import { WrapperButton, WrapperHeader1, WrapperHeader2, WrapperHeader3, WrapperText, WrapperAccount, WrapperTextAccount, WrapperTextCart } from './style'
import Search from 'antd/lib/transfer/search'
import ButtonSearch from '../ButtonSearch/ButtonSearch'
import {UserOutlined, CaretDownOutlined, ShoppingCartOutlined, DoubleLeftOutlined, DoubleRightOutlined} from '@ant-design/icons'

const Header = () => {
  const texts = ["Hello moi nguoi", "This is text 2", "And another text", "More text to cycle through", "The final text"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const handlePrevText = () => {
    setCurrentTextIndex((prevIndex) => (prevIndex === 0 ? texts.length - 1 : prevIndex - 1));
  };

  const handleNextText = () => {
    setCurrentTextIndex((prevIndex) => (prevIndex === texts.length - 1 ? 0 : prevIndex + 1));
  };
  return (
    <div>
      <WrapperHeader1 >
      <Col span={14}>
          <DoubleLeftOutlined style={{ color: '#fff' }} onClick={handlePrevText} />
          &nbsp;
          <DoubleRightOutlined style={{ color: '#fff' }} onClick={handleNextText} />
          <WrapperTextAccount style={{ paddingLeft: '10px' }}>{texts[currentTextIndex]}</WrapperTextAccount>
        </Col>
        <Col span={10} >

          <Image width={15} src="https://cdn.divineshop.vn/image/catalog/fontawesome/far%20fa-book.svg?hash=1635136430" style={{ filter: 'brightness(0) invert(1)' }}/>
          <WrapperTextAccount style={{paddingLeft: '10px', paddingRight: '12px'}}>Shopping Guide</WrapperTextAccount>

          <Image width={15} src="https://cdn.divineshop.vn/image/catalog/fontawesome/far%20fa-badge-percent.svg?hash=1635136430" style={{ filter: 'brightness(0) invert(1)' }}/>
          <WrapperTextAccount style={{paddingLeft: '10px', paddingRight: '12px'}}>Customer Incentives</WrapperTextAccount>

          <Image width={15} src="https://cdn.divineshop.vn/image/catalog/fontawesome/far%20fa-phone-alt.svg?hash=1635136430" style={{ filter: 'brightness(0) invert(1)' }}/>
          <WrapperTextAccount style={{paddingLeft: '10px'}}>Contact Us</WrapperTextAccount>
        </Col>
      </WrapperHeader1>
      <WrapperHeader2>
        <Col span={5}>
          <Image width={30} src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
          <WrapperText>The Quad</WrapperText>
        </Col>
        <Col span={13}>
        <ButtonSearch 
          size="middle"
          InputText = "Search"
          placeholder="input search text"
        />
        </Col>
        <Col span={6} style={{display: 'flex', gap: '20px'}}>
          <WrapperAccount>
          <UserOutlined style={{fontSize:'30px', paddingLeft: '20px'}}/>
          <div>
            <WrapperTextAccount>Register/Login</WrapperTextAccount>
            <div>
              <WrapperTextAccount>Accounts</WrapperTextAccount>
              <CaretDownOutlined />
            </div>
          </div>
          </WrapperAccount>
          <div>
            <div style={{display: 'flex', alignItems: 'center', paddingTop: '3px'}}>
              <ShoppingCartOutlined style={{fontSize:'30px', color: '#fff'}}/>
              <WrapperTextCart>Cart</WrapperTextCart>
            </div>
          </div>
        </Col>
      </WrapperHeader2>
      <WrapperHeader3 style={{gap: '49.3px'}}>
        <div style={{display: 'flex', gap: '10px'}}>
          <Image width={15} src="https://cdn.divineshop.vn/image/catalog/fontawesome/fas%20fa-eye.svg?hash=1635136430" style={{ filter: 'brightness(0) invert(1)' }}/>
          <WrapperTextAccount>The product you just viewed</WrapperTextAccount>
        </div>

        <div style={{display: 'flex', gap: '10px'}}>
          <Image width={15} src="https://cdn.divineshop.vn/image/catalog/fontawesome/fas%20fa-fire.svg?hash=1635136430" style={{ filter: 'brightness(0) invert(1)' }}/>
          <WrapperTextAccount>Products purchased a lot</WrapperTextAccount>
        </div>

        <div style={{display: 'flex', gap: '10px'}}>
          <Image width={15} src="https://cdn.divineshop.vn/image/catalog/fontawesome/fas fa-percent.svg?hash=1635136430" style={{ filter: 'brightness(0) invert(1)' }}/>
          <WrapperTextAccount>Promotional products</WrapperTextAccount>
        </div>

        <div style={{display: 'flex', gap: '10px'}}>
          <Image width={15} src="https://cdn.divineshop.vn/image/catalog/fontawesome/fas fa-map-marked-alt.svg?hash=1635136430" style={{ filter: 'brightness(0) invert(1)' }}/>
          <WrapperTextAccount>Transaction agent</WrapperTextAccount>
        </div>

        <div style={{display: 'flex', gap: '10px'}}>
          <Image width={15} src="https://cdn.divineshop.vn/image/catalog/fontawesome/fas fa-credit-card.svg?hash=1635136430" style={{ filter: 'brightness(0) invert(1)' }}/>
          <WrapperTextAccount>Payment</WrapperTextAccount>
        </div>
      </WrapperHeader3>
    </div>
  )
}

export default Header
