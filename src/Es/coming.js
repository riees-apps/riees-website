import React, { Component } from 'react'
import styled from 'styled-components'
import img from "./oi.jpg";
import Image from '../components/Image/index'

const DivText = styled.div`
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding:40px 0;
`;
class Coming extends Component {
  render() {
    return (
      <div>
        <Image title='COMING TO ESPIRITO SANTO' height="100vh" image={img}/>
        <DivText/>
      </div>
    )
  }
}
export default Coming
