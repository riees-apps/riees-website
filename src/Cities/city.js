import React, { Component } from "react";
import styled from "styled-components";
import Footer from "../components/Footer/index";
import SideMenu from "../components/SideMenu/index";
import Button from "../components/Button/index";
import Image from "../components/Image/index";
import img1 from "../components/Cities/imgs/img1.jpg";
import img2 from "../components/Cities/imgs/img2.jpg";
import InstituteImages from '../components/Institutes/index'
import Places from '../components/Places/index'
import {FormattedMessage} from 'react-intl'

import './cidade.css'

const DivText = styled.div`
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 100;
  width: 60%;
  padding-bottom: 10vh;
  padding-left: 2.5vh;
  @media (max-width: 768px) {
    width: 90%;
    padding-left: 0;
  }
`;
const Heading = styled.h1`
  font-family: "Poppins", serif;
  color: ${props => props.color};
  font-weight: bolder;
  font-size: calc(15px + 1.75vw);
  line-height: calc(15px + 1.75vw);
  letter-spacing: 1px;
  padding: 0 0.75vw 5vh 0;
  width: max-content;
  @media (max-width: 768px) {
    font-size: calc(1em +2vh);
    line-height: calc(1em +2vh);
    padding: 0 1.5vw 5vh 0;
  }
`;
const Text = styled.h1`
  font-family: "Raleway", serif;
  color: #303032;
  font-weight: lighter;
  font-size: calc(7px + 1vw);
  line-height: calc(8px + 1vw);
  width: 100%;
  text-align: start;
  @media (max-width: 768px) {
    font-size: calc(10px + 1vw);
    line-height: calc(11px + 1vw);
    letter-spacing: 0.5px;
    color: #505050;
    text-align: justify;
    padding: 0 0 0.5vh 0;
  }
  padding: 0 0 2.5vh 0;
`;
const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${props => props.justify};
  margin:0;
  padding: 5vh 0 0 3%;
  width: 106%;
  border:none;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;
const Container = styled.div`
  background: #f4f4f4;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  z-index: 100;
  position: relative;
  padding-top: 15vh;
  @media (max-width: 768px) {
    padding-top: 5vh;
    align-items: center;
    justify-content: center;
  }
`;
const DivImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 100;
  width:100%;
  margin-bottom:5vh;
  @media (max-width: 768px) {
    padding: 0;
    padding-top: 3vh;
  }
`;
const Img = styled.img`
  width: 85%;
  height: 50vh;
  z-index: 100;
  position: relative;
  text-align:start;
  @media (max-width: 768px) {
    width: 100%;
    height: 30vh;
    margin-top:-5vh
  }
`;
class City extends Component {
  componentWillMount() {
    if (typeof this.props.location.state != "undefined") {
      if (this.props.location.state.scrollTop === 0) {
        document.documentElement.scrollTop = this.props.location.state.scrollTop;
      }
    }
  }
  filtro = item => {
    if (item.descricao === 'generica') {
      return false;
    } else return true;
  };
  handleClick(url) {
    console.log(url);
  }
  render() {
    const { name, id, capa, Cidades, places, descricao } = this.props;
    console.log(capa)
    return (
      <div style={{background:'#f4f4f4'}}>
        <Image title={name} height="100vh" image={`https://riees-api.herokuapp.com/bucket/${capa !== null ? capa : ''}`} />
        <Container >
          <SideMenu page="City" links={Cidades.filter(this.filtro.bind(this))} />
          <DivText>
            <Div justify="flex-start">
              <Heading color='#303033'>{name}</Heading>
              <Heading  color="#003b81"><FormattedMessage id="Description"/></Heading>
            </Div>
            <DivImg>
              <Img src={img1} alt="" />
            </DivImg>
            
            <div className="innerHTMLCidade" dangerouslySetInnerHTML={{ __html: descricao }}/>
            <Div justify="flex-start">
              <Heading color='#303033'><FormattedMessage id="Top"/></Heading>
              <Heading color="#003b81"><FormattedMessage id="Visit"/></Heading>
            </Div>
            <Places places={places}/>
            <Div style={{background:'#f4f4f4'}} justify="flex-start">
              <Heading color='#303033'>{name}</Heading>
              <Heading color="#003b81"><FormattedMessage id="Institutes"/></Heading>
            </Div>
            <InstituteImages Institutos={this.props.institutes}  cityInstitute city={id}/>
            <Button
              return={true}
              color="#FF1493"
              url="/Cities"
              name={<FormattedMessage id="AllCities"/>}
            />
          </DivText>
        </Container>
        <Footer />
      </div>
    );
  }
}
export default City;
