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
  font-family: 'Poppins', serif;
  color: ${props => props.color};
  font-size: calc(30px + 0.6vw);
  line-height: calc(30px + 0.6vw);
  letter-spacing: 0px;
  padding: 0 12px 5vh 0;
  width: max-content;
`;
const Text = styled.h1`
  font-family: "Raleway", Helvetica, Arial, sans-serif;
  color: #202022;
  font-weight: lighter;
  font-size: calc(7px + 1vw);
  line-height: calc(9px + 1vw);
  letter-spacing: 0.25px;
  width: 100%;
  text-align: start;
  @media (max-width: 768px) {
    font-size: calc(6px + 1vh);
    line-height: calc(8px + 1vh);
    letter-spacing: 0.4px;
    text-align: justify;
    padding: 0 0 0.5vh 0;
    color: #151515;
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
  handleClick(url) {
    console.log(url);
  }
  render() {
    const { name, img, cities, places, url } = this.props;
    return (
      <div style={{background:'#f4f4f4'}}>
        <Image title={name} height="100vh" image={img} />
        <Container >
          <SideMenu url={url} page="City" links={cities} />
          <DivText>
            <Div justify="flex-start">
              <Heading>{name}</Heading>
              <Heading color="#0077ff"><FormattedMessage id="Overview"/></Heading>
            </Div>
            <DivImg>
              <Img src={img1} alt="" />
            </DivImg>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              a ante ante. Praesent lorem dolor, congue ut finibus in, porta ut
              nulla. Nunc venenatis, neque vel sollicitudin facilisis, nibh nunc
              fringilla massa, eget sagittis dolor risus quis purus. Curabitur
              vitae ligula tristique, finibus tortor id, viverra nibh. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Mauris mollis
              purus facilisis purus volutpat, in tempus mauris consequat. Mauris
              tempor non magna vitae condimentum. Phasellus commodo vitae eros
              ut ullamcorper. Pellentesque non egestas urna. Duis finibus dolor
              mollis placerat imperdiet. Suspendisse in velit m
            </Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              a ante ante. Praesent lorem dolor, congue ut finibus in, porta ut
              nulla. Nunc venenatis, neque vel sollicitudin facilisis, nibh nunc
              fringilla massa, eget sagittis dolor risus quis purus. Curabitur
              vitae ligula tristique, finibus tortor id, viverra nibh. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Mauris mollis
              purus facilisis purus volutpat, in tempus mauris consequat. Mauris
              tempor non magna vitae condimentum. Phasellus commodo vitae eros
              ut ullamcorper. Pellentesque non egestas urna. Duis finibus dolor
              mollis placerat imperdiet. Suspendisse in velit m
            </Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              a ante ante. Praesent lorem dolor, congue ut finibus in, porta ut
              nulla. Nunc venenatis, neque vel sollicitudin facilisis, nibh nunc
              fringilla massa, eget sagittis dolor risus quis purus. Curabitur
              vitae ligula tristique, finibus tortor id, viverra nibh. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Mauris mollis
              purus facilisis purus volutpat, in tempus mauris consequat. Mauris
              tempor non magna vitae condimentum. Phasellus commodo vitae eros
              ut ullamcorper. Pellentesque non egestas urna. Duis finibus dolor
              mollis placerat imperdiet. Suspendisse in velit m
            </Text>
            <Div justify="flex-start">
              <Heading>{name}</Heading>
              <Heading color="rgb(0, 83, 180)"><FormattedMessage id="LivingThere"/></Heading>
            </Div>
            <DivImg>
              <Img src={img2} alt="" />
            </DivImg>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              a ante ante. Praesent lorem dolor, congue ut finibus in, porta ut
              nulla. Nunc venenatis, neque vel sollicitudin facilisis, nibh nunc
              fringilla massa, eget sagittis dolor risus quis purus. Curabitur
              vitae ligula tristique, finibus tortor id, viverra nibh. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Mauris mollis
              purus facilisis purus volutpat, in tempus mauris consequat. Mauris
              tempor non magna vitae condimentum. Phasellus commodo vitae eros
              ut ullamcorper. Pellentesque non egestas urna. Duis finibus dolor
              mollis placerat imperdiet. Suspendisse in velit m
            </Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              a ante ante. Praesent lorem dolor, congue ut finibus in, porta ut
              nulla. Nunc venenatis, neque vel sollicitudin facilisis, nibh nunc
              fringilla massa, eget sagittis dolor risus quis purus. Curabitur
              vitae ligula tristique, finibus tortor id, viverra nibh. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Mauris mollis
              purus facilisis purus volutpat, in tempus mauris consequat. Mauris
              tempor non magna vitae condimentum. Phasellus commodo vitae eros
              ut ullamcorper. Pellentesque non egestas urna. Duis finibus dolor
              mollis placerat imperdiet. Suspendisse in velit m
            </Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              a ante ante. Praesent lorem dolor, congue ut finibus in, porta ut
              nulla. Nunc venenatis, neque vel sollicitudin facilisis, nibh nunc
              fringilla massa, eget sagittis dolor risus quis purus. Curabitur
              vitae ligula tristique, finibus tortor id, viverra nibh. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Mauris mollis
              purus facilisis purus volutpat, in tempus mauris consequat. Mauris
              tempor non magna vitae condimentum. Phasellus commodo vitae eros
              ut ullamcorper. Pellentesque non egestas urna. Duis finibus dolor
              mollis placerat imperdiet. Suspendisse in velit m
            </Text>
            <Div justify="flex-start">
              <Heading><FormattedMessage id="Top"/></Heading>
              <Heading color="rgb(0, 83, 180)"><FormattedMessage id="Visit"/></Heading>
            </Div>
            <Places places={places}/>
            <Div style={{background:'#f4f4f4'}} justify="flex-start">
              <Heading>{name}</Heading>
              <Heading color="rgb(0, 83, 180)"><FormattedMessage id="Institutes"/></Heading>
            </Div>
            <InstituteImages  cityInstitute city={name}/>
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
