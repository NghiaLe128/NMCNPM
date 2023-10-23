import React from 'react'

import { Col, Row } from "antd";
import Card from "../../../components/Card";
import Container from '../../../components/Container';
import { Skeleton } from "antd";

function TagField(progs) {

  const IsLoading = progs.IsLoading;
  const value = progs.value;

  return (
    <Container>
      <Row>
        <Col className="col" xs={24} sm={24} md={24} lg={24} xl={24}>
          <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', height: 'fit-content'}}>

            {IsLoading === false ? (
              <Skeleton.Input shape={"square"} active />
            ) : (
              <h1 style={{ margin: "0", fontSize: "21px" }} level={3}>
                Sản phẩm nổi bậc
              </h1>
            )}

          </div>
        </Col>
      </Row>
      <Row>

        {IsLoading === false ? (
          ["", "", "", ""].map(() => {
            return (
              <>
                <Col className="col" xs={12} sm={12} md={8} lg={8} xl={4}>
                  <div>
                    <Skeleton.Input block= {true} shape={"square"} active />
                  </div>
                </Col>
              </>
            );
          })
        ) : (
          <>
            {value.map((inf,index) => {
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
          </>
        )}
      </Row>
    </Container>
  )
}

export default TagField