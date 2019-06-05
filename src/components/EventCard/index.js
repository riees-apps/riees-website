import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import img2 from "./imgs/img2.jpg";
import Button from "../Button/index";

const Card = styled.div`
transition:all 300ms;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 30%;
  height: 65vh;
  transition: all 600ms;
  background-color: #fafafa;
  margin-bottom: 5%;
  box-shadow: 0px 0px 4px 0px rgba(50,50,50,0.51);
  border-radius:5px;
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
  transition:background-image 300ms ease-in;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  background: url(${props => props.input});
  box-shadow: 0px 45vh rgba(0, 0, 0, 0.1) inset;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 30vh;
  border-top-left-radius:5px;
  border-top-right-radius:5px;
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
  font-size: 1.2em;
  line-height: 1.2em;
  width: max-content;
  height: max-content;
  padding: 1vh 0 1vh 1vh;
  margin: 0;
  padding:1vh;
  background-color: #0077ff;
  color: #fafafa;
`;
const Title = styled.h1`
  transition:all 300ms linear;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 1.8em;
  line-height: 1em;
  font-weight: bold;
  width: 95%;
  color: #303032;
  margin: 0;
  height: max-content;
  text-align:start;
  padding: 1vh 0 1vh 1vh;
`;
const Text = styled.h1`
transition:all 300ms linear;
  text-align: start;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 1.2em;
  line-height: 1em;
  font-weight: 400;
  width: 100%;
  color: #606060;
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
transition:all 300ms linear;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height:50%;
  padding-left:1vh;
  padding-top:1vh;
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
      <Card >
          <CardImg  input={this.props.img}>
          <Date className={typeof(this.props.dateEvent) !== 'undefined' ? '' : 'displayNone'}>
            <i className={`far fa-calendar-check iconDate`} />
            Event
            
          </Date>
          <Date className={typeof(this.props.dateEvent) === 'undefined' ? '' : 'displayNone'}>
            <i className={`fas fa-clock iconDate`} />
            {this.props.date}
            
          </Date>
          </CardImg>
          <CardBody >
          <Title>{this.props.title}</Title>
          <Text className={typeof(this.props.dateEvent) === 'undefined' ? '' : 'displayNone'} >{this.props.text}</Text>
          <Text className={typeof(this.props.dateEvent) !== 'undefined' ? '' : 'displayNone'} ><i className={`fas fa-calendar iconDate`} /> {this.props.dateEvent}</Text>
          <Text className={typeof(this.props.dateEvent) !== 'undefined' ? '' : 'displayNone'} ><i className={`fas fa-clock iconDate`} /> {this.props.timeEvent}</Text>
          <Text className={typeof(this.props.dateEvent) !== 'undefined' ? '' : 'displayNone'} ><i className={`fas fa-map-marker-alt iconDate`} /> {this.props.placeEvent}</Text>
          <Button card url={`/events/${this.props.title}`} name="Learn More" />
        </CardBody>
      </Card>
    );
  }
}
export default EventCard;
