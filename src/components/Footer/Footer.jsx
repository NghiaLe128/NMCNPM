import React from 'react';
import { FooterContainer2, FooterContainer3, FooterContainer4, FooterImage, FooterImageMXH } from './style';
import { Col } from 'antd';

const Footer = () => {
  return (
    <div>
      <FooterContainer2>
        <FooterImageMXH>
          <img src="https://cdn.divineshop.vn/static/b77a2122717d76696bd2b87d7125fd47.svg" alt="Ví MoMo" title="Ví MoMo" width={33} />
          <img src="https://cdn.divineshop.vn/static/72a3a36fc7c66085b3f442940ba45fde.svg" alt="Mobile Banking với VnPay" title="Mobile Banking với VnPay"width={90} />
          <img src="https://cdn.divineshop.vn/static/464c7c79044dea88e86adf0e1b9c064c.svg" alt="Thẻ VISA" title="Thẻ VISA" width={60} />
          <img src="https://cdn.divineshop.vn/static/ddb866eb1214c914ea62417879046b99.svg" alt="Thẻ Mastercard" title="Thẻ Mastercard" width={40} />
          <span>... and many other forms of payment</span>
        </FooterImageMXH>
      </FooterContainer2>

      <FooterContainer3>
        <FooterImageMXH>
          <img src="https://cdn.divineshop.vn/static/4ba68c7a47305b454732e1a9e9beb8a1.svg" alt="Facebook" title="Facebook" width={25} />
          <img src="https://cdn.divineshop.vn/static/20334129395885adefc2e5217043f670.svg" alt="Youtube" title="Youtube" width={25} />
          <img src="https://cdn.divineshop.vn/static/4ae438165f9d5ea0fc6ff3da6051f938.svg" alt="Instagram" title="Instagram" width={25} />
        </FooterImageMXH>
      </FooterContainer3>

      <FooterContainer4>
        <Col span={7}>
          <div>
            <h4>INTRODUCE</h4>
            What is a copyrighted game? <br/>
            Introducing The_Quad Shop<br/>
            Terms of service<br/>
            Privacy policy<br/>
          </div>
        </Col>
        <Col span={5}>
          <div>
            <h4>ACCOUNT</h4>
            Login <br/>
            Register<br/>
          </div>
        </Col>
        <Col span={5}>
          <div>
            <h4>CONTACT</h4>
            Automatic hotline <span style={{color: 'red'}}>1900 633 305</span><br/> 
            Contact help<br/>
            Chat with customer service<br/>
          </div>
        </Col>
        <Col span={7}>
          <FooterImage>
            <img src="https://images.dmca.com/Badges/_dmca_premi_badge_2.png?ID=18522dc6-fdd6-4b49-ab40-395a79849050" alt="Badge" width={80} />
          </FooterImage>
        </Col>
      </FooterContainer4>
    </div>
  );
};

export default Footer;
