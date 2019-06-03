import React, { Component } from "react";
import Footer from "../components/Footer/index";
import Img from "../components/Image/index";
import Events from '../components/Events/index'
import styled from "styled-components";
import img3 from "./agenda.jpg";

const Div = styled.div`
  background-color: #fafafa;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  padding-top: 6vh;
`;
const Heading = styled.h1`
  font-family: 'Oswald', sans-serif;
  margin:0;
  background:${props => props.background || '#fafafa'};
  text-transform: uppercase;
  color: #0077ff;
  font-size: calc(30px + 4vw);
  line-height: calc(30px + 4vw);
  letter-spacing: 3px;
  padding-top:10vh;
`;


class NewsEvents extends Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
  }
  render() {
    return (
      <div style={{ backgroundColor: "#fafafa" }}>
      <Img
          height="100vh"
          image={img3}
          title="News & Events"
          brightness="110%"
        />
         <Heading background='#f4f4f4'>NEWS & EVENTS</Heading>
        <Events larger final={9}/>
      </div>
    );
  }
}
export default NewsEvents;
