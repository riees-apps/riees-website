import React, { Component } from "react";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";

import Button from "../Button/index";

import { Card, CardBody, CardImg } from "./styles";

const Badge = styled.h1`
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  font-weight: bolder;
  font-size: 1em;
  line-height: 1em;
  width: max-content;
  height: max-content;
  letter-spacing: 1px;
  padding: 1vh 1.5vh;
  margin: -1% 1% 1% 1%;
  background-color: #0077ff;
  color: #fafafa;
  @media (max-width: 768px) {
    padding: 1vh 0;
    font-size: 1.2em;
    line-height: 1.2em;
    letter-spacing: 1px;
    margin: 0;
    color: #0077ff;
    background-color: transparent;
  }
`;
export const Badges = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`;
const Date = styled.h1`
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  letter-spacing: 1px;
  font-size: 1.2em;
  line-height: 1.2em;
  width: max-content;
  height: max-content;
  padding: 1vh 0 1vh 1vh;
  margin: 0;
  padding: 1vh;
  background-color: #0077ff;
  color: #fafafa;
`;
const Title = styled.h1`
  font-family: "Poppins", sans-serif;
  transition: all 300ms linear;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: calc(5px + 1.2vw);
  line-height: calc(2px + 1.2vw);
  font-weight: lighter;
  width: 95%;
  color: #303032;
  margin: 0;
  height: max-content;
  text-align: start;
  padding: 1vh 0 1vh 1vh;
  margin-bottom: 1%;
  @media (max-width: 768px) {
    margin-bottom: 1.5vh;
    width: 100%;
    padding: 0;
    font-size: calc(13px + 1.3vh);
    line-height: calc(13px + 1.3vh);
  }
`;
const Text = styled.h1`
  font-family: "Raleway", sans-serif;
  transition: all 300ms linear;
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
  -webkit-line-clamp: 4; /* Number of lines displayed before it truncate */
  overflow: hidden;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
    font-size: calc(6px + 1.5vh);
    line-height: calc(6px + 1.5vh);
  }
`;

export default class EventCard extends Component {
  render() {
    return (
      <Card side={this.props.side} larger={this.props.larger}>
        <CardImg
          style={{ textDecoration: "none" }}
          side={this.props.side}
          larger={this.props.larger}
          to={`/${window.location.pathname.split("/")[1]}/Post/${
            this.props.id
          }`}
          input={`https://riees-api.herokuapp.com/bucket/${
            this.props.capa !== null ? this.props.capa : ""
          }`}
        >
          <Date>
            <i className={`fas fa-clock iconDate`} />
            {`${this.props.dia} ${this.props.mes}, ${this.props.ano}`}
          </Date>
        </CardImg>
        <CardBody side={this.props.side} larger={this.props.larger}>
          <Badges>
            <Badge>{this.props.tag[0]}</Badge>
            <Badge className={typeof this.props.tag[1] !== "undefined" ? "" : "displayNone"} >{this.props.tag[1]}</Badge>
          </Badges>

          <Title>{this.props.title}</Title>

          <div style={{ width: "100%" }}>
            <Text>{this.props.text}</Text>
          </div>

          <Button
            card
            className="displayNoneMobile"
            url={`/Post/${this.props.id}`}
            name={<FormattedMessage id="Button" />}
          />
        </CardBody>
      </Card>
    );
  }
}
