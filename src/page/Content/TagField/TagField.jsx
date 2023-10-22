import React from 'react'

import { Col, Row } from "antd";
import Card from "../../../components/Card";
import Container from '../../../components/Container';

function TagField() {
  return (
    <Container>
      <Row>
        <Col className="col" xs={24} sm={24} md={24} lg={24} xl={24}>
          <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', height: 'fit-content'}}>
            <h1 style={{ margin: "0", fontSize: '21px' }} level={3}>
              Từ khóa nổi bật
            </h1>

          </div>
        </Col>
      </Row>
      <Row>
        {["", "", "", "", "", ""].map(() => {
          return (
            <>
              <Col className="col" xs={4} sm={4} md={4} lg={4} xl={4}>
                <div>
                  <Card />
                </div>
              </Col>
            </>
          );
        })}
      </Row>
    </Container>
  )
}

export default TagField