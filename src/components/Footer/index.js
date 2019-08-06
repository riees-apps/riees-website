import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import opa from "./opa.jpg";
import fapes from "./oie_transparent2.png";
import governo from "./Brasao_Governo_horizontal_white_right_small.png";

const Logo = styled.img`
  width: 100%;
  transition: all 0.2s linear;
  :hover {
    cursor:pointer;
    transition: all 0.2s linear;
    transform:scale(1.03)
  }
  @media (max-width: 768px) {
    width: 120%;
  }
`;

const StyledLink = styled(Link)`
  font-family: "Poppins", sans-serif;
  text-transform: uppercase;
  width: max-content;
  color: #fff;
  text-align: start;
  color: #fff;
  font-weight: lighter;
  font-size: calc(10px + 0.9vw);
  line-height: calc(12px + 0.9vw);
  letter-spacing: 0.1vh;
  padding: 1% 1%;
  text-decoration: none;
  transition: all 0.15s linear;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    width: 90%;
    font-size: calc(5px + 2vw);
    line-height: calc(6px + 2vw);
  }
  :hover {
    text-decoration: none;
    color: #e1e1e1;
    letter-spacing: 1.5px;
    transition: all 0.15s linear;
    width: max-content;
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
  justify-content: space-around;
  width: 100%;
  filter: contrast(${props => props.contrast});
  filter: brightness(${props => props.brightness});
  z-index: 9999;
  @media (max-width: 600px) {
    background-attachment: scroll
  }
`;
const DivText = styled.div`
  color: #f1f1f1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 33vw;
  margin: 40px 0 40px 40px;
  padding-left: 3vw;
  @media (max-width: 768px) {
    width: 33vw;
    margin: 5vh 0;
    padding-left: 5vw;
  }
  ${props =>
    props.active &&
    `
    @media (max-width: 768px) {
      padding-left: 0;
  }
  `}
`;
const DivLogo = styled.div`
  color: #f1f1f1;
  display: flex;
  flex-direction: column-reverse;
  height:40vh;
  width:65%;
  align-items: flex-start;
  justify-content: space-between;
  @media (max-width: 768px) {
    height:20vh;
  }
  
`;
const Title = styled.h1`
  text-align: start;
  color: #fff;
  font-weight: bolder;
  font-size: calc(30px + 1vw);
  line-height: calc(30px + 1vw);
  width: 100%;
  margin-bottom: 7.5vh;
  @media (max-width: 768px) {
    font-size: calc(5px + 3vw);
    line-height: calc(6px + 3vw);
  }
`;
const Text = styled.h1`
  font-family: "Poppins", sans-serif;
  text-align: start;
  color: #fff;
  font-weight: lighter;
  font-size: calc(10px + 0.9vw);
  line-height: calc(12px + 0.9vw);
  letter-spacing: 0.1vh;
  width: 100%;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: calc(3px + 2vw);
    line-height: calc(5px + 2vw);
  }
`;

class Footer extends Component {
  render() {
    return (
      <Image brightness="120%" height="65vh" contrast="100%" image={opa}>
        <DivText>
          <Title>
            <FormattedMessage id="ContactUs" />
          </Title>
          <Text>
            Universidade Federal do Espirito Santo - Secretaria de Relações
            Internacionais
          </Text>
          <Text>Avenida Fernando Ferrari,514</Text>
          <Text>Vitória/ES-Brasil.</Text>
          <Text>CEP 29075-910</Text>
          <Text>+55 27 40092046 / +55 27 31459205</Text>
          <StyledLink
            style={{ color: "#0077ff" }}
            to={`/${window.location.pathname.split("/")[1]}/Contact`}
          >
            <FormattedMessage id="See all ..." />
          </StyledLink>
        </DivText>

        <DivText>
          <Title>
            <FormattedMessage id="MapSite" />
          </Title>
          <StyledLink to={`/${window.location.pathname.split("/")[1]}`}>
            <FormattedMessage id="Home" />
          </StyledLink>
          <StyledLink to={`/${window.location.pathname.split("/")[1]}/Members`}>
            <FormattedMessage id="Institutes" />
          </StyledLink>
          <StyledLink to={`/${window.location.pathname.split("/")[1]}/Coming`}>
            <FormattedMessage id="Coming" />
          </StyledLink>
          <StyledLink to={`/${window.location.pathname.split("/")[1]}/Living`}>
            <FormattedMessage id="Living" />
          </StyledLink>
          <StyledLink to={`/${window.location.pathname.split("/")[1]}/Cities`}>
            <FormattedMessage id="Cities" />
          </StyledLink>
          <StyledLink to={`/${window.location.pathname.split("/")[1]}/About`}>
            <FormattedMessage id="About" />
          </StyledLink>
          <StyledLink
            to={`/${window.location.pathname.split("/")[1]}/News-Events`}
          >
            <FormattedMessage id="News" />
          </StyledLink>
          <StyledLink to={`/${window.location.pathname.split("/")[1]}/Admin`}>
            Admin
          </StyledLink>
        </DivText>
        <DivText active>
          <Title>APOIO</Title>
          <DivLogo>
            <a href="https://fapes.es.gov.br/" target="_blank"><Logo src={fapes}/></a>
            <a href="https://www.es.gov.br/" target="_blank"><Logo src={governo}/></a>
          </DivLogo>
        </DivText>
      </Image>
    );
  }
}
export default Footer;
