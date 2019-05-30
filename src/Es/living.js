import React, { Component } from 'react'
import styled from "styled-components";
import img from "./ei.jpg";
import Image from '../components/Image/index'


const DivText = styled.div`
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding:40px 0;
`;

class Living extends Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0
  }
  render() {
    return (
      <div>
        <Image title='LIVING IN ESPIRITO SANTO' height="100vh" image={img}/>
        <DivText/>
      </div>
    )
  }
}
export default Living
