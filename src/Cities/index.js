import React, { Component } from 'react'
import CityImage from '../components/CityImage/index'
import Img from '../components/Image/index'
import styled from "styled-components";
import img2 from './ei.jpg';
import img3 from './ola.jpg';

const DivInstitutes = styled.div`
  background-color: #f1f1f1;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  flex-wrap:wrap;
  align-items: flex-start;
  justify-content: space-around;
  width:100%;
`;
const DivText = styled.div`
  background-color: #f1f1f1;
  display: flex;
  flex-direction: row;
  flex-wrap:wrap;
  justify-content: space-around;
  text-align: center;
  width:100%;
  padding:5vh 0;
`;
const Heading = styled.h1`
  font-family: 'Oswald', sans-serif;
  width:80%;
  box-sizing: 100%;
  color:#404040;
  font-size: calc(10px + 1vw);
  margin-top: 2.5vh;
  padding: 2.5vh 0;
  border-bottom: 1px solid #000066;
  border-top: 1px solid #000066;
  font-weight:lighter;
`;

class Cities extends Component {
  render() {
    return (
      <div>
      <Img height="100vh" image={img3} title="Our Cities"/>
      <DivText>
        <Heading>In consectetur fugiat incidunt fugiat et aut. Voluptas quae nam ullam possimus voluptas. Corrupti officia beatae hic omnis porro dignissimos voluptas aliquid. Illum quis labore est. Recusandae qui ut at qui consequatur quia omnis eos beatae.</Heading>
      </DivText>
         <DivInstitutes>
            <CityImage name="Vitória" input={img2} />
            <CityImage name="Vila Velha" input={img2} />
            <CityImage name="Vitória" input={img2} />
            <CityImage name="Cariacica" input={img2} />
            <CityImage name="Serra" input={img2} />
            <CityImage name="Guarapari" input={img2} />
        </DivInstitutes>
      </div>
    )
  }
}
export default Cities
