import React, { useState } from "react";
import Container from "../../Container";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Typography } from "antd";

const { Text } = Typography;

function H1() {

    const [Tip, SetTip] = useState(0)

    const tips = ['Action game', 'Avancture game', 'Sports & Racing game', 'Simulation game']

    const handleButton = (type)=>{
        type === 'right' ? 
            SetTip(Tip < tips.length - 1 ? Tip + 1 : 0 ) 
        :             
            SetTip(Tip === 0 ?  tips.length - 1 : Tip - 1  ) 


        return console.log(Tip)
    }

  return (
    <Container
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex ", alignItems: "center", justifyContent: "space-between", }}>
        <Button
          type="text"
          shape="circle"
          icon={<LeftOutlined style={{ color: "#fff" }} />}
          onClick={() => handleButton('left')}
        />
        <Button
          type="text"
          shape="circle"
          icon={<RightOutlined style={{ color: "#fff" }} />}
          onClick={() => handleButton('right')}
        />
        <Text style = {{margin: '0',color: '#fff'}}level={5}>{tips[Tip]}</Text>
      </div>
    </Container>
  );
}

export default H1;
