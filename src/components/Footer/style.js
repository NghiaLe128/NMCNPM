import { Row } from 'antd';
import styled from 'styled-components';

export const FooterContainer2 = styled(Row)`
    padding: 5px 120px;
    background-color: #fff;
    margin: center;
`

export const FooterContainer3 = styled(Row)`
    padding: 15px 120px;
    background-color: #c6d4df;
    position: relative;

    &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 81%; 
    height: 1px;
    background-color: black;
`

export const FooterContainer4 = styled(Row)`
    padding: 5px 120px;
    background-color: #c6d4df;
    margin: center;
`

export const FooterImage = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
`

export const FooterImageMXH = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`