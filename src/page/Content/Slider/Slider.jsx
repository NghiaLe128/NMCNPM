import React from "react";
import { Col, Row } from "antd";

import Category from "../../../components/Cateogry";
import Card from "../../../components/Card";
import Poster from "../../../components/Poster";
import Container from "../../../components/Container";

function Slider() {
  return (
    <Container>
      <Row>
        {/* Category */}
        <Col className="col" xs={0} sm={0} md={0} lg={0} xl={5}>
          <div style={{ height: '100%' }}>
            <Category />
          </div>
        </Col>

        {/* Poster */}
        <Col className="col" xs={24} sm={24} md={24} lg={24} xl={13}>
          <div>
            <Poster />
          </div>
        </Col>

        {/* Product */}
        <Col className="col" style={{padding: '0 !important'}} xs={24} sm={24} md={24} lg={24} xl={6}>
          <Row style={{ width: "100%", padding: '0px' }}>
            {["", ""].map(() => {
              return (
                <>
                  <Col className="col" xs={12} sm={12} md={12} lg={12} xl={24}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Card />
                    </div>
                  </Col>
                </>
              );
            })}
          </Row>
        </Col>
      </Row>

      <Row>
        {["", "", "", ""].map(() => {
          return (
            <>
              <Col className="col" xs={12} sm={12} md={12} lg={6} xl={6}>
                <div>
                  <Card />
                </div>
              </Col>
            </>
          );
        })}
      </Row>
    </Container>
  );
}

export default Slider;
