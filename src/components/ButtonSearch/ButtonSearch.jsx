import { Button, Flex, Input } from 'antd'
import React from 'react'
import {SearchOutlined} from '@ant-design/icons'

const ButtonSearch = (props) => {
    const {size, placeholder, InputText}=props
  return (
    <div style={{display: 'flex'}}>
        <Input 
            size={size} 
            placeholder={placeholder} 
            style={{backgroundColor: '#fff', borderRadius: 0, border: 0}}
            />
        <Button 
            size={size} 
            style={{ borderRadius: 0, border: 0, background: '#0a59cc'}} 
            icon={<SearchOutlined style={{color: '#fff'}}/>}> <span style={{color: '#fff'}}>{InputText}</span></Button>
    </div>
  );
}

export default ButtonSearch
