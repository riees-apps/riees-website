import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import {FormattedMessage} from 'react-intl'
import opa from './opa.jpg'

const StyledLink = styled(Link)`
font-family: "Raleway", sans-serif;
  text-transform: uppercase;
  width:100%;
  color:#fff;
  text-align:start;
  color: #fff;
  font-weight:lighter;
  font-size: calc(6px + 1vw);
  line-height: calc(8px + 1vw);
  letter-spacing: 0px;
  padding: 1% 1%;
  text-decoration: none;
  transition:  all 0.15s linear ;
  margin-bottom:10px;
  :hover {
    text-decoration: none;
    color: #e1e1e1;
    letter-spacing: 1.5px;
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
  z-index:9999;
`;
const DivText = styled.div`
  color: #f1f1f1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 30vw;
  margin:40px;
  padding-right:3vw;
  ${props =>
    props.active &&
    `
    @media (max-width: 600px) {
    display:none
  }
  `}

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
font-family: "Raleway", sans-serif;
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
          <Title><FormattedMessage id="ContactUs"/></Title>
            <Text>Universidade Federal do Espirito Santo - Secretaria de Relações Internacionais</Text>
            <Text>Avenida Fernando Ferrari,514.Vitória/ES-Brasil.</Text>
            <Text>CEP 29075-910</Text>
            <Text>+55 27 40092046 / +55 27 31459205</Text>
        </DivText>
        <DivText>
          <Title><FormattedMessage id="MapSite"/></Title>
          <StyledLink  to={`/${window.location.pathname.split('/')[1]}`} ><FormattedMessage id="Home"/></StyledLink>
          <StyledLink  to={`/${window.location.pathname.split('/')[1]}/Institutes`} ><FormattedMessage id="Institutes"/></StyledLink>
          <StyledLink  to={`/${window.location.pathname.split('/')[1]}/Coming`} ><FormattedMessage id="Coming"/></StyledLink>
          <StyledLink  to={`/${window.location.pathname.split('/')[1]}/Living`} ><FormattedMessage id="Living"/></StyledLink>
          <StyledLink  to={`/${window.location.pathname.split('/')[1]}/Cities`} ><FormattedMessage id="Cities"/></StyledLink>
          <StyledLink  to={`/${window.location.pathname.split('/')[1]}/About`} ><FormattedMessage id="About"/></StyledLink>
          <StyledLink  to={`/${window.location.pathname.split('/')[1]}/News-Events`} ><FormattedMessage id="News"/></StyledLink>
          <StyledLink  to={`/${window.location.pathname.split('/')[1]}/Admin`} >Admin</StyledLink>
        </DivText>
        <DivText active>
        <Title>FEEDBACK</Title>
        <Text>Para dar sua opinião sobre o que está achando do desenvolvimento deste site envie um email para: <Text style={{color:'royalblue',marginBottom:'-3px'}}>adrian.lube@outlook.com</Text> e conte-nos o que está achando e suas sugestões</Text>
        </DivText>
      </Image>
    )
  }
}
export default Footer
