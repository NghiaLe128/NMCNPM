// import React, { useState } from "react";
import { Col, Row } from "antd";
import Card from "../../../components/Card";

import { Button, Skeleton } from "antd";
import Container from "../../../components/Container";

function CardField(progs) {
  // const [IsLoading, SetIsLoading] = useState(false);

  const IsLoading = progs.IsLoading;
  const value = progs.value;
  
  return (
    <Container style={{ paddingTop: "20px", paddingBottom: "20px" }}>
      <Row>
        <Col className="col" xs={24} sm={24} md={24} lg={24} xl={24}>
          <div
            style={{
              paddingBottom: "0px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "fit-content",
            }}
          >
            {IsLoading === false ? (
              <Skeleton.Input shape={"square"} active />
            ) : (
              <h1 style={{ margin: "0", fontSize: "21px" }} level={3}>
                Sản phẩm nổi bậc
              </h1>
            )}

            {IsLoading === false ? (
              <Skeleton.Input shape={"square"} block={true} active />
            ) : (
              <Button type="primary">Khám phá</Button>
            )}

          </div>
          <div style={{ paddingTop: "2px" }}>
            {IsLoading === false ? (
              <Skeleton.Input
                style={{ marginTop: "10px" }}
                shape={"square"}
                block={true}
                active
              />
            ) : (
              <p style={{ margin: "0", fontSize: "14px" }} level={5}>
                Danh sách những sản phẩm theo xu hướng mà có thể bạn sẽ thích
              </p>
            )}
          </div>
        </Col>
      </Row>
      <Row>
        {IsLoading === false ? (
          ["", "", "", "", "", "", "", ""].map(() => {
            return (
              <>
                <Col className="col" xs={12} sm={12} md={12} lg={6} xl={6}>
                  <div>
                    <Skeleton.Input shape={"square"} active />
                  </div>
                </Col>
              </>
            );
          })
        ) : (
          <>
            {value.map(() => {
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
          </>
        )}
      </Row>
    </Container>
  );
}

export default CardField;
