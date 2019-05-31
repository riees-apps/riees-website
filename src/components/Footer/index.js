import React, { Component } from 'react'
import Admin from "../../Admin/index.js";
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import opa from './opa.jpg'

const StyledLink = styled(Link)`
  text-transform: uppercase;
  width:100%;
  color:#fff;
  text-align:start;
  color: #fff;
  font-weight:lighter;
  font-size: calc(6px + 1vw);
  line-height: calc(8px + 1vw);
  letter-spacing: 2px;
  padding: 1% 1%;
  text-decoration: none;
  transition:  all 0.15s linear ;
  margin-bottom:10px;
  :hover {
    text-decoration: none;
    color: #e1e1e1;
    letter-spacing: 4px;
    transition:  all 0.15s linear;
  }
`;

const Image = styled.div`
  background-image: url(${props => props.image});
  box-shadow: 0px 100vh rgba(0, 0, 0, 0.93) inset;
  position: relative;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  filter:  contrast(${props => props.contrast});
  filter: brightness(${props => props.brightness});
  z-index:99999999;
`;
const DivText = styled.div`
  color: #f1f1f1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 40%;
  margin:40px;
  padding-right:3vw;
  
`;
const Title = styled.h1`
  text-align:start;
  color: #fff;
  font-weight:lighter;
  font-size: calc(30px + 1vw);
  line-height: calc(30px + 1vw);
  width: 100%;
  margin-bottom:40px;
`;
const Text = styled.h1`
  text-align:start;
  color: #fff;
  font-weight:lighter;
  font-size: calc(8px + 1vw);
  line-height: calc(10px + 1vw);
  width: 100%;
  margin-bottom:20px;
`;

class Footer extends Component {
  render() {
    return (
      <Image brightness="120%" height='65vh' contrast="100%" image={opa} >
        <DivText>
          <Title>CONTACT US</Title>
            <Text>Universidade Federal do Espirito Santo - Secretaria de Relações Internacionais</Text>
            <Text>Avenida Fernando Ferrari,514.Vitória/ES-Brasil.</Text>
            <Text>CEP 29075-910</Text>
            <Text>+55 27 40092046 / +55 27 31459205</Text>
        </DivText>
        <DivText>
          <Title>MAP SITE</Title>
          <StyledLink>HOME</StyledLink>
          <StyledLink>OUR INSTITUTES</StyledLink>
          <StyledLink>COMING TO ESPIRITO SANTO</StyledLink>
          <StyledLink>LIVING IN ESPIRITO SANTO</StyledLink>
          <StyledLink>OUR CITIES</StyledLink>
          <StyledLink>ABOUT US</StyledLink>
          <a href="../../Admin/index.js">Go to top</a>
        </DivText>
      </Image>
    )
  }
}
export default Footer
