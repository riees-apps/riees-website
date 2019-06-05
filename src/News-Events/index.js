import React, { Component } from "react";
import Footer from "../components/Footer/index";
import Events from "../components/Events/index";
import styled from "styled-components";
import img3 from "./agenda.jpg";

const Image = styled.div`
  background-image: url(${props => props.image});
  box-shadow: 0px 150vh rgba(0, 0, 0, ${props => props.x} ) inset;
  position: relative;
  height: ${props => props.height};
  @media (max-width: 600px) {
    height: 82vh;
    box-shadow: 0px 150vh rgba(0, 0, 0, 0.4 ) inset;
  }
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;
const Title = styled.h1`
  position:fixed;
  font-family: 'Oswald', sans-serif;
  text-shadow: 3px 3px black;
  text-transform: uppercase;
  color: white;
  font-size: calc(80px + 1vw);
  line-height: calc(80px + 1vw);
  letter-spacing: 5px;
  margin:auto;
  margin-top: calc(30px + 2vw);
  width:100%;
  text-align:center;
  @media (max-width: 600px) {
    position:absolute;
  }
`;

class NewsEvents extends Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
  }

  render() {
    return (
      <div style={{ backgroundColor: "#f4f4f4" }}>
        <Image x='0.5' height="80vh" image={img3} >
            <Title>News & Events</Title>
        </Image>
        <Events larger final={9} />
        <Footer />
      </div>
    );
  }
}
export default NewsEvents;
