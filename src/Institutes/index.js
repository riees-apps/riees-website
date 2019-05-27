import React, { Component } from 'react'
import InstituteImage from '../components/InstituteImage/index'
import Footer from "../components/Footer/index";
import Img from '../components/Image/index'
import styled from "styled-components";
import ufes from './imgs/ufes.jpg'
import uvv from './imgs/uvv.jpg'
import fdv from './imgs/fdv.png'
import ucl from './imgs/ucl.jpg'
import emescam from './imgs/emescam.jpg'
import ifes from './imgs/ifes.jpg'
import img2 from './ei.jpg';
import img3 from './oi.jpg';
import { FaVideoSlash } from 'react-icons/fa';

const DivInstitutes = styled.div`
 background-color: #f1f1f1;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  flex-wrap:wrap;
  align-items: flex-start;
  justify-content: space-around;
  width:100%;
  padding:4vh 0;
`;
const DivText = styled.div`
  background-color: #f1f1f1;
  display: flex;
  flex-direction: row;
  flex-wrap:wrap;
  justify-content: space-around;
  text-align: center;
  width:100%;
  padding-top:2.5vh;
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
const Title = styled.h1`
  font-family: 'Oswald', sans-serif;
  margin:0;
  background:#f1f1f1;
  text-transform: uppercase;
  color: #0033ff;
  font-size: calc(20px + 4vw);
  line-height: calc(20px + 4vw);
  letter-spacing: 2px;
  padding:5vh 0 2.5vh 0;
`;

class Cities extends Component {
  render() {
    return (
      <div>
      <Img height="100vh" image={img3} title="Our Institutes" brightness="110%"/>
      <DivText>
        <Heading>In consectetur fugiat incidunt fugiat et aut. Voluptas quae nam ullam possimus voluptas. Corrupti officia beatae hic omnis porro dignissimos voluptas aliquid. Illum quis labore est. Recusandae qui ut at qui consequatur quia omnis eos beatae.</Heading>
      </DivText>
      <Title>Riees Institutes</Title>
      <DivInstitutes>
        <InstituteImage cities={['vitoria','são mateus','alegre']} areas={['engineering','social science','medicine','engineering','social science','medicine','fitness and health','fitness and health']} name="UFES" sub='Universidade Federal do Espirito Santo' input={ufes} />
            <InstituteImage cities={['vila velha']} areas={['engineering','social science','medicine']} name="UVV" sub='Universidade Vila Velha' input={uvv} />
            <InstituteImage cities={['vitoria']} areas={['engineering','social science','medicine']} name="FDV" sub='Faculdade de Direito de Vitória' input={fdv} />
            <InstituteImage cities={['vitoria']} areas={['engineering','social science','medicine']} name="EMESCAM" sub='Escola Superior de Ciências da Santa Casa de Misericórdia de Vitória' input={emescam} />
            <InstituteImage cities={['serra','cariacica']} areas={['engineering','social science','medicine']} name="UCL" sub='Faculdade do Centro Leste' input={ucl} />
            <InstituteImage cities={['vitoria','Alegre', 'Aracruz', 'Barra de São Francisco', 'Cachoeiro de Itapemirim', 'Cariacica', 'Santa Maria de Jetibá', 'Colatina', 'Guarapari', 'Ibatiba', 'Itapina', 'Linhares', 'Montanha', 'Nova Venécia', 'Piúma', 'Santa Teresa', 'São Mateus', 'Serra', 'Venda Nova do Imigrante', 'Viana' , 'Vila Velha']} areas={['engineering','social science','medicine']} name="IFES" sub='Instituto Federal do Espirito Santo' input={ifes} />
        </DivInstitutes>
        <Footer/>
      </div>
    )
  }
}
export default Cities
