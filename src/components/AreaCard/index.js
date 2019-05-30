import React, { Component } from "react";
import styled from "styled-components";
import './area.css'

const DivAreas = styled.div`
  background: #e4e3ea;
  margin: 10vh 0;
  width: calc(100%);
  z-index: 100;
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content:flex-start;
  @media (max-width: 768px) {
    margin:2.5vh;
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
  font-family: "Avenir Next", Helvetica, Arial, sans-serif;
  color: ${props => props.color};
  font-size: calc(25px + 1vw);
  line-height: calc(25px + 1vw);
  letter-spacing: 1px;
  padding: 2.5vh 5px 2.5vh 0;
  width: max-content;
`;
class AreaCard extends Component {
  render() {
    const renderAreas = () => {
      return this.props.areas.map(area => (
        <Card>
          <i className={`fas fa-${area.icon} icon`} />
          <h1 class="areaName">{area.name}</h1>
        </Card>
      ));
    };
    return (
      <DivAreas>
        <DivHeading>
          <Heading>{this.props.name}</Heading>
          <Heading color="rgb(0, 83, 180)">areas</Heading>
        </DivHeading>
        <DivCards>{renderAreas()}</DivCards>
      </DivAreas>
    );
  }
}
export default AreaCard;
