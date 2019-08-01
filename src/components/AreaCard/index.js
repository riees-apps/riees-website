import React, { Component } from "react";
import styled from "styled-components";
import "./area.css";

const DivAreas = styled.div`
  background: #e4e3ea;
  margin: 5vh 0;
  width: calc(100%);
  z-index: 100;
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  @media (max-width: 768px) {
    margin: 2.5vh;
  }
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  background: white;
  height: 150px;
  margin-bottom: 3%;
  margin-left: 2.5%;
  margin-right: 1.5%;
  width: 29%;
  z-index: 100;
  box-shadow: 0px 0px 5px 0.3px rgba(0, 0, 0, 0.8);
  position: relative;
  @media (max-width: 768px) {
    height: 15vh;
    width: 45%;
  }
`;
const DivCards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  margin: 0 auto;
  height: 80%;
`;
const DivHeading = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background: #e4e3ea;
  width: 100%;
  height: 20%;
`;
const Heading = styled.h1`
  font-family: "Poppins", serif;
  color: ${props => props.color};
  font-weight: bolder;
  font-size: calc(15px + 1.75vw);
  line-height: calc(15px + 1.75vw);
  letter-spacing: 1px;
  padding: 2.5vh 0.75vw 2.5vh 0;
  width: max-content;
  @media (max-width: 768px) {
    font-size: calc(1em +2vh);
    line-height: calc(1em +2vh);
    padding: 2.5vh 1.5vw 2.5vh 0;
  }
`;

function icon(area) {
  switch (area) {
    case "Ciências da Saúde":
      return "user-md";
      case "Ciências Exatas":
      return "flask";
      case "Ciências Biologicas":
      return "microscope";
      case "Ciências Sociais":
      return "user-tie";
      case "Ciências Humanas":
      return "users";
      case "Ciências Agrárias":
      return "tractor";
      case "Engenharia":
      return "cog";
      case "Linguística":
      return "comments";
      default: return "asterisk"
  }
}
class AreaCard extends Component {
  render() {
    const renderAreas = () => {
      return this.props.areas.map(area => (
        <Card>
          <i className={`fas fa-${icon(area)} icon`} />
          <h1 class="areaName">{area}</h1>
        </Card>
      ));
    };
    return (
      <DivAreas>
        <DivHeading>
          <Heading color="#303033">{this.props.name}</Heading>
          <Heading color="#003b81">areas</Heading>
        </DivHeading>
        <DivCards>{renderAreas()}</DivCards>
      </DivAreas>
    );
  }
}
export default AreaCard;
