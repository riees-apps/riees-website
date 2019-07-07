import React, { Component } from "react";
import "./places.css";
import Carousel from "react-bootstrap/Carousel";
import Button from "../../components/Button/index.js";
import styled from "styled-components";
import {FormattedMessage} from 'react-intl'

const Image = styled.div`
  background-image: url(${props => props.image});
  box-shadow: 0px 100vh rgba(0, 0, 0, 0.3) inset;
  position: relative;
  height: 50vh;
  @media (max-width: 768px) {
    height: 40vh;
}
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: flex-end;
  align-content:flex-end;
  z-index: 1;
  align-items: ${props => props.align};
  justify-content: ${props => props.justify};
  width: 100%;
`;
const Text = styled.div`

  box-shadow: 0px 100vh rgba(30, 30, 30, 0.8) inset;
  position: relative;
  height: 50vh;
  padding-left:2.5vh;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  z-index: 1;
  align-items: ${props => props.align};
  justify-content: ${props => props.justify};
  width: 40%;
  @media (max-width: 768px) {
    height: 40vh;
    width:50%;
  }
`;
const Heading = styled.h1`
font-family: "Poppins", Helvetica, Arial, sans-serif;
color: #fafafa;
border-bottom:1px solid #fafafa;
font-size: calc(20px + 0.6vw);
line-height: calc(20px + 0.6vw);
letter-spacing: 0px;
padding-bottom:2vh;
margin: 2.5vh 0 2vh 0;
width: 90%;
text-align:start;
`;
const Subheading = styled.h4`
font-family: "Raleway", Helvetica, Arial, sans-serif;
color: #dddddd;
font-weight: lighter;
font-size: calc(10px + 0.6vw);
line-height: calc(10px + 0.6vw);
width: 95%;
text-align: start;
@media (max-width: 768px) {
  letter-spacing:-1px;
  font-size: calc(5px + 1vh);
  line-height: calc(5px + 1vh);
  text-align: start;
  padding: 0 0 0.5vh 0;
}
`;
const DivBtn = styled.div`
  margin-top: auto;
  margin-bottom: 2.5vh;
  margin-left: -0.5vh;
@media (max-width: 768px) {
  margin-top: auto;
  margin-bottom:4vh;
  margin-left: -0.5vh;
}
`;


class Places extends Component {
  render() {
    const {places} = this.props
    const renderPlaces = () => {
      return places.map(place => (
        <Carousel.Item >  
        <Image
        image={place.img}

        >
        <Text>
        <Heading>
        {place.name}
        </Heading>
        <Subheading>
        {place.text}
        </Subheading>
        <DivBtn >
        <Button places url={`https://www.google.com/search?q=${place.name}`} name={<FormattedMessage id="Button"/>}/>
        </DivBtn>
        </Text>
      </Image>
      </Carousel.Item>
      ));
    };
    return (
      <Carousel  interval='2500' indicators={false} fade className='container4' >
          
          {renderPlaces()}
       
        
      </Carousel>
    );
  }
}
export default Places;
