import React, { Component } from "react";
import styled from "styled-components";
import ufes from "./imgs/img1.jpg";
import uvv from "./imgs/img2.jpg";
import ifes from "./imgs/vilavelha.jpg";
import ucl from "./imgs/vitoria.jpg";
import EventCard from "../EventCard/index";
import {FormattedMessage} from 'react-intl'

import "./index.css";

const DivEvents = styled.div`
  transition: all 300ms;
  background-color: #f4f4f4;
  min-height: max-content;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 90vw;
  padding: 5% 0;
  @media (max-width: 768px) {
    padding: 5% 0;
    width:  90vw;
    justify-content: space-between;
  }
  ${props =>
    props.larger &&
    `
    margin: auto;
    width:85%
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 768px) {
      margin:0;
    width: 100%;
    justify-content: center;
  }
  `}
  ${props =>
    props.side &&
    `
    width: 95vw;
    margin: 0;
    padding: 0;
    padding-top: 10vh;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 768px) {
      margin:0;
    width: 100%;
    justify-content: center;
  }
  }
  `}
`;
const Check = styled.div`
  transition: all 300ms;
  width: 5.3vh;
  height: 5.3vh;
  border-radius: 100%;
  border: 2px solid #ccc;
  background-color: #f4f4f4;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 4vh;
    height: 4vh;
  }
  ${props =>
    props.active &&
    `
    transition:all 500ms ease;
    background-color: #0077ff;
    border:2px solid #ccc;
    
  `}
`;
const Heading = styled.h1`
  font-family: "Poppins", sans-serif;
  text-transform:uppercase;
  margin: 0;
  background: ${props => props.background || "#fafafa"};
  text-align: center;
  color: #0077ff;
  font-size: calc(10px + 3vw);
  line-height: calc(10px + 3vw);
  letter-spacing: 3px;
  margin-top: 10vh;
  width: max-content;
  padding-bottom: 1.5vh;
  border-bottom: 1vh solid pink;
`;
const DivHeading = styled.h1`
  background-color: #f4f4f4;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: flex-start;
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 0;
  @media (max-width: 768px) {
    width: 95%;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
  }
`;
const Form = styled.div`
  background-color: #f4f4f4;
  transition: all 300ms;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 45%;
  margin: 0;
  margin-left: auto;
  @media (max-width: 768px) {
    width:100%;
    margin:auto;
    margin: 2vh 0;
    flex-direction: row;
    flex-wrap: wrap;
    align-items:center;
    justify-content: center;
  }
  h1 {
    font-size: 0.4em;
    line-height: 0.35em;
    margin: auto 0.2vw auto 0.5vw;
    cursor: pointer;
    @media (max-width: 768px) {
      font-size: 0.3em;
      line-height: 0.1em;
      margin: auto 2vw auto 0.5vw;
  }
  }
  ${props =>
    props.active &&
    `
    h1{
      transition:all 500ms ease;
      color: #0077ff;
  }
  `}
`;

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
class Events extends Component {
  componentDidMount() {
    this.setState({
      ...this.state,
      final: this.props.final,
      eventos: this.props.eventos
    });
  }
  constructor() {
    super();
    this.state = {
      events:[],
      page: 1,
      initial: 0,
      final: 3,
      active: "all"
    };
  }
  handleClick(active) {
    this.setState({
      active: active,
      page: 1,
      initial: 0,
      final: this.props.final
    });
  }

  filtro = event => {
    if (this.state.active === "all") {
      return true;
    } else if (this.state.active === "events") {
      return event.props.placeEvent !== "";
    } else if (this.state.active === "news") {
      return event.props.placeEvent === "";
    }
  };
  
  render() {
    const eventos = this.props.eventos;
    const renderEvents = () => {
      return eventos.map(evento => (
        <EventCard
          id={evento.id}
          side={this.props.side}
          larger={this.props.larger}
          title={evento.nome}
          placeEvent={evento.localizacao}
          dateEvent={evento.data}
          text={evento.descricao}
          img={evento.img}
          ano={new Date(evento.data).getFullYear()}
          mes={months[new Date(evento.data).getMonth()]}
          dia={new Date(evento.data).getDate()}
          hora={addZero(new Date(evento.data).getHours())}
          minuto={addZero(new Date(evento.data).getMinutes())}
        />
      ));
    };
    var events = renderEvents();
    events = events.filter(this.filtro.bind(this));

    const renderItems = (initial, final) => {
      return events.slice(initial, final);
    };
    const prevItems = event => {
      if (this.props.larger && this.state.page !== 1) {
        document.documentElement.scrollTop = window.innerHeight;
      }
      return event.slice(
        this.setState({
          ...this.state,
          page: this.state.page === 1 ? 1 : this.state.page - 1,
          initial:
            this.props.final === 3
              ? this.state.initial === 0
                ? this.state.initial
                : this.state.initial - 1
              : this.state.initial === 0
              ? 0
              : this.state.initial - this.props.final,
          final:
            this.props.final === 3
              ? this.state.final === 3
                ? this.state.final
                : this.state.final - 1
              : this.state.final === this.props.final
              ? this.props.final
              : this.state.final - this.props.final
        })
      );
    };
    const nextItems = event => {
      if (
        this.props.larger &&
        this.state.page !== Math.ceil(events.length / this.props.final)
      ) {
        document.documentElement.scrollTop = window.innerHeight;
      }
      return event.slice(
        this.setState({
          ...this.state,
          page:
            this.state.page === Math.ceil(events.length / this.props.final)
              ? Math.ceil(events.length / this.props.final)
              : this.state.page + 1,
          initial:
            this.props.final === 3
              ? this.state.initial === events.length - this.props.final
                ? this.state.initial
                : this.state.initial + 1
              : this.state.page === Math.ceil(events.length / this.props.final)
              ? this.state.initial
              : this.state.initial + this.props.final,
          final:
            this.props.final === 3
              ? this.state.final === events.length
                ? this.state.final
                : this.state.final + 1
              : this.state.page === Math.ceil(events.length / this.props.final)
              ? this.state.final
              : this.state.final + this.props.final
        })
      );
    };
    return (
      <div style={{ zIndex: "100", position: "relative" }}>
        <DivHeading className={this.props.larger ? "" : "displayNone"}>
          <Heading background="#f4f4f4"><FormattedMessage id="News"/></Heading>
          <Form>
            <Form
              onClick={() => this.handleClick("all")}
              active={this.state.active === "all" ? true : false}
              style={{ width: "max-content" }}
            >
              <Check active={this.state.active === "all" ? true : false} />
              <h1><FormattedMessage id="News"/></h1>
            </Form>
            <Form
              onClick={() => this.handleClick("events")}
              active={this.state.active === "events" ? true : false}
              style={{ width: "max-content" }}
            >
              <Check active={this.state.active === "events" ? true : false} />
              <h1><FormattedMessage id="Events"/></h1>
            </Form>
            <Form
              onClick={() => this.handleClick("news")}
              active={this.state.active === "news" ? true : false}
              style={{ width: "max-content" }}
            >
              <Check active={this.state.active === "news" ? true : false} />
              <h1><FormattedMessage id="New"/></h1>
            </Form>
          </Form>
        </DivHeading>
        <DivEvents side={this.props.side} larger={this.props.larger}>
          <i
            onClick={() => {
              prevItems(renderItems(this.state.initial, this.state.final));
            }}
            className={`fas fa-chevron-left ${
              this.props.larger
                ? "displayNone"
                : "iconEvent" && this.props.side
                ? "displayNone"
                : "iconEvent"
            }`}
          />
          {renderItems(this.state.initial, this.state.final)}
          <i
            onClick={() => {
              nextItems(renderItems(this.state.initial, this.state.final));
            }}
            className={`fas fa-chevron-right ${
              this.props.larger
                ? "displayNone"
                : "iconEvent" && this.props.side
                ? "displayNone"
                : "iconEvent"
            }`}
          />

          <div className={` ${this.props.larger ? "pages" : "displayNone"}`}>
            <i
              onClick={() => {
                prevItems(renderItems(this.state.initial, this.state.final));
              }}
              className={`fas fa-chevron-left ${
                this.props.larger ? "iconEvent2" : "displayNone"
              }`}
            />
            <h1 className={` ${this.props.larger ? "h1Pages" : "displayNone"}`}>
              <FormattedMessage id="Page"/> {this.state.page} <FormattedMessage id="Of"/>{" "}
              {Math.ceil(events.length / this.props.final)}
            </h1>
            <i
              onClick={() => {
                nextItems(renderItems(this.state.initial, this.state.final));
              }}
              className={`fas fa-chevron-right ${
                this.props.larger ? "iconEvent2" : "displayNone"
              }`}
            />
          </div>
        </DivEvents>
      </div>
    );
  }
}
export default Events;
