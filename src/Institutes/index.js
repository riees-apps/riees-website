import React, { Component } from "react";
import Footer from "../components/Footer/index";
import Img from "../components/Image/index";
import InstituteImages from '../components/Institutes/index'
import styled from "styled-components";
import img3 from "./oi.jpg";

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

const DivText = styled.div`
  background-color: #fafafa;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  text-align: center;
  width: 100%;
  padding-top: 2.5vh;
`;
const Heading = styled.h1`
  font-family: "Avenir Next", Helvetica, Arial, sans-serif;
  width: 80%;
  text-align:center;
  color: #404040;
  font-size: calc(12px + 0.5vw);
  font-weight: lighter
`;
const Title = styled.h1`
  font-family: "Oswald", Helvetica, Arial, sans-serif;
  background: #fafafa;
  color: ${props => props.color};
  font-size: calc(30px + 3vw);
  line-height: calc(30px + 3vw);
  letter-spacing: 3px;
  padding: 6vh calc(0.5vw);
  padding-bottom: 1vh;
`;

class Institutes extends Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
  }
  render() {
    return (
      <div style={{ backgroundColor: "#fafafa" }}>
        <Img
          height="100vh"
          image={img3}
          title="Our Institutes"
          brightness="110%"
        />
        <Div>
          <Title color='#505050'>RIEES</Title>
          <Title color='#4247FE'>Institutes</Title>
        </Div>
        <DivText>
          <Heading>
            In consectetur fugiat incidunt fugiat et aut. Voluptas quae nam
            ullam possimus voluptas. Corrupti officia beatae hic omnis porro
            dignissimos voluptas aliquid. Illum quis labore est. Recusandae qui
            ut at qui consequatur quia omnis eos beatae. In consectetur fugiat incidunt fugiat et aut. Voluptas quae nam
            ullam possimus voluptas. Corrupti officia beatae hic omnis porro
            dignissimos.
          </Heading>
        </DivText>
        <InstituteImages/>
        <Footer />
      </div>
    );
  }
}
export default Institutes;
