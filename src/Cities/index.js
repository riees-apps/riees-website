import React, { Component } from 'react'
import CitiesImages from '../components/Cities/index'
import Img from '../components/Image/index'
import Footer from '../components/Footer/index'
import styled from "styled-components";
import {FormattedMessage} from 'react-intl'
import img3 from './ola.jpg';

const Div = styled.div`
  background-color: #fafafa;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  text-align: center;
  width: 80%;
  margin:auto;
  padding-top: 6vh;
`;

const DivText = styled.div`
  background-color: #fafafa;
  display: flex;
  flex-direction: row;
  flex-wrap:wrap;
  justify-content: space-around;
  text-align: center;
  width:100%;
  padding:1vh 0;
`;
const Heading = styled.h1`
  font-family: "Raleway", Helvetica, Arial, sans-serif;
  margin-top:2.5vh;
  width: 80%;
  text-align:center;
  color: #404040;
  font-size: calc(11px + 1vw);
  line-height: calc(11px + 1vw);;
  letter-spacing:0.25px;
  font-weight: lighter;
  @media (max-width: 600px) {
    font-size: calc(11px + 1vw);
    line-height: calc(12px + 1vw);
    letter-spacing:0.5px;
    color: #505050;
  }
  
`;
const Title = styled.h1`
  font-family: "Poppins", Helvetica, Arial, sans-serif;
  background: #fafafa;
  text-transform:uppercase;
  color: ${props => props.color};
  font-size: calc(30px + 3vw);
  line-height: calc(30px + 3vw);
  letter-spacing: 0px;
  padding: 6vh calc(0.5vw);
  padding-bottom: 1vh;
  border-bottom:1vh solid pink;
`;

class Cities extends Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0
  }
  filtro = item => {
    if (item.descricao === 'generico') {
      return false;
    } else return true;
  };
  render() {
    return (
      <div style={{background:'#fafafa'}}>
      <Img height="100vh" image={img3} title={<FormattedMessage id="Cities"/>}/>

      <Div>
          <Title color='#0077ff'><FormattedMessage id="CitiesTitle"/></Title>
        </Div>
        <DivText>
          <Heading>
            In consectetur fugiat incidunt fugiat et aut. Voluptas quae nam
            ullam possimus voluptas. Corrupti officia beatae hic omnis porro
            dignissimos voluptas aliquid. Illum quis labore est. Recusandae qui
            ut at qui consequatur quia omnis eos beatae. In consectetur fugiat incidunt fugiat et aut. Voluptas quae nam
            ullam possimus voluptas. Corrupti officia beatae hic omnis porro
            dignissimos.
          </Heading>
        </DivText>
      <CitiesImages Cities={this.props.Cidades.filter(this.filtro.bind(this))} />
      <Footer/>
      </div>
    )
  }
}
export default Cities
