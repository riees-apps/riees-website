import React, { Component } from "react";
import styled from "styled-components";
import ufes from "./imgs/img1.jpg";
import uvv from "./imgs/img2.jpg";
import ifes from "./imgs/vilavelha.jpg";
import ucl from "./imgs/vitoria.jpg";
import EventCard from "../EventCard/index";
import {FormattedMessage} from 'react-intl'

import "./index.css";

const eventos = [
  {
    title:
      "Dolore ipsum Dossalore ipsum Dolore nihil in velit lorem ipsum valor1.",
    date: "Dec 06, 2019",
    text:
      " Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ufes
  },
  {
    title: "Dossalore ipsum Dolore nihil in velit lorem ipsum valor2.",
    dateEvent: "Dec 06, 2019",
    timeEvent: "4:30 PM",
    placeEvent: "Lorem ipsum",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",

    img: uvv
  },
  {
    title:
      "Dolore ipsum Dossalore ipsum Dolore nihaoil in velit lorem ipsum valor3.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ifes
  },
  {
    title: "Dolore ipsum Dossalore ipsum Dolore  in velit  lorem ipsum valor4.",
    dateEvent: "Dec 06, 2019",
    timeEvent: "4:30 PM",
    placeEvent: "Lorem ipsum",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ucl
  },
  {
    title:
      "Dolore ipsum Dossalore ipsum Dolore nihil velit lorem ipsum valor5.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ufes
  },
  {
    title: "Dolore ipsum Dossalore ipsum Dolore in velit lorem ipsum valor6.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ucl
  },
  {
    title: "Dolorsdse nihil in velit lorem ipsum valor7.",
    dateEvent: "Dec 06, 2019",
    timeEvent: "4:30 PM",
    placeEvent: "Lorem ipsum",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: uvv
  },
  {
    title: "Dolorsdse nihil in veli lorem ipsum valort8.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ifes
  },
  {
    title: "Dolorsdse nihil in velit9.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: uvv
  },
  {
    title: "Dolorsdse nihil in velit10.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ufes
  },
  {
    title: "Dolorsdse nihil in velit11.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ucl
  },
  {
    title: "Dolorsdse nihil in velit12.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: uvv
  },
  {
    title: "Dolorsdse nihil in velit13.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ifes
  },
  {
    title: "Dolorsdse nihil in velit.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ucl
  },
  {
    title: "Dolorsdse nihil in velit.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ufes
  },
  {
    title: "Dolorsdse nihil in velit.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ucl
  },
  {
    title: "Dolorsdse nihil in velit.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: uvv
  },
  {
    title: "Dolorsdse nihil in velit.18",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: uvv
  },
  {
    title:
      "Dolore ipsum Dossalore ipsum Dolore nihil in velit lorem ipsum valor1.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ufes
  },
  {
    title: "Dossalore ipsum Dolore nihil in velit2.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: uvv
  },
  {
    title: "Dolore ipsum Dossalore ipsum Dolore nihaoil in velit3.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ifes
  },
  {
    title: "Dolore ipsum Dossalore ipsum Dolore  in velit4.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ucl
  },
  {
    title: "Dolore ipsum Dossalore ipsum Dolore nihil  velit5.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ufes
  },
  {
    title: "Dolore ipsum Dossalore ipsum Dolore in velit6.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ucl
  },
  {
    title: "Dolorsdse nihil in velit7.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: uvv
  },
  {
    title: "Dolorsdse nihil in velit8.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ifes
  },
  {
    title: "Dolorsdse nihil in velit27.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: uvv
  },
  {
    title: "Dolorsdse nihil in velit10.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ufes
  },
  {
    title: "Dolorsdse nihil in velit11.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ucl
  },
  {
    title: "Dolorsdse nihil in velit12.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: uvv
  },
  {
    title: "Dolorsdse nihil in velit13.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ifes
  },
  {
    title: "Dolorsdse nihil in velit.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ucl
  },
  {
    title: "Dolorsdse nihil in velit.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ufes
  },
  {
    title: "Dolorsdse nihil in velit.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: ucl
  },
  {
    title: "Dolorsdse nihil in velit.",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: uvv
  },
  {
    title: "Dolorsdse nihil in velit.36",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: uvv
  },
  {
    title: "Dolorsdse nihil in velit.37",
    date: "Dec 06, 2019",
    text:
      "Autem id placeat minus quasi aut repellat. Sit dignissimos unde ut officia porro. Sunt id ab alias quo magnam quia aut accusantium distinctio. Incidunt ipsa odit optio voluptatem Dolore ipsum Dossalore ipsum Dolorem eos quae.",
    img: uvv
  }
];

const DivEvents = styled.div`
  transition: all 300ms;
  background-color: #f4f4f4;
  min-height: max-content;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 120%;
  padding: 5% 2.5%;
  margin-left: -10%;
  @media (max-width: 600px) {
    margin-left: -12.5%;
    padding: 5% 0;
    border:1px solid red;
    width: 125%;
    justify-content: space-between;
  }
  ${props =>
    props.larger &&
    `
    margin: auto;
    width:90%
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 600px) {
      margin:0;
    width: 100%;
    justify-content: center;
  }
  `}
  ${props =>
    props.side &&
    `
    width: 100%;
    margin: 0;
    padding: 0;
    padding-top: 10vh;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 600px) {
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
  @media (max-width: 600px) {
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
  @media (max-width: 600px) {
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
  @media (max-width: 600px) {
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
    @media (max-width: 600px) {
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

class Events extends Component {
  componentDidMount() {
    this.setState({
      ...this.state,
      final: this.props.final
    });
  }
  constructor() {
    super();
    this.state = {
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
      return typeof event.props.dateEvent !== "undefined";
    } else if (this.state.active === "news") {
      return typeof event.props.dateEvent === "undefined";
    }
  };
  render() {
    const renderEvents = () => {
      return eventos.map(evento => (
        <EventCard
          side={this.props.side}
          larger={this.props.larger}
          title={evento.title}
          placeEvent={evento.placeEvent}
          timeEvent={evento.timeEvent}
          dateEvent={evento.dateEvent}
          text={evento.text}
          img={evento.img}
          date={evento.date}
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
