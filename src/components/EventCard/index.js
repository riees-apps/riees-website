import React, { Component } from "react";
import styled from "styled-components";
import {FormattedMessage} from 'react-intl'
import { Link } from "react-router-dom";
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
  @media (max-width: 600px) {
    width: 85%;
    height: 48vh;
    margin-bottom: 10%;
  }
  ${props =>
    props.side &&
    `
    box-shadow: none;
    border-radius:0;
    padding-bottom:10vh;
    border-bottom: 1px solid #999;
    background-color: #f4f4f4;
    width:70%;
    height: 30vh;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 600px) {
    width: 95%;
    height: 40vh;
  }
  `}
`;
const CardImg = styled(Link)`
  transition:all 200ms ease-in;
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
  height: 32.5vh;
  border-top-left-radius:5px;
  border-top-right-radius:5px;
  @media (max-width: 600px) {
    background-size: 100% 100%;
    height: 24vh;
  }
  :hover {
    transition:all 200ms ease-in;
    box-shadow: 0px 45vh rgba(20, 20, 20, 0.5) inset;
    cursor: pointer;
  }
  ${props =>
    props.side &&
    `
    border-top-left-radius:0;
    border-top-right-radius:0;
    width:40%;
    height: 30vh;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: flex-end;
    justify-content: space-between;
    @media (max-width: 600px) {
    width: 50%;
    height: 25vh;
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
  font-family: 'Puppin', sans-serif;
  transition:all 300ms linear;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: calc(5px + 1.2vw);
  line-height: calc(2px + 1.2vw);
  font-weight: bolder;
  width: 95%;
  color: #303032;
  margin: 0;
  height: max-content;
  text-align:start;
  padding: 1vh 0 1vh 1vh;
  @media (max-width: 600px) {
    font-size: calc(6px + 1.3vh);
    line-height: calc(5px + 1.3vh);
  }
`;
const Text = styled.h1`
font-family: 'Raleway', sans-serif;
transition:all 300ms linear;
  text-align: start;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: calc(3px + 1vw);
  line-height: calc(5.5px + 1vw);
  font-weight: 400;
  width: 98%;
  color: #606060;
  height: max-content;
  padding: 0 1vh;
  margin: 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;  /* Number of lines displayed before it truncate */
  overflow: hidden;
  @media (max-width: 600px) {
    font-size: calc(5px + 1.3vh);
    line-height: calc(5px + 1.3vh);
  }
  ${props =>
    props.icon &&
    `
    width: 100%;
    padding: 1vh 0 1.5vh 1vh;
    @media (max-width: 600px) {
      padding: 0.5vh 0 1vh 1vh;
  }
  `}
`;
const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  height:31vh;
  padding-left:1vh;
  padding-top:1vh;
  @media (max-width: 600px) {
    background-size: cover;
    height: 22.5vh;
  }
  ${props =>
    props.larger &&
    `
    margin-left:2vh;
  `}
  ${props =>
    props.side &&
    `
    width:60%
    height: 30vh;
    align-items: flex-start;
    justify-content: center;
    @media (max-width: 600px) {
    width: 50%;
    height: 25vh;
  }
  `}
`;

class EventCard extends Component {
  render() {
    return (
      <Card side={this.props.side}>
          <CardImg
          style={{textDecoration:'none'}} 
          side={this.props.side}
          to={`/${window.location.pathname.split('/')[1]}/Events/${this.props.title}`}
          input={this.props.img}>
          <Date className={typeof(this.props.dateEvent) !== 'undefined' ? '' : 'displayNone'}>
            <i className={`far fa-calendar-check iconDate`} />
            Event
            
          </Date>
          <Date className={typeof(this.props.dateEvent) === 'undefined' ? '' : 'displayNone'}>
            <i className={`fas fa-clock iconDate`} />
            {this.props.date}
            
          </Date>
          </CardImg>
          <CardBody side={this.props.side}>
          
          <Title>{this.props.title}</Title>

          <div>
          <Text  className={typeof(this.props.dateEvent) === 'undefined' ? '' : 'displayNone'} >{this.props.text}</Text>
          <Text icon className={typeof(this.props.dateEvent) !== 'undefined' ? '' : 'displayNone'} ><i className={`fas fa-calendar iconDate`} /> {this.props.dateEvent}</Text>
          <Text icon className={typeof(this.props.dateEvent) !== 'undefined' ? '' : 'displayNone'} ><i className={`fas fa-clock iconDate`} /> {this.props.timeEvent}</Text>
          <Text icon className={typeof(this.props.dateEvent) !== 'undefined' ? '' : 'displayNone'} ><i className={`fas fa-map-marker-alt iconDate`} /> {this.props.placeEvent}</Text>
          </div>
          
          <Button card url={`/Events/${this.props.title}`} name={<FormattedMessage id="Button"/>} />
        </CardBody>
      </Card>
    );
  }
}
export default EventCard;
