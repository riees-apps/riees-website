import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import img2 from "./imgs/img2.jpg";
import Button from "../Button/index";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 30%;
  height: 60vh;
  transition: all 600ms;
  background-color: #fafafa;
  margin-bottom: 5%;
  ${props =>
    props.larger &&
    `
    display: flex;
  flex-direction: row;
  align-items: space-between;
  justify-content: space-between;
  width: 80%;
  height: 40vh;
  transition: all 600ms;
  background-color:#f4f4f4;
  margin-bottom:0%;
  padding:2.5% 0;
  border-bottom: 1px solid #ccc
  `}
`;
const CardImg = styled.div`
  background: url(${props => props.input});
  box-shadow: 0px 45vh rgba(0, 0, 0, 0.1) inset;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 50%;
  @media (max-width: 600px) {
    background-size: cover;
  }
  :hover {
    transition: all 600ms;
    box-shadow: 0px 45vh rgba(20, 20, 20, 0.5) inset;
    cursor: pointer;
  }
  ${props =>
    props.larger &&
    `
    width: 90%;
    height: 100%;
  }
  `}
`;
const Date = styled.h1`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 1em;
  line-height: 1em;
  width: 100%;
  height: max-content;
  padding: 1vh 0 1vh 1vh;
  margin: 0;
  color: gray;
  border-bottom: 1px solid #ddd;
`;
const Title = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 1.8em;
  line-height: 1em;
  font-weight: bold;
  width: 100%;
  color: #0077ff;
  margin: 0;
  height: max-content;
  padding: 1vh 0 1vh 1vh;
`;
const Text = styled.h1`
  text-align: start;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 1.2em;
  line-height: 1em;
  font-weight: lighter;
  width: 100%;
  color: #303030;
  height: max-content;
  padding: 1vh 0 1vh 1vh;
  margin: 0;
  ${props =>
    props.larger &&
    `
    width: 95%;
  }
  `}
`;
const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  ${props =>
    props.larger &&
    `
    margin-left:2vh;
  }
  `}
`;

class EventCard extends Component {
  render() {
    return (
      <Card larger={this.props.larger}>
          <CardImg larger={this.props.larger} input={this.props.img} />
          <CardBody larger={this.props.larger}>
          <Date>
            <i className={`fas fa-clock iconDate`} />
            {this.props.date}
          </Date>
          <Title>{this.props.title}</Title>
          <Text larger={this.props.larger}>{this.props.text}</Text>
          <Button card url={`/events/${this.props.title}`} name="Learn More" />
        </CardBody>
      </Card>
    );
  }
}
export default EventCard;
