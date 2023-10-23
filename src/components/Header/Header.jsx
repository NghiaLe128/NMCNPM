import React from "react";
import "./Header.css";
import { Col, Row } from "antd"
import H1 from "./H1/H1";
import H2 from "./H2/H2";
import H3 from "./H3/H3";

function Header() {
  return (
    <Row style={{ width: "100%" , marginBottom:'15px'}}>
      {/* h-01 */}
      <Col xs={0} sm={0} md={0} lg={24} xl={24}  style={{ height: "32px", background: "rgba(10,89,204,255)" }}>
        <H1/>
      </Col>

      {/* h-02 */}
      <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{ height: "120px", background: "rgba(37,121,242,255)" }}>
        <H2/>
      </Col>

      {/* h-03 */}
      <Col xs={0} sm={0} md={0} lg={24} xl={24} style={{ height: "40px", background: "#fff" }}>
        <H3/>
      </Col>
    </Row>
  );
}

export default Header;
