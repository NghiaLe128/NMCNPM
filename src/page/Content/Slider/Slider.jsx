import React from "react";
import { Col, Row, Skeleton } from "antd";

import Category from "../../../components/Cateogry";
import Card from "../../../components/Card";
import Poster from "../../../components/Poster";
import Container from "../../../components/Container";

function Slider(progs) {
  const IsLoading = progs.IsLoading;
  const value = progs.value;

  return (
    <Container>
      <Row>
        {/* Category */}
        <Col className="col" xs={0} sm={0} md={0} lg={0} xl={5}>
          {IsLoading === false ? (
            <Skeleton.Input
              style={{ width: "100%", height: "100%" }}
              shape={"square"}
              block={true}
              active
            />
          ) : (
            <div style={{ height: "100%" }}>
              <Category />
            </div>
          )}
        </Col>

        {/* Poster */}
        <Col className="col" xs={24} sm={24} md={24} lg={24} xl={13}>
          {IsLoading === false ? (
            <Skeleton.Input
              style={{ width: "100%", height: "100%" }}
              shape={"square"}
              block={true}
              active
            />
          ) : (
            <div>
              <Poster />
            </div>
          )}
        </Col>

        {/* Product */}
        <Col
          className="col"
          style={{ padding: "0 !important" }}
          xs={24}
          sm={24}
          md={24}
          lg={24}
          xl={6}
        >
          <Row style={{ width: "100%", padding: "0px" }}>
            {IsLoading === false ? (
              ["", ""].map(() => {
                return (
                  <>
                    <Col
                      className="col"
                      xs={12}
                      sm={12}
                      md={12}
                      lg={12}
                      xl={24}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          width: "100%",
                        }}
                      >
                        <Skeleton.Input
                          style={{ width: "100%" }}
                          shape={"square"}
                          block = {true}
                          active
                        />
                      </div>
                    </Col>
                  </>
                );
              })
            ) : (
              <>
                {value.map((inf,index) => {
                  return ( index < 2 &&
                    <>
                      <Col
                        className="col"
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        xl={24}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            width: "100%",
                          }}
                        >
                          <Card />
                        </div>
                      </Col>
                    </>
                  );
                })}
              </>
            )}
          </Row>
        </Col>
      </Row>

      <Row>
        {IsLoading === false ? 
        ["", "", "", ""].map(() => {
          return (
            <>
              <Col className="col" xs={12} sm={12} md={12} lg={6} xl={6}>
                <div>
                  {IsLoading === false ? (
                    <Skeleton.Input
                      style={{ width: "100%" }}
                      shape={"square"}
                      active
                    />
                  ) : (
                    <Card />
                  )}
                </div>
              </Col>
            </>
          );
        }): <>
        {
          value.map((inf, index) => {
            return ( index > 1 && index < 6 &&
              <>
                <Col className="col" xs={12} sm={12} md={12} lg={6} xl={6}>
                  <div>
                    {IsLoading === false ? (
                      <Skeleton.Input
                        style={{ width: "100%" }}
                        shape={"square"}
                        active
                      />
                    ) : (
                      <Card />
                    )}
                  </div>
                </Col>
              </>
            );
          })
        }
        </>}
      </Row>
    </Container>
  );
}

export default Slider;
